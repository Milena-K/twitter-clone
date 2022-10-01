import NewTweet from './NewTweet';
import { ThemeProvider } from 'react-ui';
import { tokens, components } from 'react-ui/themes/light';

function App() {
  return (
    <ThemeProvider tokens={tokens} components={components}>
      <NewTweet />
    </ThemeProvider>
  );
}

export default App;

