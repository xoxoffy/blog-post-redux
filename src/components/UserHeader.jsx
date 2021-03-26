import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/ActionCreators";

const UserHeader = ({ fetchUser, userId }) => {
  useEffect(() => {
    fetchUser(userId);
  }, []);

  return <div>User Header</div>;
};

export default connect(null, { fetchUser })(UserHeader);
