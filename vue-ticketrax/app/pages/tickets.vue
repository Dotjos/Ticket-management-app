<script setup lang="ts">
import { ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";

definePageMeta({middleware:"auth"})

interface Ticket {
  id: string;
  title: string;
  description?: string;
  status: "open" | "in_progress" | "closed";
  createdAt?: string;
  updatedAt?: string;
}

const toast = useToast();

const tickets = ref<Ticket[]>([]);
const form = ref({
  title: "",
  description: "",
  status: "open" as Ticket["status"],
});
const editingId = ref<string | null>(null);

// ✅ Load tickets on mount
onMounted(() => {
  tickets.value = getTickets();
});

// ✅ Validate input
const validateForm = () => {
  if (!form.value.title.trim()) return "Title is required";
  if (!["open", "in_progress", "closed"].includes(form.value.status))
    return "Invalid status";
  if (form.value.description && form.value.description.length > 300)
    return "Description too long";
  return "";
};

// ✅ Handle create/update
const handleSubmit = (e: Event) => {
  e.preventDefault();

  const validationError = validateForm();
  if (validationError) return toast.add({ title: validationError });

  let updatedTickets = [...tickets.value];

  if (editingId.value) {
    // Update existing
    updatedTickets = updatedTickets.map((t) =>
      t.id === editingId.value
        ? { ...t, ...form.value, updatedAt: new Date().toISOString() }
        : t
    );
    editingId.value = null;
    toast.add({ title: "Ticket updated successfully!" });
  } else {
    // Create new
    const newTicket: Ticket = {
      id: uuidv4(),
      title: form.value.title,
      description: form.value.description,
      status: form.value.status,
      createdAt: new Date().toISOString(),
    };
    updatedTickets.push(newTicket);
    toast.add({ title: "Ticket created successfully!" });
  }

  tickets.value = updatedTickets;
  saveTickets(updatedTickets);
  form.value = { title: "", description: "", status: "open" };
};

// ✅ Edit ticket
const handleEdit = (ticket: Ticket) => {
  form.value = {
    title: ticket.title,
    description: ticket.description || "",
    status: ticket.status,
  };
  editingId.value = ticket.id;
};

// ✅ Delete ticket
const handleDelete = (id: string) => {
  if (!confirm("Are you sure you want to delete this ticket?")) return;
  tickets.value = tickets.value.filter((t) => t.id !== id);
  saveTickets(tickets.value);
  toast.add({ title: "Ticket deleted successfully!" });
};
</script>

<template>
  <div class="max-w-[1440px] mx-auto p-6 mt-20">
    <h1 class="text-3xl font-bold text-deep-blue mb-8">Ticket Management</h1>

    <!-- Ticket Form -->
    <form @submit="handleSubmit" class="bg-white shadow-md rounded-lg p-6 space-y-4">
      <div>
        <label class="block text-gray-700 font-medium">Title *</label>
        <input
          v-model="form.title"
          type="text"
          class="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">Description</label>
        <textarea
          v-model="form.description"
          class="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div>
        <label class="block text-gray-700 font-medium">Status *</label>
        <select
          v-model="form.status"
          class="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500"
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <button
        type="submit"
        class="bg-deep-blue text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {{ editingId ? "Update Ticket" : "Create Ticket" }}
      </button>
    </form>

    <!-- Ticket List -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <p v-if="tickets.length === 0" class="text-gray-500">
        No tickets yet. Create one above!
      </p>

      <div
        v-for="ticket in tickets"
        :key="ticket.id"
        :class="[
          'p-6 rounded-lg shadow-md border-l-4 bg-white',
          ticket.status === 'open'
            ? 'border-green-500'
            : ticket.status === 'in_progress'
            ? 'border-amber-500'
            : 'border-gray-400'
        ]"
      >
        <h3 class="font-semibold text-lg">{{ ticket.title }}</h3>
        <p class="text-gray-600 text-sm mt-1">{{ ticket.description }}</p>
        <span
          :class="[
            'inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full',
            ticket.status === 'open'
              ? 'bg-green-100 text-green-700'
              : ticket.status === 'in_progress'
              ? 'bg-amber-100 text-amber-700'
              : 'bg-gray-200 text-gray-700'
          ]"
        >
          {{ ticket.status.replace('_', ' ').toUpperCase() }}
        </span>

        <div class="flex justify-end gap-3 mt-4">
          <button @click="handleEdit(ticket)" class="text-blue-600 hover:underline">
            Edit
          </button>
          <button @click="handleDelete(ticket.id)" class="text-red-600 hover:underline">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
