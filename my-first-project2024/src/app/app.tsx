import './App.css';
import bcrypt from "bcryptjs";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import login from '.app/page.tsx';
import pagina from './pagina/page';
import ProtectedRoute from './components/utils/ProtectedRoute';


function App() {

    const isValidPassword = bcrypt.compareSync(password, user.password);

  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
        <Route path='login' element={<Login />} />
          <Route element={<ProtectedRoute isValidPassword={true} redirectPath='/login' />}>
            <Route path='' element={<pagina />} />
          </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;