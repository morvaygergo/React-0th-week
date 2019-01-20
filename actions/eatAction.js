const eatAction = number => {
  return {
    type: "EAT_ACORN",
    payload: number
  };
};

export default eatAction;
