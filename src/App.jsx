import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, CreateEditUsers } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='users'>
          <Route path='edit' element={<CreateEditUsers />} />
          <Route path='new' element={<CreateEditUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
