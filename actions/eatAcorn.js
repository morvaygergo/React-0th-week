export default (eatAcorn = number => {
  return {
    type: "EAT_ACORN",
    payload: number,
  };
});
