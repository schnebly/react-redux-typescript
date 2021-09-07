import { ActionType } from "../action-types";

export type Action =
  | SearchRepositioriesAction
  | SearchRepositioriesSuccessAction
  | SearchRepositioriesErrorAction;

interface SearchRepositioriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositioriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositioriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
