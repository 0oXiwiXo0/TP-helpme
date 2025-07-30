let tickets = []; // je crée le tableau
let currentId = 1;

const ticketsServices = {
  findTickets: () => {
    return this.tickets;
  },

  findTickets: function () {
    // On crée une copie du tableau des tickets pour ne pas modifier l'original
    const copieTickets = [];

    for (let i = 0; i < tickets.length; i++) {
      copieTickets.push(tickets[i]);
    }

    // On trie la copie par date de création (du plus ancien au plus récent)
    copieTickets.sort(function (a, b) {
      const dateA = new Date(a.dateCreation);
      const dateB = new Date(b.dateCreation);
      return dateA - dateB; // Si dateA est avant dateB, on met A avant B
    });

    // On retourne la liste triée
    return copieTickets;
  },

  setTickets: (newTickets) => {
    tickets = [];

    for (let i = 0; i < newTickets.length; i++) {
      tickets.push(newTickets[i]);
    }

    if (tickets.length > 0) {
      const ids = tickets.map((t) => t.id);
      currentId = Math.max(...ids) + 1;
    } else {
      currentId = 1;
    }
  },

  createTicket: (auteur, titre, description) => {
    const ticket = new Ticket(currentId++, auteur, titre, description);
    tickets.push(ticket);
    return ticket;
  },
};

module.exports = ticketsServices;
