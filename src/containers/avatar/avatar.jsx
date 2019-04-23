import React, { useEffect } from "react";

export default function Avatar(props) {
  useEffect(() => {
    props.getAvatarUrl("ameerk");
  }, []);

  if (props.isLoading === null && props.avatarUrl === null) {
    return null;
  }

  if (props.isLoading) {
    return <div> Loading ... </div>;
  }
  return <img src={props.avatarUrl} alt="avatar" />;
}
