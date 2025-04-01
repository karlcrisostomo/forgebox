import { IGoogleFont, IGoogleFontsPayload } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchGoogleFonts } from "../googleFonts";

interface IUseFetchGoogleFontsProps {
  payload?: IGoogleFontsPayload;
}

export const useFetchGoogleFonts = ({
  payload,
}: IUseFetchGoogleFontsProps = {}): UseQueryResult<IGoogleFont[], Error> => {
  return useQuery({
    queryKey: ["googleFonts", payload],
    queryFn: () => fetchGoogleFonts(payload).then((res) => res.items),
    refetchOnWindowFocus: false,
  });
};

export default useFetchGoogleFonts;
