import { ThemeProvider } from 'styled-components';
import DefaultTheme from '../theme/default';
import { LoginForm } from './login-form/LoginForm';

const App = () => {



  // React.useEffect(() => {
  //   fetch('http://localhost:8000/login', {
  //     method: 'POST',
  //     headers: { 'Content-type': 'application/json' },
  //     body: JSON.stringify({ authCod: 'abc123' })
  //   })
  //   .then(res => {
  //     if(res.status === 200) return res.json()
  //     else throw res
  //   })
  //   .then((user: User) => alert(user.id))
  // }, [])

  return (
    <div id="app">
      <ThemeProvider theme={DefaultTheme}>
        <LoginForm />
      </ThemeProvider>
    </div>
  );
};

export default App;
