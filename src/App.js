import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import MainCantainer from "./components/MainCantainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResult from "./components/SearchResult";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainCantainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Header/> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
