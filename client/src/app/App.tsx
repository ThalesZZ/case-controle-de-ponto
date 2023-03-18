import React from 'react';
import { ThemeProvider } from 'styled-components';
import { User } from '../../../src/models/User';
import DefaultTheme from '../theme/default';
import { DayWorksView } from './dayworks-view/DayWorksView';
import { LoginForm } from './login-form/LoginForm';

const App = () => {

  const [loggedUser, setLoggedUser] = React.useState<User>()

  return (
    <div id="app">
      <ThemeProvider theme={DefaultTheme}>
        {!loggedUser
          ? <LoginForm setLoggedUser={setLoggedUser} />
          : <DayWorksView user={loggedUser} />}
      </ThemeProvider>
    </div>
  );
};

export default App;
