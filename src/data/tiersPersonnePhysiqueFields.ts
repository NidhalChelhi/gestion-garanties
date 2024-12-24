export const tiersPersonnePhysiqueFields = [
  {
    section: "Information Générale",
    inputs: [
      {
        name: "Id_Civilite",
        label: "Civilité",
        type: "select",
        mandatory: true,
      },
      {
        name: "Nom",
        label: "Nom",
        type: "text",
        mandatory: true,
      },
      {
        name: "Prenom",
        label: "Prénom",
        type: "text",
        mandatory: true,
      },
      {
        name: "Prenom_Pere",
        label: "Prénom du père",
        type: "text",
        mandatory: false,
      },
      {
        name: "Nom_Jeune_Fille",
        label: "Nom de jeune fille",
        type: "text",
        mandatory: false,
      },
      {
        name: "Date_Naissance",
        label: "Date de Naissance",
        type: "date",
        mandatory: true,
      },
      {
        name: "Lieu_Naissance",
        label: "Lieu de Naissance",
        type: "text",
        mandatory: true,
      },
      {
        name: "Code_Pays_Naissance",
        label: "Pays",
        type: "select",
        mandatory: true,
        defaultValue: "TUN", // Retained
      },
      {
        name: "Id_Nationalite",
        label: "Nationalité",
        type: "select",
        mandatory: true,
        defaultValue: 1, // Retained
      },
      {
        name: "Tuteur_Nom",
        label: "Nom du tuteur",
        type: "text",
        mandatory: false,
      },
      {
        name: "Tuteur_Prenom",
        label: "Prénom du tuteur",
        type: "text",
        mandatory: false,
      },
      {
        name: "Etat_Civil",
        label: "État Civil",
        type: "select",
        mandatory: true,
      },
      {
        name: "Id_Profession",
        label: "Profession",
        type: "select",
        mandatory: true,
      },
    ],
  },
  {
    section: "Conjoint(e)",
    inputs: [
      {
        name: "Conjoint_Nom",
        label: "Nom du conjoint",
        type: "text",
        mandatory: false,
      },
      {
        name: "Conjoint_Prenom",
        label: "Prénom du conjoint",
        type: "text",
        mandatory: false,
      },
      {
        name: "Regime_Matrimonial",
        label: "Régime Matrimonial",
        type: "select",
        mandatory: false,
      },
    ],
  },
  {
    section: "Information Décès",
    inputs: [
      {
        name: "Date_Deces",
        label: "Date Décès",
        type: "date",
        mandatory: false,
      },
      {
        name: "Date_Acte_Deces",
        label: "Date Acte Décès",
        type: "date",
        mandatory: false,
      },
      {
        name: "Date_Reception_Acte_Deces",
        label: "Date Réception Acte de Décès",
        type: "date",
        mandatory: false,
      },
      {
        name: "Date_PV_heritage",
        label: "Date PV Héritage",
        type: "date",
        mandatory: false,
      },
    ],
  },
  {
    section: "Adresse",
    inputs: [
      {
        name: "Adresse_Code_Pays",
        label: "Pays",
        type: "select",

        mandatory: true,
        defaultValue: "TUN", // Retained
      },
      {
        name: "Adresse_Code_Gouvernorat",
        label: "Gouvernorat",
        type: "select",
        mandatory: true,
      },
      {
        name: "Adresse_Delegation",
        label: "Délégation",
        type: "text",
        mandatory: false,
      },
      {
        name: "Adresse_Ville",
        label: "Ville",
        type: "text",
        mandatory: false,
      },
      {
        name: "Adresse_Code_Postal",
        label: "Code Postal",
        type: "text",
        mandatory: false,
      },
      {
        name: "Adresse_Omeda",
        label: "Omeda",
        type: "text",
        mandatory: false,
      },
      {
        name: "Adresse_Cite",
        label: "Cité",
        type: "text",
        mandatory: false,
      },
      {
        name: "Adresse_Residence",
        label: "Résidence",
        type: "text",
        mandatory: false,
      },
      {
        name: "Adresse_Immeuble",
        label: "Immeuble",
        type: "text",
        mandatory: false,
      },
      {
        name: "Adresse_Bloc",
        label: "Bloc",
        type: "text",
        mandatory: false,
      },
      {
        name: "Adresse_Num",
        label: "Numéro",
        type: "number",
        mandatory: false,
      },
      {
        name: "Adresse_Rue",
        label: "Rue",
        type: "text",
        mandatory: false,
      },
    ],
  },
  {
    section: "Pièce d'identité",
    inputs: [
      {
        name: "PID_Id_PID_Type",
        label: "Type de Pièce d'identité",
        type: "select",
        mandatory: true,
        defaultValue: 1, // Retained
      },
      {
        name: "PID_Numero",
        label: "Numéro de Pièce d'identité",
        type: "text",
        mandatory: true,
      },
      {
        name: "PID_Delivrance_Par",
        label: "Délivrée par",
        type: "text",
        mandatory: true,
      },
      {
        name: "PID_Delivrance_Date",
        label: "Date Délivrance",
        type: "date",
        mandatory: false,
      },
    ],
  },
];
