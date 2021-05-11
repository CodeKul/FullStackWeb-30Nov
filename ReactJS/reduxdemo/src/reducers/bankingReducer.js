const initialState = 0;

export const bankingReducer = (state, action) => {
  switch (action.type) {
    case "deposit":
      return;
    case "withdraw":
      return;
    case "interest":
      return;
    case "delete-account":
      return;
    default:
      return state;
  }
};

//action = {
//   type:'deposit',
//   payload:100
// }
