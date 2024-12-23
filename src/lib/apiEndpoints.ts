export const API_ENDPOINTS = {
  TIERS_PERSONNE_PHYSIQUE: {
    BASE: "/Tiers/Tiers_Personne_Physique",
    BY_ID: (id: number) => `/Tiers/Tiers_Personne_Physique/${id}`,
    FILTER: "/Tiers/Tiers_Personne_Physique/Filter",
  },
  TIERS_PERSONNE_MORALE: {
    BASE: "/Tiers/Tiers_Personne_Morale",
    BY_ID: (id: number) => `/Tiers/Tiers_Personne_Morale/${id}`,
    FILTER: "/Tiers/Tiers_Personne_Morale/Filter",
  },
};
