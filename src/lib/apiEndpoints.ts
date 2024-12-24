const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://197.0.115.121/api";

const withBaseURL = (path: string): string => `${BASE_URL}${path}`;

const addQueryParams = (
  url: string,
  params: Record<string, string>,
): string => {
  const query = new URLSearchParams(params).toString();
  return `${url}?${query}`;
};

export const API_ENDPOINTS = {
  TIERS_PERSONNE_PHYSIQUE: {
    BASE: "/Tiers/Tiers_Personne_Physique",
    BY_ID: (id: number) => withBaseURL(`/Tiers/Tiers_Personne_Physique/${id}`),
    FILTER: "/Tiers/Tiers_Personne_Physique/Filter",
  },
  TIERS_PERSONNE_MORALE: {
    BASE: "/Tiers/Tiers_Personne_Morale",
    BY_ID: (id: number) => withBaseURL(`/Tiers/Tiers_Personne_Morale/${id}`),
    FILTER: "/Tiers/Tiers_Personne_Morale/Filter",
  },
  LISTS: {
    Id_Civilite: addQueryParams("/Tiers/Civilite/List", {
      Include_Empty_Row: "False",
    }),
    Code_Pays_Naissance: addQueryParams("/Geo/Pays/List", {
      Include_Empty_Row: "False",
    }),
    Id_Nationalite: addQueryParams("/Tiers/Nationalite/List", {
      Include_Empty_Row: "False",
    }),
    Etat_Civil: addQueryParams("/Tiers/Etat_Civil/List", {
      Include_Empty_Row: "False",
    }),
    Id_Profession: addQueryParams("/Tiers/Profession/List", {
      Include_Empty_Row: "False",
    }),
    Adresse_Code_Pays: addQueryParams("/Geo/Pays/List", {
      Include_Empty_Row: "False",
    }),
    Adresse_Code_Gouvernorat: addQueryParams("/Geo/Gouvernorat/List", {
      Include_Empty_Row: "False",
    }),
    Regime_Matrimonial: addQueryParams("/Tiers/Regime_Matrimonial/List", {
      Include_Empty_Row: "False",
    }),
    PID_Id_PID_Type: addQueryParams("/Tiers/PID_Types/List", {
      Include_Empty_Row: "False",
    }),
  },
};

// Export LISTS independently for convenience
export const API_LIST_ENDPOINTS = API_ENDPOINTS.LISTS;
