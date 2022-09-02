export const modalReducer = (state, action) => {
    switch (action.type) {
      case "MODAL-offer":
        return {
          modalId: action.payload,
          active: !state.active,
          modalType: "singleFocusOffer",
        };
      case "MODAL-ask":
        return {
          modalId: action.payload,
          active: !state.active,
          modalType: "singleFocusAsk",
        };
      case "ACCOUNT_MODAL-offer":
        return {
          modalId: action.payload,
          active: !state.active,
          modalType: "accountEditOffer",
        };
      case "ACCOUNT_MODAL-ask":
        return {
          modalId: action.payload,
          active: !state.active,
          modalType: "accountEditAsk",
        };
      case "DELETE_SINGLE_POST":
        return {
          modalId: action.payload,
          active: !state.active,
          modalType: "deleteSinglePost",
        };
    }
  };