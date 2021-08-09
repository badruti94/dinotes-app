import styled from 'styled-components';
import HomePage from './pages/Home';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';
import { Route, Switch } from 'react-router-dom';


const Container = styled.div`
  text-align: center;
`

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/add" >
            <AddPage />
          </Route>
          <Route path="/edit/:id" >
            <EditPage />
          </Route>
          <Route path="/" >
            <HomePage />
          </Route>
        </Switch>
      </Container>

    </div>
  );
}

export default App;
