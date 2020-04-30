import { changeTag } from "../../types";

export const tagSelectionAction = tag => ({
  type: changeTag,
  payload: tag
});
