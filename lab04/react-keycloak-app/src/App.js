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

      </header>
    </div>
  );
}

export default App;
