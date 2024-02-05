import { createSlice } from "@reduxjs/toolkit";
const ACCOUNT_OWNER_INITIAL_STATE = {
    eci:'',
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
    eciSearchHandler(state, action) {
      state.eci = action.payload.eci;
      state.isTableVisible = action.payload.isTableVisible;

    },
    viewAccountOwner(state) {
      console.log("State", state);
    },

    hideEciSearchTable: (state, action)=>{
      state.isTableVisible = action.payload.isTableVisible;
    }
  },
});