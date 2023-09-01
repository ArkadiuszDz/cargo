import { API_URL } from "./constants";

export const getShipData = async <T>(id?: number): Promise<{data: T, status: number}> => {
  let apiUrl = API_URL;
  if (id !== undefined) {
    apiUrl = `${API_URL}/${id}`;
  }
  const response = await fetch(apiUrl);
  const { status } = response;
  const data = await response.json();

  return { data, status }
}