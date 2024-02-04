import AgentInfo from "./AgentInfo";
import AgentRoleSelection from "./AgentRoleSelection";
import AgentSearch from "./AgentSearch";
import { useSelector } from "react-redux";
import Workflow from "./WorkFlow";
import SaveButton from "./SaveButton";
import AccountOwnerUI from "./accountOwner/AccountOwnerUI";

const Body = () => {
  //const dispatch = useDispatch();
  const isAgentSearch = useSelector((state) => state.roleSelectionDetails.isAgentSearch);
  const isAgentInfo = useSelector((state) => state.roleSelectionDetails.isAgentInfo);
  const workFlowInfo = useSelector((state) => state.roleSelectionDetails.workFlowInfo);


  return (
    <>
      <main>
        <AgentRoleSelection />
        {isAgentSearch && <AgentSearch />}
        {isAgentInfo && <AgentInfo />}
        {isAgentInfo && <Workflow />}
        {isAgentInfo && <AccountOwnerUI />}
        {isAgentInfo &&  <SaveButton workFlowData={workFlowInfo} />}
      </main>
    </>
  );
};

export default Body;
