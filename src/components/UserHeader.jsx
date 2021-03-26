import { useEffect } from "react";
import { connect } from "react-redux";

const UserHeader = ({ user }) => {
  if (!user) {
    return null;
  }

  return <div className="header">{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  // ownProps is a reference to the props in the component so we can refer to userId
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
