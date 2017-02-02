import Login from './components/Login'
import NewsFeed from './components/NewsFeed'
import Home from './components/Home'
import Books from './components/Books'

// Routes
const token = firebase.auth().currentUser.getToken(true).then(function(idToken){
  console.log(idToken)
})
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
    component: Books,
    name: 'books'
  }

]

export default routes
