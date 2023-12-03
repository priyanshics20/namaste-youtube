import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

const appRouter = createBrowserRouter([
  {
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
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRouter}/>
      </div>
      </Provider>
  );
}

export default App;
library.add(fas, far)

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