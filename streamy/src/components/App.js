import { Route, Router, Switch } from 'react-router-dom';
import Header from "./Header";
import history from './history';
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

function App() {
  return (
    <Router history={history}>
        <div className="ui container">
            <Header></Header>
            <Switch>
                <Route path="/" exact component={StreamList}></Route>
                <Route path="/streams/new" component={StreamCreate}></Route>
                <Route path="/streams/edit/:id" component={StreamEdit}></Route>
                <Route path="/streams/delete/:id" component={StreamDelete}></Route>
                <Route path="/streams/:id" component={StreamShow}></Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
