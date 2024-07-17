import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from "./Pages/Home";
import Dashboard from "./dashboard/Dashboard"
// import Insights from "./dashboard/Insights"
import Generate from "./dashboard/Generate"
import Content from './dashboard/components/Content';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} >
          <Route path='' element={<Navigate to="home" replace />} />
            <Route path='home' element={<Content />} />
            <Route path='home' element={<Dashboard />} />
            {/* <Route path='insights' element={<Insights />}/> */}
            <Route path='generate'element={<Generate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
