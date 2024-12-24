"use server"; // This ensures the entire file is treated as server-side

import { TiersPersonnePhysique } from "@/types/TiersPersonnePhysique";
import api, { apiCall } from "@/lib/apiClient";
import { API_ENDPOINTS } from "@/lib/apiEndpoints";
import { revalidatePath } from "next/cache";

export interface Option {
  value: string | number;
  label: string;
}

/**
 * Fetch all TiersPersonnePhysique records
 * @returns {Promise<TiersPersonnePhysique[] | undefined>}
 */
export const getAllTiersPersonnePhysique = async (): Promise<
  TiersPersonnePhysique[] | undefined
> => {
  return await apiCall(api.get(API_ENDPOINTS.TIERS_PERSONNE_PHYSIQUE.BASE));
};

/**
 * Fetch a specific TiersPersonnePhysique by Id_Tier
 * @param id - The ID of the TiersPersonnePhysique
 * @returns {Promise<TiersPersonnePhysique | undefined>}
 */
export const getTiersPersonnePhysiqueById = async (
  id: number,
): Promise<TiersPersonnePhysique | undefined> => {
  return await apiCall(
    api.get(API_ENDPOINTS.TIERS_PERSONNE_PHYSIQUE.BY_ID(id)),
  );
};

/**
 * Create a new TiersPersonnePhysique record
 * @param data - The data for the new TiersPersonnePhysique
 * @returns {Promise<TiersPersonnePhysique | undefined>}
 */
export const createTiersPersonnePhysique = async (
  data: TiersPersonnePhysique,
): Promise<TiersPersonnePhysique | undefined> => {
  try {
    const result = await apiCall(
      api.post(API_ENDPOINTS.TIERS_PERSONNE_PHYSIQUE.BASE, data),
    );
    revalidatePath("/tiers-personne-physique");
    return result;
  } catch (error) {
    console.error("Error creating TiersPersonnePhysique:", error);
    return undefined;
  }
};

/**
 * Update an existing TiersPersonnePhysique by Id_Tier
 * @param id - The ID of the TiersPersonnePhysique to update
 * @param data - The updated data for the TiersPersonnePhysique
 * @returns {Promise<TiersPersonnePhysique | undefined>}
 */
export const updateTiersPersonnePhysique = async (
  id: number,
  data: TiersPersonnePhysique,
): Promise<TiersPersonnePhysique | undefined> => {
  return await apiCall(
    api.put(API_ENDPOINTS.TIERS_PERSONNE_PHYSIQUE.BY_ID(id), data),
  );
};

/**
 * Filter TiersPersonnePhysique records
 * @param filter - The filter criteria
 * @returns {Promise<TiersPersonnePhysique[] | undefined>}
 */
export const filterTiersPersonnePhysique = async (
  filter: Record<string, unknown>,
): Promise<TiersPersonnePhysique[] | undefined> => {
  return await apiCall(
    api.post(API_ENDPOINTS.TIERS_PERSONNE_PHYSIQUE.FILTER, filter),
  );
};

/**
 * Fetch options for a select input
 * @param url - The API endpoint to fetch options
 * @returns {Promise<Option[]>}
 */
export const fetchSelectOptions = async (url: string): Promise<Option[]> => {
  try {
    const response = await apiCall(api.get(url));
    return response.map((item: { Code: string | number; Label: string }) => ({
      value: item.Code,
      label: item.Label,
    }));
  } catch (error) {
    console.error(`Error fetching options from ${url}:`, error);
    return [];
  }
};
