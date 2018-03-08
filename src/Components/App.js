import React, { Component } from 'react';
import Home from './Home';
import Contact from './Contact';
import Procedures from './Procedures';
import { 
           BrowserRouter as Router,
           Route,
           Link 
        } from 'react-router-dom';

//Line 19 Link preserve browser history, stay in app without hard refresh the page
let procedures = ['Root Canal', 'clearning']

 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <nav>
                <Link to='/'>Go to Home Page</Link>{' '}
                <Link to='/procedures'>Procedures</Link>{' '}
                <Link to='/contact'>Contact</Link> 
            </nav>
            <Route exact path = '/' component={Home} />
            <Route path = '/procedures' component={() => <Procedures ops={procedures} />} />
            <Route path = '/contact' component={Contact}/>
          </div>
      </Router>
    );
  }
}

export default App;
