import { useState } from 'react'
import { Routes,Route,NavigateFunction,HashRouter,useNavigate} from 'react-router-dom';
import { TopPage } from './presentation/pages/topPage';
import { TestPage } from './presentation/pages/testPage';


declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
} 

const App: React.FC<{ compiler: string, framework: string }> = (props) => {
  return (
    <Routes>
      <Route path='/' element={<TopPage/>} />
      <Route path='/2' element={<TestPage/>}/>
    </Routes>
  );
}

export default App
