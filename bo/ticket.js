class Ticket {
  constructor(id, auteur, titre, description) {
    if (!auteur) throw new Error("Auteur obligatoire");
    if (!titre) throw new Error("Titre obligatoire");
    if (titre.length > 50) throw new Error("Titre trop long");
    if (description && description.length > 2000)
      throw new Error("Description trop longue");

    this.id = id;
    this.auteur = auteur;
    this.titre = titre;
    this.description = description;
    this.dateCreation = new Date().toLocaleString("fr-FR");
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
