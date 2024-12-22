import { TiersPersonnePhysique } from "@/types/TiersPersonnePhysique";
import api from "@/lib/axios";
import axios from "axios";

// Utility function for handling errors
const handleError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data && typeof error.response.data === "string"
        ? error.response.data
        : error.message;
    throw new Error(message);
  }
  const fallbackMessage =
    typeof error === "string" ? error : "An unexpected error occurred.";
  throw new Error(fallbackMessage);
};

// 1. Get all TiersPersonnePhysique records
export const getAllTiersPersonnePhysique = async (): Promise<
  TiersPersonnePhysique[] | undefined
> => {
  try {
    const response = await api.get("/Tiers/Tiers_Personne_Physique");
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined; // Explicitly return undefined
  }
};

// 2. Get a specific TiersPersonnePhysique by Id_Tier
export const getTiersPersonnePhysiqueById = async (
  id: number,
): Promise<TiersPersonnePhysique | undefined> => {
  try {
    const response = await api.get(`/Tiers/Tiers_Personne_Physique/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined;
  }
};

// 3. Create a new TiersPersonnePhysique
export const createTiersPersonnePhysique = async (
  data: TiersPersonnePhysique,
): Promise<TiersPersonnePhysique | undefined> => {
  try {
    const response = await api.post("/Tiers/Tiers_Personne_Physique", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    handleError(error);
    return undefined;
  }
};

// 4. Update an existing TiersPersonnePhysique by Id_Tier
export const updateTiersPersonnePhysique = async (
  id: number,
  data: TiersPersonnePhysique,
): Promise<TiersPersonnePhysique | undefined> => {
  try {
    const response = await api.put(
      `/Tiers/Tiers_Personne_Physique/${id}`,
      data,
    );
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined; // Explicitly return undefined
  }
};

// 5. Filter TiersPersonnePhysique records
export const filterTiersPersonnePhysique = async (
  filter: Record<string, unknown>,
): Promise<TiersPersonnePhysique[] | undefined> => {
  try {
    const response = await api.post(
      "/Tiers/Tiers_Personne_Physique/Filter",
      filter,
    );
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined; // Explicitly return undefined
  }
};
