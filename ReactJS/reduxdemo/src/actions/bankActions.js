export const deposit = (amount) => {
  return {
    type: "deposit",
    payload: amount,
  };
};

