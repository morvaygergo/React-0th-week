export default (buyAcorn = number => {
  return {
    type: "BUY_ACORN",
    payload: number,
  };
});
