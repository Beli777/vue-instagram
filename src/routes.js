import Register from './components/Register'
import Login from './components/Login'
import NewsFeed from './components/NewsFeed'
import Home from './components/Home'

// Routes
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/newsfeed',
    component: NewsFeed
  }
]

export default routes
