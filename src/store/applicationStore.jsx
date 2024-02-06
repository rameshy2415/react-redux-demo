import { configureStore } from "@reduxjs/toolkit";
import { roleSelectionSlice } from "../reducers/RoleSelectionReducer";
import { accountOwnerSlice } from "../reducers/AccountOwnerReducer";

import { uiNotificationSlice } from "../reducers/UIReducer";
import APICallReducer from "../reducers/APICallReducer";

const appStore = configureStore({
  reducer: {
    roleSelectionDetails: roleSelectionSlice.reducer,
    accountOwnerDetails: accountOwnerSlice.reducer,
    uiNotofication: uiNotificationSlice.reducer,
    posts: APICallReducer
  },
});

export default appStore;
