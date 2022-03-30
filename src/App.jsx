import {BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Project from './components/Project'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} exact path='/'></Route>
        <Route component={About} path='/about'></Route>
        <Route component={SinglePost} path='/post/:slug'></Route>
        <Route component={Post} path='/post'></Route>
        <Route component={Project} path='project'></Route>
      </Switch>
    </Router>
  ) 
}
export default App;
