import { NextApiResponse } from "next";

export interface ApiResponse {
    id: string;
    numbers: number[][];
  }
  
export const fetchData = async (): Promise<ApiResponse> => {
      const response = await fetch('https://664ac067a300e8795d42d1ff.mockapi.io/api/v1/numbers/1');
      if (!response.ok) {
        throw new Error('Something was wrong');
      }
      return await response.json();
  };