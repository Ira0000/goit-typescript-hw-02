import axios from "axios";
import { Images } from "../types";

export const fetchImagesWithValue = async (
  page: number,
  query: string
): Promise<Images> => {
  const { data } = await axios.get<Images>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: `1dGbpqqj5OroUypzuMCYUoNYgL40QLGn97yi6KIZf1w`,
        query: `${query}`,
        page: page,
        per_page: 8,
      },
    }
  );
  return data;
};
