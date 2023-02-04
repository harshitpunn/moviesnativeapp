import { NativeBaseProvider } from 'native-base';
import Routes from './routes/Routes';

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
