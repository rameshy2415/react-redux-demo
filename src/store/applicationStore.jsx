import { configureStore } from "@reduxjs/toolkit";
import { roleSelectionSlice } from "../reducers/RoleSelectionReducer";
import { accountOwnerSlice } from "../reducers/AccountOwnerReducer";



const appStore = configureStore({
  reducer: {
    roleSelectionDetails: roleSelectionSlice.reducer,
    accountOwnerDetails: accountOwnerSlice.reducer,
  },
});

export default appStore;
