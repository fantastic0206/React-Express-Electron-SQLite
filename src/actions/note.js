import api from "../services/api";

export function addNote(sendData) {
  return function (dispatch) {
    api.post("/api/note/create", sendData).then((result) => {
      console.log(result.data);
      dispatch({
        type: "CREATE_DATA_SUCCESS",
        Payload: result.data.message,
      });
    });
  };
}

export function getNotes() {
  return function (dispatch) {
    api.get("api/note/getNoteData").then((result) => {
      console.log(result.data);
      dispatch({
        type: "GET_NOTE_DATAS",
        Payload: result.data.data,
      });
    });
  };
}

export function updateNote(sendData, noteId) {
  return function (dispatch) {
    api.post(`/api/note/update/${noteId}`, sendData).then((result) => {
      console.log(result.data);
      dispatch({
        type: "UPDATE_DATA_SUCCESS",
        Payload: result.data.message,
      });
    });
  };
}

export function searchNotes(searchKey) {
  return function (dispatch) {
    api.post("/api/note/search", { searchKey }).then((result) => {
      console.log(result.data);
      dispatch({
        type: "SEARCH_NOTE_DATAS",
        Payload: result.data.data,
      });
    });
  };
}

export function initSaved() {
  return function (dispatch) {
    dispatch({
      type: "INIT_SAVED",
    });
  };
}
