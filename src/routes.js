import Register from './components/Register'
import Login from './components/Login'
import NewsFeed from './components/NewsFeed'


// Routes
const routes = [
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
