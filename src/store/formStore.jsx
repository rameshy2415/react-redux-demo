import { legacy_createStore as createStore } from "redux";
import { AgentModel } from "../model/agent.model";
import { WorkFlowModel } from "../model/workflow.model";

const INITIAL_STATE = {
  agentRole: "",
  summaryInfo: {},
  agentSid: "",
  isAgentSearch: false,
  isAgentInfo: false,
  isWorkflow: false,
  agentInfo: new AgentModel(),
  workFlowInfo: new WorkFlowModel(),
};
const createFormReducer = (state = INITIAL_STATE, action) => {
  let tempState;

  switch (action.type) {
    case "DELEGATE_VIEW":
      tempState = {
        isAgentInfo: false,
        isAgentSearch: true,
        agentSid: state.agentSid,
        agentRole: action.payload.agentRole,
        isWorkflow: state.isWorkflow,
        agentInfo: state.agentInfo,
        workFlowInfo: state.workFlowInfo,
      };
      break;

    case "AGENT_SEARCH":
      tempState = {
        isAgentInfo: true,
        isAgentSearch: true,
        agentSid: action.payload.agentSid,
        agentRole: state.agentRole,
        isWorkflow: state.isWorkflow,
        agentInfo: action.payload.agentInfo,
        workFlowInfo: state.workFlowInfo,
      };
      break;

    case "SET_AGENT_SID":
      tempState = {
        isAgentInfo: state.isAgentInfo,
        isAgentSearch: true,
        agentSid: action.payload.agentSid,
        agentRole: state.agentRole,
        isWorkflow: state.isWorkflow,
        agentInfo: state.agentInfo,
        workFlowInfo: state.workFlowInfo,
      };
      break;

    case "AGENT_TABLE_VIEW":
      tempState = {
        isAgentInfo: true,
        isAgentSearch: true,
        agentRole: state.agentRole,
        agentSid: state.agentSid,
        isWorkflow: state.isWorkflow,
        agentInfo: state.agentInfo,
        workFlowInfo: state.workFlowInfo,
      };
      break;

    case "AGENT_INFO":
      console.log("Agent Info", action);
      tempState = {
        isAgentInfo: true,
        isAgentSearch: false,
        agentSid: state.agentSid,
        agentRole: action.payload.agentRole,
        isWorkflow: state.isWorkflow,
        agentInfo: action.payload.agentInfo,
        workFlowInfo: state.workFlowInfo,
      };
      break;

    case "AGENT_REMOVE":
      tempState = {
        isAgentInfo: false,
        isAgentSearch: state.isAgentSearch,
        agentSid: state.agentSid,
        agentRole: state.agentRole,
        isWorkflow: state.isWorkflow,
        agentInfo: state.agentInfo,
        workFlowInfo: state.workFlowInfo,
      };
      break;

    default:
      tempState = { ...state };
      break;
  }

  return tempState;
};

const formStore = createStore(createFormReducer);

export default formStore;
