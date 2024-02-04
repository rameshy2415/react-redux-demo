import { createSlice } from "@reduxjs/toolkit";


const ROLE_SELECTION_INITIAL_STATE = {
    agentRole: "",
    summaryInfo: {},
    agentSid: "",
    isAgentSearch: false,
    isAgentInfo: false,
    isWorkflow: true,
    agentInfo: {
      firstName: "",
      middleName: "",
      lastname: "",
      sid: "",
      repCode: "",
      branchCode: "",
      suffix: "",
    },
    workFlowInfo: { partyType: "", transactionType: "" },
  };
  
  export const roleSelectionSlice = createSlice({
    name: "roleSelectionDetails",
    initialState: ROLE_SELECTION_INITIAL_STATE,
    reducers: {
      delegateView: (state, action) => {
        state.isAgentInfo = false;
        state.isAgentSearch = true;
        state.agentRole = action.payload.agentRole;
      },
  
      agentSearch: (state, action) => {
        state.isAgentInfo = true;
        state.isAgentSearch = true;
        state.agentInfo = action.payload.agentInfo;
        state.isTableVisible= action.payload.isTableVisible;
      },
  
      setAgentSid: (state, action) => {
        state.agentSid = action.payload.agentSid;
        state.isTableVisible= action.payload.isTableVisible;
      },
  
      agentView: (state, action) => {
        state.isAgentInfo = true;
        state.isAgentSearch = false;
        state.agentRole = action.payload.agentRole;
        state.agentInfo = action.payload.agentInfo;
      },
  
      removeAgentView: (state) => {
        state.isAgentInfo = false;
      },
      saveData: (state, action) => {
        state.workFlowInfo = action.payload.workFlowInfo;
      },
    },
  });