import React from 'react';
import Header from './Components/Layout/Header';
import Books from './Components/Books/Books';
import NewBook from './Components/Books/NewBook';
import EditBook from './Components/Books/EditBook';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <div className="container-fluid mx-0 px-0">
          <Header/>
            <Switch>
              <Route exact path="/" component={Books} />
              <Route exact path="/books/new" component={NewBook} />
              <Route exact path="/books/edit/:id" component={EditBook} />
            </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
