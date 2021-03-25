import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/ActionCreators";

const PostList = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return <div>Post list</div>;
};

export default connect(null, { fetchPosts })(PostList);
