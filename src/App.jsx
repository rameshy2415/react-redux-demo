
import { useSelector } from 'react-redux';
import './App.css'
//import Main from './components/Main'
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/forms/SignupForm';
import NewSignupForm from './components/forms/NewSignup';

function App() {

  const sid = useSelector(state=> state.roleSelectionDetails.agentSid)


  return (
    <>
      <div className="card">
      <h2>Client Onboarding</h2>
      <NewSignupForm></NewSignupForm>
      <Signup></Signup>

      <hr />
      <h4>{sid && <>BIN:</>} {sid} {'  '}</h4>
      
        {/* <Main /> */}
        <Body />
      </div>
    </>
  )
}

export default App
