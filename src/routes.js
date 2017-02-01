import Login from './components/Login'
import NewsFeed from './components/NewsFeed'
import Home from './components/Home'
import Books from './components/Books'

// Routes
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/newsfeed',
    component: NewsFeed
  },
  {
    path: '/books',
    component: Books
  }

]

export default routes
