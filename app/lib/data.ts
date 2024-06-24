import axios from "axios";
import { Documentary } from "./definitions";

export async function fetchDocumentaries(): Promise<Documentary[]> {
  return await axios
    .get("/api/documentaries")
    .then((response) => response.data)
    .catch((_) => []);
}
