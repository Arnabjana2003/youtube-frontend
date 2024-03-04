import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PlayVideo from './components/PlayVideo.jsx'
import VideoPlayerPage from './pages/VideoPlayerPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import Protector from './components/Protector.jsx'
import ViewChannel from './pages/ViewChannel.jsx'
import UploadVideoPage from './pages/UploadVideoPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import SubscriptionPage from './pages/SubscriptionPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/video/:channelId/:videoId",
        element: <VideoPlayerPage/>
      },
      {
        path: "/video/:channelId",
        element: <ViewChannel/>
      },
      {
        path: "/login",
        element: <Protector authentication={false}><LoginPage/></Protector>
      },
      {
        path: "/register",
        element: <Protector authentication={false}><RegisterPage/></Protector>
      },
      {
        path: "/uploadvideo",
        element: <Protector authentication={true}><UploadVideoPage/></Protector>
      },
      {
        path: "/profile",
        element: <Protector authentication={true}><ProfilePage/></Protector>
      },
      {
        path: "/subscriptions",
        element: <Protector authentication={true}><SubscriptionPage/></Protector>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>,
)
