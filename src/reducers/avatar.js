export default function avatarReducer(
  state = { loading: null, avatarUrl: null },
  action
) {
  switch (action.type) {
    case "FETCHING_AVATAR_DATA":
      return {
        ...state,
        loading: true
      };
    case "RECEICED_AVATAR_DATA":
      return {
        ...state,
        loading: false,
        avatarUrl: action.payload
      };
    default:
      return state;
  }
}
