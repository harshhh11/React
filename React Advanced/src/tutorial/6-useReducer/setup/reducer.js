export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModelOpen: true,
      modalContent: "item added",
    };
  } else if (action.type === "NO_VALUE") {
    return { ...state, isModelOpen: true, modalContent: "please add a value" };
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, isModelOpen: false };
  } else if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  } else {
    throw new Error("No matching action type");
  }
};
