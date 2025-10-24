import type { Ticket } from "../types/ticket";

const STORAGE_KEY = "ticketapp_tickets";

export function getTickets(): Ticket[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTickets(tickets: Ticket[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
}

export const getTicketStats = (tickets: Ticket[]) => ({
  total: tickets.length,
  open: tickets.filter((t) => t.status === "open").length,
  inProgress: tickets.filter((t) => t.status === "in_progress").length,
  closed: tickets.filter((t) => t.status === "closed").length,
});
