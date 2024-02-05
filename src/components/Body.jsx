import AgentInfo from "./AgentInfo";
import AgentRoleSelection from "./AgentRoleSelection";
import AgentSearch from "./AgentSearch";
import { useSelector } from "react-redux";
import Workflow from "./WorkFlow";
import SaveButton from "./SaveButton";
import AccountOwnerUI from "./accountOwner/AccountOwnerUI";
import Notification from "./commons/Notification";
import { useDispatch } from "react-redux";
import {uiNotificationAction} from '../actions/uiNotificationActions'
import PlanSelectionUI from './planSelection/PlanSelection'
import RegBiUI from "./regBI/RegBI";

const Body = () => {
  const dispatch = useDispatch();
  const isAgentSearch = useSelector((state) => state.roleSelectionDetails.isAgentSearch);
  const isAgentInfo = useSelector((state) => state.roleSelectionDetails.isAgentInfo);
  const workFlowInfo = useSelector((state) => state.roleSelectionDetails.workFlowInfo);
  const isNotification = useSelector((state) => state.uiNotofication.isNotification);
  const notification = useSelector((state) => state.uiNotofication.notification);
  const indexArray = useSelector((state) => state.uiNotofication.indexArray);

  console.log('IndexArray', indexArray);



  if(isNotification){
    setTimeout(() => {
      dispatch(uiNotificationAction.closeNotification({isNotification:false}))
    }, 2000);
  }


  // const navList = ['roleSelection','accountOwner', 'planSelection']
  // console.log('navList', navList)



  return (
    <>
      <main>
      {isNotification && <Notification status={notification.status} title={notification.title} message={notification.message} />}

      
        <AgentRoleSelection />
        {isAgentSearch && <AgentSearch />}
        {isAgentInfo && <AgentInfo />}
        {isAgentInfo && <Workflow />}
        {isAgentInfo && (indexArray.indexOf(1) !== -1) && <AccountOwnerUI />}
        {isAgentInfo && (indexArray.indexOf(2) !== -1) && <PlanSelectionUI />}
        {isAgentInfo && (indexArray.indexOf(3) !== -1) && <RegBiUI />}
        {isAgentInfo &&  <SaveButton workFlowData={workFlowInfo} />}

        
        
      </main>
    </>
  );
};

export default Body;
