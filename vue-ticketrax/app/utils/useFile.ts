// utils/useTickets.ts

export interface Ticket {
  id: string;
  title: string;
  description?: string;
  status: "open" | "in_progress" | "closed";
  createdAt?: string;
  updatedAt?: string;
}

export function getTickets(): Ticket[] {
  if (typeof localStorage === "undefined") return [];
  const stored = localStorage.getItem("tickets");
  return stored ? JSON.parse(stored) : [];
}

export function saveTickets(tickets: Ticket[]) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem("tickets", JSON.stringify(tickets));
}

export function getTicketStats(tickets: Ticket[]) {
  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "open").length;
  const inProgress = tickets.filter((t) => t.status === "in_progress").length;
  const closed = tickets.filter((t) => t.status === "closed").length;

  return { total, open, inProgress, closed };
}
