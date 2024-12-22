export interface TiersPersonnePhysique {
  Id_Tier?: number;
  Qualite_Juridique?: string;
  Id_Civilite?: number;
  Civilite?: string;
  Nom?: string;
  Prenom?: string;
  Prenom_Pere?: string;
  Nom_Jeune_Fille?: string;
  Nom_Complet?: string;
  Date_Naissance?: string; // ISO 8601 format (date-time)
  Lieu_Naissance?: string;
  Code_Pays_Naissance?: string;
  Pays_Naissance?: string;
  Id_Nationalite?: number;
  Nationalite?: string;
  Tuteur_Nom?: string;
  Tuteur_Prenom?: string;
  Etat_Civil?: string;
  Conjoint_Nom?: string;
  Conjoint_Prenom?: string;
  Regime_Matrimonial?: string;
  Id_Profession?: number;
  Profession?: string;
  Date_Deces?: string; // ISO 8601 format (date-time)
  Date_Acte_Deces?: string; // ISO 8601 format (date-time)
  Date_Reception_Acte_Deces?: string; // ISO 8601 format (date-time)
  Date_PV_heritage?: string; // ISO 8601 format (date-time)
  Adresse_Id?: number;
  Adresse_Code_Pays?: string;
  Adresse_Pays?: string;
  Adresse_Code_Gouvernorat?: number;
  Adresse_Gouvernorat?: string;
  Adresse_Delegation?: string;
  Adresse_Ville?: string;
  Adresse_Code_Postal?: string;
  Adresse_Omeda?: string;
  Adresse_Cite?: string;
  Adresse_Residence?: string;
  Adresse_Immeuble?: string;
  Adresse_Bloc?: string;
  Adresse_Num?: number;
  Adresse_Rue?: string;
  Adresse_Complet?: string;
  PID_Id?: number;
  PID_Id_PID_Type?: number;
  PID_Type?: string;
  PID_Numero?: string;
  PID_Delivrance_Par?: string;
  PID_Delivrance_Date?: string; // ISO 8601 format (date-time)
  PID_Delivrance_A?: string;
  Contacts?: ContactPersonnePhysique[];
  Heritiers?: Heritage[];
}

export interface ContactPersonnePhysique {
  Id_Contact?: number;
  Id_Tier?: number;
  tel_1?: number;
  tel_2?: number;
  Fax?: number;
  Tel_Bureau?: number;
  Tel_Domicile?: number;
  Adresse_mail?: string;
}

export interface Heritage {
  Id_Heritage?: number;
  Id_Tier?: number;
  Id_Tier_heritier?: number;
  Nom_heritier?: string;
  Part_heritage?: number;
  Id_Affiliation_Heritier?: number;
  Tuteur_Nom?: string;
  Tuteur_Prenom?: string;
  Is_Procuration?: boolean;
  Date_Procuration?: string; // ISO 8601 format (date-time)
  Date_Enregistrement_Procuration?: string; // ISO 8601 format (date-time)
}
