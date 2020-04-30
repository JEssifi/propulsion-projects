import { storeTags } from "../../types";

export const storeTagsAction = tags => ({
  type: storeTags,
  payload: tags
});
