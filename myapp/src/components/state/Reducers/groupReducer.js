const groupsDefaultState = {
  groups: [
    {
      Name: "XYZ",
      AGE: 20,
      Addr: "ABC",
    },
    {
      Name: "XZZ",
      AGE: 21,
      Addr: "ACC",
    },
    {
      Name: "XYY",
      AGE: 22,
      Addr: "ABB",
    },
  ],
};

export const groupReducer = (state = groupsDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      return { ...state, groups: [...state.groups, action.groups] };
    default:
      return state;
  }
};
