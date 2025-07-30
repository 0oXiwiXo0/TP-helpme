class Ticket {
  constructor(id, auteur, titre, description, creation, etat) {
    this.id = id;
    this.auteur = auteur;
    this.titre = titre;
    this.description = description;
    this.creation = new Date();
    this.etat = "ouvert";
  }
}

const EtatTicket = {
  OUVERT: "OUVERT",
  CLOS: "CLOS",
};

module.exports = {
  Ticket,
  EtatTicket,
};
