const buyAction = number => {
  return {
    type: "BUY_ACORN",
    payload: number
  };
};

export default buyAction;
