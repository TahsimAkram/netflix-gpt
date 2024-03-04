import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import appStore from './utility/appStore';
import Login from './component/Login';
import BrowseContent from './component/BrowseContent';
import MovieDetail from './component/MovieDetail';

function App() {
  const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<BrowseContent />,
    },
    {
        path:"/title/:movieId",
        element:<MovieDetail/>
    }
]);

  return (
    <div>
    <Provider store={appStore}>
       <RouterProvider router={appRouter}/>
    </Provider>
    </div>
  );
}

export default App;
