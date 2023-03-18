import React from 'react';
import { ThemeProvider } from 'styled-components';
import { User } from '../../../src/models/User';
import DefaultTheme from '../theme/default';
import { LoginForm } from './login-form/LoginForm';
import { ShiftsView } from './shifts-view/ShiftsView';

const App = () => {

  const [loggedUser, setLoggedUser] = React.useState<User>()

  return (
    <div id="app">
      <ThemeProvider theme={DefaultTheme}>
        {!loggedUser
          ? <LoginForm setLoggedUser={setLoggedUser} />
          : <ShiftsView user={loggedUser} setUser={setLoggedUser} />}
      </ThemeProvider>
    </div>
  );
};

export default App;
