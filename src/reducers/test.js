const initialData = {
  testData: []
}

export default function testReducer(state = initialData, action) {
  switch (action.type) {
    case "TEST_DATA":
      return { ...state, testData: action.Payload };
    default:
      return state;
  }
}
