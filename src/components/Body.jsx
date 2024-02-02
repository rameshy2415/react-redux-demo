import AgentInfo from "./AgentInfo";
import AgentRoleSelection from "./AgentRoleSelection";
import AgentSearch from "./AgentSearch";
import { useSelector } from "react-redux";

const Body = () => {
  //const dispatch = useDispatch();
  const isAgentSearch = useSelector((state) => state.isAgentSearch);
  const isAgentInfo = useSelector((state) => state.isAgentInfo);

  return (
    <>
      <main>
        <AgentRoleSelection />
        {isAgentSearch && <AgentSearch></AgentSearch>}
        {isAgentInfo && <AgentInfo></AgentInfo>}
      </main>
    </>
  );
};

export default Body;
