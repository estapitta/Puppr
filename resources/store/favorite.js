const SELECT_FAVORITE = "SELECT_FAVORITE";
const REMOVE_PUPPY = "REMOVE_PUPPY";

export const selectFavorite = puppyId => {
  return {
    type: SELECT_FAVORITE,
    puppyId
  };
};

export const removePuppy = puppyId => {
  return {
    type: REMOVE_PUPPY,
    puppyId
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_FAVORITE:
      return [...state, action.puppyId];

    case REMOVE_PUPPY:
      return state.filter(puppyId => {
        return puppyId !== action.puppyId;
      });
    default:
      return state;
  }
};
