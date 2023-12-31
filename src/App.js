import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter , Router, Outlet } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { lazy, Suspense } from 'react';

const SearchResultsPage = lazy(()=> import('../src/components/SearchResultsPage'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<></>,
    children:[{
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer/>
        },
        {
          path: 'watch',
          element: <WatchPage/>
        },
        {
          path: 'search',
          element: <Suspense> <SearchResultsPage/> </Suspense>
        }
      ]
    }]
  }
])
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Outlet/>
      </div>
    </Provider>
  );
}

export default App;

/**
 * Header 
 * Body 
 *    SideBar
 *    MainContainer
 *        ButtonsList
 *        Video Container
 *            Video
 * 
 * Search bar is using live api of search , debouncing , Caching 
 */