import { useNavigate } from "react-router";
import { getTickets, getTicketStats } from "../utils/ticketStorage";

export default function Dashboard() {
  const navigate = useNavigate();
  const tickets = getTickets();
  const stats = getTicketStats(tickets);

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/");
  };

  return (
    <div className="max-w-[1440px] mx-auto p-6 mt-20">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-deep-blue">Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Total Tickets */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-gray-700 font-semibold">Total Tickets</h3>
          <p className="text-2xl font-bold mt-2">{stats.total}</p>
        </div>

        {/* Open Tickets */}
        <div className="bg-green-100 shadow-md rounded-lg p-6">
          <h3 className="text-gray-700 font-semibold">Open</h3>
          <p className="text-2xl font-bold mt-2 text-green-600">{stats.open}</p>
        </div>

        {/* In Progress Tickets */}
        <div className="bg-amber-100 shadow-md rounded-lg p-6">
          <h3 className="text-gray-700 font-semibold">In Progress</h3>
          <p className="text-2xl font-bold mt-2 text-amber-600">
            {stats.inProgress}
          </p>
        </div>

        {/* Closed Tickets */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6">
          <h3 className="text-gray-700 font-semibold">Closed</h3>
          <p className="text-2xl font-bold mt-2 text-gray-600">
            {stats.closed}
          </p>
        </div>
      </section>

      <div className="mt-10">
        <button
          onClick={() => navigate("/tickets")}
          className="bg-deep-blue text-white px-5 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Manage Tickets
        </button>
      </div>
    </div>
  );
}
