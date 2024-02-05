
import AccountOwnerInfo from "./AccountOwnerInfo";
import ECISearch from "./ECISearch";
import {  useSelector } from "react-redux";

const AccountOwnerUI = () => {
    const isTableVisible = useSelector(state => state.accountOwnerDetails.isTableVisible)
    const eci = useSelector(state => state.accountOwnerDetails.eci)
  return (
    <>
      <ECISearch />
     {eci && !isTableVisible && <AccountOwnerInfo />} 
    </>
  );
};

export default AccountOwnerUI;
