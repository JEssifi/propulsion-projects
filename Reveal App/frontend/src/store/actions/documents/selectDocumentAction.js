import { selectDocument } from "../../types";

export const selectDocumentAction = document => ({
  type: selectDocument,
  payload: document
});
