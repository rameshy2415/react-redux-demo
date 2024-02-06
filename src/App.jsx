
import { useSelector } from 'react-redux';
import './App.css'
//import Main from './components/Main'
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const sid = useSelector(state=> state.roleSelectionDetails.agentSid)


  return (
    <>
      <div className="card">
      <h2>Client Onboarding</h2>
      <hr />
      <h4>{sid && <>BIN:</>} {sid} {'  '}</h4>
      
        {/* <Main /> */}
        <Body />
      </div>
    </>
  )
}

export default App
