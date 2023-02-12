import { SignUp } from './src/screens/SignUp';
import { LogIn } from './src/screens/LogIn';
import { NativeBaseProvider, extendTheme } from 'native-base';

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        100: '#4D54E5',
        200: '#FFFFFF',
        300: '#000000',
        400: '#959595',
      },
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <LogIn/>
    </NativeBaseProvider>
  );
}