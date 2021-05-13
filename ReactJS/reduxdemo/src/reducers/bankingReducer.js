const initialState = {
  balance: 0,
  isCurrent: false,
  
};

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "interest":
      return { ...state, balance: state.balance * 1.04 };
    case "delete-account":
      return { ...state, balance: 0 };
    case "change-acctType":
      return { ...state, isCurrent: !state.isCurrent };
    default:
      return state;
  }
};

//action = {
//   type:'deposit',
//   payload:100
// }
