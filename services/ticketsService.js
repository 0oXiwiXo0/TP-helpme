let tickets = [];
let currentId = 1;

const ticketsServices = {
  findTickets: () => {
    // retourne une copie triée des tickets par date de création asc
    return [...tickets].sort(
      (a, b) => new Date(a.dateCreation) - new Date(b.dateCreation)
    );
  },

  setTickets: (newTickets) => {
    tickets = [...newTickets];
    // met à jour currentId pour éviter les collisions (optionnel)
    currentId =
      tickets.length > 0 ? Math.max(...tickets.map((t) => t.id)) + 1 : 1;
  },

  createTicket: (auteur, titre, description) => {
    const ticket = new Ticket(currentId++, auteur, titre, description);
    tickets.push(ticket);
    return ticket;
  },
};

module.exports = ticketsServices;
