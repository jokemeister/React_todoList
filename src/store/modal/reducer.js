const defaultState = {
  modalState: false,
  formState: 'create'
}

export function modalReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_MODAL_STATE":
      return {...state, modalState: action.payload};
    case "SET_FORM_STATE":
      return {...state, formState: action.payload};
    default: 
      return state;
  };
}