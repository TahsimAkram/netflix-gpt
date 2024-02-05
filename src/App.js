import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './component/Body';
import ContentBrowser from './component/ContentBrowser';
import { Provider } from 'react-redux';
import appStore from './utility/appStore';

function App() {
  const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Body/>
    },
    {
        path:"/browse",
        element:<ContentBrowser/>
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
