import { storeDocuments } from "../../types";

export const storeDocumentsAction = documents => ({
  type: storeDocuments,
  payload: documents
});
