import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home, CreateEditUsers } from './pages';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='users'>
            <Route path='edit/:id' element={<CreateEditUsers />} />
            <Route path='create' element={<CreateEditUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
