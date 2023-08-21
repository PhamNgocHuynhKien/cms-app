import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './router';

function App() {
  const router = createBrowserRouter(routes());

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
