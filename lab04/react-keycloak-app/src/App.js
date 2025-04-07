import logo from './logo.svg';
import './App.css';
import { useKeycloak } from '@react-keycloak/web';


function App() {
  const { initialized, keycloak } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <header className="App-header">

        {keycloak.authenticated ? (
          <>
            <p>Welcome, {keycloak.tokenParsed?.preferred_username}</p>
            <button onClick={() => {keycloak.logout()}}>Logout</button>
          </>
        ) : (
          <>
            <p>You are not logged in.</p>
            <button onClick={() => {keycloak.login()}}>Login</button>
          </>
        )
      }

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
