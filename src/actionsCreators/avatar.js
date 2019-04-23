import { createAction } from "redux-action";

// fetch data from endpoint
const fetchingAvatarData = createAction("FETCHING_AVATAR_DATA");

const receivedAvatarData = createAction("RECEICED_AVATAR_DATA");

export const getAvatarUrl = username => async dispatch => {
  dispatch(fetchingAvatarData());
  const response = await fetch(`https:api.github.com/users/${username}`);
  const json = await response.json();
  const avatarUrl = json.avatar_url;
  dispatch(receivedAvatarData(avatarUrl));
};
