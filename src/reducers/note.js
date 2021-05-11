const initialData = {
  noteData: [],
  isSaved: false,
};

export default function testReducer(state = initialData, action) {
  switch (action.type) {
    case "CREATE_DATA_SUCCESS":
      return { ...state, isSaved: true };
    case "GET_NOTE_DATAS":
      return { ...state, noteData: action.Payload };
    case "SEARCH_NOTE_DATAS":
      return { ...state, noteData: action.Payload };
    default:
      return state;
  }
}
