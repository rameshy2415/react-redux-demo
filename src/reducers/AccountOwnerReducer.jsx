import { createSlice } from "@reduxjs/toolkit";
const ACCOUNT_OWNER_INITIAL_STATE = {
    isEciSearch: false,
    isAccountOwner: false,
    isWorkflow: true,
    isTableVisible:false,
    accountOwnerInfo: {
      firstName: "",
      middleName: "",
      lastname: "",
      sid: "",
      repCode: "",
      branchCode: "",
      suffix: "",
    },
  };

export const accountOwnerSlice = createSlice({
  name: "accountOwnerDetails",
  initialState: ACCOUNT_OWNER_INITIAL_STATE,
  reducers: {
    viewAccountOwner(state) {
      console.log("State", state);
    },
  },
});