import React from 'react'
import './App.css';
// import Home from './Components/ATComponents/Home';
import ComponentA from './Components/ContextAPIs/ComponentA';
import { UserProvider } from './Components/ContextAPIs/UserContext';
// import HomeStd from './Components/HomeStd';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import HomeStd from './Components/HomeStd';
// import EditStd from './Components/EditStd';
// import DeleteStd from './Components/DeleteStd';
// import AddStd from './Components/AddStd';
import Demo from './Components/HOCDemo/Demo';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeStd />} />
          <Route path='/AddStd/' element={<AddStd />} />
          <Route path='/EditStd/' element={<EditStd />} />
          <Route path='/DeleteStd/' element={<DeleteStd />} />
        </Routes>

      </BrowserRouter> */}
      {/* <Home/> */}
      <UserProvider value={'admin123'}>
        <ComponentA />
      </UserProvider>
      {/* <Demo/> */}
    </div>
  );
}

export default App;
