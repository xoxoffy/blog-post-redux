import jsonPlaceholder from "../apis/jsonPlaceholder";

// Defining a function that returns a function (redux thunk makes it possible
// to return actions as functions, not objects necessary)
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
