import AgentInfo from "./AgentInfo";
import AgentRoleSelection from "./AgentRoleSelection";
import AgentSearch from "./AgentSearch";
import { useSelector } from "react-redux";
import Workflow from "./WorkFlow";
import SaveButton from "./SaveButton";
import AccountOwnerUI from "./accountOwner/AccountOwnerUI";
import Notification from "./commons/Notification";
import { useDispatch } from "react-redux";
import { uiNotificationAction } from "../actions/uiNotificationActions";
import PlanSelectionUI from "./planSelection/PlanSelection";
import RegBiUI from "./regBI/RegBI";
import LanguageConsentUI from "./languageConsent/LanguageConsent";
import BrokerageAccountLinkingtUI from "./brokerageAccountLinking/BrokerageLinkingAccount";
import TcpUI from "./trustedContactPerson/Tcp";
import { useEffect } from "react";
import { roleSelectionAction } from "../actions/RoleSelectionActions";

const Body = () => {

useEffect(()=>{

  if(sessionStorage.getItem('roleSelection')){

    console.log('Whole State', sessionStorage.getItem('roleSelection'))

    const data = JSON.parse(sessionStorage.getItem('roleSelection'))

    console.log('Whole Data', data)
    dispatch(
      roleSelectionAction.overrideState({ ...data })
      //roleSelectionAction.delegateView({ agentRole: 'delegate', agentSid: "" })
    ) 
  }

},[])

const agentRole = useSelector(
  (state) => state.roleSelectionDetails.agentRole
);

 console.log('agentRole Data', agentRole)

  const dispatch = useDispatch();
  const isAgentSearch = useSelector(
    (state) => state.roleSelectionDetails.isAgentSearch
  );
  const isAgentInfo = useSelector(
    (state) => state.roleSelectionDetails.isAgentInfo
  );
  const workFlowInfo = useSelector(
    (state) => state.roleSelectionDetails.workFlowInfo
  );
  const isNotification = useSelector(
    (state) => state.uiNotofication.isNotification
  );
  const notification = useSelector(
    (state) => state.uiNotofication.notification
  );
  const indexArray = useSelector((state) => state.uiNotofication.indexArray);

  const agentInfo = useSelector(
    (state) => state.roleSelectionDetails.agentInfo
  );

  console.log("AgentInfo", agentInfo);

  if (isNotification) {
    setTimeout(() => {
      dispatch(
        uiNotificationAction.closeNotification({ isNotification: false })
      );
    }, 2000);
  }

  // const navList = ['roleSelection','accountOwner', 'planSelection']
  // console.log('navList', navList)

  return (
    <>
      <main>
        {isNotification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}

        <div>
          <AgentRoleSelection />
          {isAgentSearch && <AgentSearch />}
          {isAgentInfo && <AgentInfo />}
          {isAgentInfo && <Workflow />}
          {isAgentInfo && indexArray.indexOf(1) !== -1 && <AccountOwnerUI />}
          {isAgentInfo && indexArray.indexOf(2) !== -1 && <PlanSelectionUI />}
          {isAgentInfo && indexArray.indexOf(3) !== -1 && <RegBiUI />}
          {isAgentInfo && indexArray.indexOf(4) !== -1 && <LanguageConsentUI />}
          {isAgentInfo && indexArray.indexOf(5) !== -1 && (
            <BrokerageAccountLinkingtUI />
          )}
          {isAgentInfo && indexArray.indexOf(6) !== -1 && <TcpUI />}
          {isAgentInfo && <SaveButton workFlowData={workFlowInfo} />}
        </div>
      </main>
    </>
  );
};

export default Body;
