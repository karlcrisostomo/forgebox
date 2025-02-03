import qs from "qs";

import { axiosInstance } from "./axios";
import { IGoogleFontsPayload, IGoogleFontsResponse } from "@/types";

export const fetchGoogleFonts = (
  payload?: IGoogleFontsPayload,
): Promise<IGoogleFontsResponse> =>
  axiosInstance
    .get(`/webfonts?${qs.stringify(payload)}`)
    .then(({ data }) => data);
