export interface Images {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface Image {
  id: string;
  alt_description: string;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
}
