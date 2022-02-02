import './App.css';
import { News, Logo, Graph, Converter, CardList, History } from './components';

function App() {
  return (
    <>
      <Logo />
      <CardList/>
      <News />
      <Converter />
      <Graph />
      <History/>
    </>
  );
}

export default App;
