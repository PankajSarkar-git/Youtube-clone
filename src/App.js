import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import MainCantainer from "./components/MainCantainer"
import WatchPage from './components/WatchPage';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children: [
    {
      path: "/",
      element : <MainCantainer/>
    },
    {
      path: "/watch",
      element : <WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
