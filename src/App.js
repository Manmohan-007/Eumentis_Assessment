import './App.css';
import Dashboard from './Components/Dashboard';
import StudentDetails from './Container/StudentDetails';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Statistics from './Components/Statistics';
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/StudentDetails" component={StudentDetails} />
          <Route exact path="/Statistics" component={Statistics} />



        </Switch>
      </div>
    </BrowserRouter>




  );
}

export default App;
