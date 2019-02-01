export function handleServerError(err, dispatch) {
  const { response } = err;
  let message = "Server error. Please try again later";

  if (response) {
    const { status } = response;

    if (status === 401) {
      message = "You are not authorized";
    }

    if (status === 400 || status === 422) {
      message = response.body.message;
    }
  }

  dispatch({
    type: "SET_SNACKBAR_SETTINGS",
    payload: {
      open: true,
      variant: "error",
      message
    }
  });
  return;
}
