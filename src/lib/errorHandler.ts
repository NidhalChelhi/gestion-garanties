import axios from "axios";

export const handleError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data && typeof error.response.data === "string"
        ? error.response.data
        : error.message;
    console.error("API Error:", message);
    throw new Error(message);
  }
  console.error("Unexpected Error:", error);
  throw new Error(
    typeof error === "string" ? error : "An unexpected error occurred.",
  );
};
