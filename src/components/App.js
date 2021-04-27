import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

function App() {
  return (
    <BrowserRouter>
        <div className="ui container">
            <Header></Header>
            <Route path="/" exact component={StreamList}></Route>
            <Route path="/streams/new" component={StreamCreate}></Route>
            <Route path="/streams/edit" component={StreamEdit}></Route>
            <Route path="/streams/delete" component={StreamDelete}></Route>
            <Route path="/streams/show" component={StreamShow}></Route>
        </div>
    </BrowserRouter>
  );
}

export default App;
