import { useEffect, useState } from "react";
import type { Ticket, TicketStatus } from "../types/ticket";
import { getTickets, saveTickets } from "../utils/ticketStorage";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

export default function TicketManagement() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "open" as TicketStatus,
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  // Load tickets from localStorage
  useEffect(() => {
    setTickets(getTickets());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    if (!form.title.trim()) return "Title is required";
    if (!["open", "in_progress", "closed"].includes(form.status))
      return "Invalid status";
    if (form.description && form.description.length > 300)
      return "Description too long";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) return toast.error(validationError);

    let updatedTickets = [...tickets];

    if (editingId) {
      // Edit existing ticket
      updatedTickets = updatedTickets.map((t) =>
        t.id === editingId
          ? { ...t, ...form, updatedAt: new Date().toISOString() }
          : t
      );
      setEditingId(null);
      toast.success("Ticket updated successfully!");
    } else {
      // Create new ticket
      const newTicket: Ticket = {
        id: uuidv4(),
        title: form.title,
        description: form.description,
        status: form.status,
        createdAt: new Date().toISOString(),
      };
      updatedTickets.push(newTicket);
      toast.success("Ticket created successfully!");
    }

    setTickets(updatedTickets);
    saveTickets(updatedTickets);
    setForm({ title: "", description: "", status: "open" });
  };

  const handleEdit = (ticket: Ticket) => {
    setForm({
      title: ticket.title,
      description: ticket.description || "",
      status: ticket.status,
    });
    setEditingId(ticket.id);
  };

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this ticket?")) return;
    const updatedTickets = tickets.filter((t) => t.id !== id);
    setTickets(updatedTickets);
    saveTickets(updatedTickets);
    toast.success("Ticket deleted successfully!");
  };

  return (
    <div className="max-w-[1440px] mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold text-deep-blue mb-8">
        Ticket Management
      </h1>

      {/* Ticket Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-gray-700 font-medium">Title *</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Status *</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-deep-blue text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {editingId ? "Update Ticket" : "Create Ticket"}
        </button>
      </form>

      {/* Ticket List */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.length === 0 ? (
          <p className="text-gray-500">No tickets yet. Create one above!</p>
        ) : (
          tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`p-6 rounded-lg shadow-md border-l-4 ${
                ticket.status === "open"
                  ? "border-green-500"
                  : ticket.status === "in_progress"
                  ? "border-amber-500"
                  : "border-gray-400"
              } bg-white`}
            >
              <h3 className="font-semibold text-lg">{ticket.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{ticket.description}</p>
              <span
                className={`inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full ${
                  ticket.status === "open"
                    ? "bg-green-100 text-green-700"
                    : ticket.status === "in_progress"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {ticket.status.replace("_", " ").toUpperCase()}
              </span>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => handleEdit(ticket)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ticket.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
