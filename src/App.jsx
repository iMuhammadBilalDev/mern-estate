import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./components/ui/Pages/Home"
import About from "./components/ui/Pages/About"
import SignIn from "./components/ui/Pages/SignIn"
import SignOut from "./components/ui/Pages/SignOut"
import Profile from "./components/ui/Pages/Profile"
import Header from "./Component/Header"

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/Profile" element={<Profile />} />
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
