import api from "../services/api";

export function getTestData() {
  return function (dispatch) {
    api.get("/api/test").then((result) => {
      dispatch({
        type: "TEST_DATA",
        Payload: result.data.data,
      });
    });
  };
}
