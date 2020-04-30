import { storeHighlights } from "../../types";

export const storeHighlightsAction = highlights => ({
  type: storeHighlights,
  payload: highlights
});
