import { API_LIST_ENDPOINTS } from "@/lib/apiEndpoints";
import { fetchSelectOptions } from "@/actions/tiersPersonnePhysique";

// Define types for fields
interface FormField {
  name: string;
  type: string;
  [key: string]: any;
}

interface FieldSection {
  section: string;
  inputs: FormField[];
}

// Restrict valid keys for API_LIST_ENDPOINTS
type ListEndpointKeys = keyof typeof API_LIST_ENDPOINTS;

export const fetchFormOptions = async (
  fields: FieldSection[],
): Promise<Record<string, any[]>> => {
  const selectFields = fields
    .flatMap((section) => section.inputs)
    .filter((input) => input.type === "select");

  const promises = selectFields.map(async (field) => {
    try {
      // Ensure field.name is a valid key
      const url = API_LIST_ENDPOINTS[field.name as ListEndpointKeys];
      if (!url)
        throw new Error(`No API endpoint found for field: ${field.name}`);

      const options = await fetchSelectOptions(url);
      return [field.name, options];
    } catch (error) {
      console.error(`Error fetching options for ${field.name}:`, error);
      return [field.name, []]; // Fallback to empty options on error
    }
  });

  const entries = await Promise.all(promises);
  return Object.fromEntries(entries);
};
