import { connect } from "react-redux";
import Avatar from "./avatar";
import { getAvatarUrl } from "../../actionsCreators/avatar";
import { getAvatarIsLoading, getAvatar } from "../../selectors/avatar";

const mapStateToProps = state => {
  const isLoading = getAvatarIsLoading(state);
  const avatarUrl = getAvatar(state);
  return {
    isLoading,
    avatarUrl
  };
};

const mapDispatchToProps = { getAvatarUrl };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
