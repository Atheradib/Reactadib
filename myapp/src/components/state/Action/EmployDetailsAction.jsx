export const addNewEmp = (name, disc, img) => ({
  type: "ADD_EMP",
  empData: {
    name,
    disc,
    img,
  },
});
