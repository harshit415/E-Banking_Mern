import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Dash from './pages/Dash'
import BalanceInquery from './pages/BalanceInquery'
import AccountInfo from './pages/AccountInfo'
import DepositCash from './pages/DepositCash'
import Withdraw from './pages/Withdraw'
import ResetPassword from './pages/ResetPassword'
import MiniStatement from './pages/MiniStatement'
import YourProfile from './pages/YourProfile'

function App() {


  return (
    <>
           <BrowserRouter>
           <Routes>

            <Route path="/" element={<Layout/>} >
           <Route index element={<Home/>}/>
           <Route path="home" element={<Home/>}/>
           <Route path="register" element={<Registration/>}/>
           <Route path="login" element={<Login/>}/>

           </Route>

           <Route path="dashBoard" element={<Dash/>}>
           <Route index element={<YourProfile/>}/>
           <Route path="profile" element={<YourProfile/>}/>
           <Route path="balance" element={<BalanceInquery/>}/>
           <Route path="account" element={<AccountInfo/>}/>
           <Route path="deposit" element={<DepositCash/>}/>
           <Route path="withdraw" element={<Withdraw/>}/>
           <Route path="resetPassword" element={<ResetPassword/>}/>
           <Route path="miniStatement" element={<MiniStatement/>}/>












           </Route> 
           </Routes>

          
           </BrowserRouter>
    </>
  )
}

export default App
