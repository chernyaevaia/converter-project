import './App.css';
import { News, History, Logo, Graph, Converter, CardList } from './components';

function App() {
  return (
    <>
      <Logo />
      <CardList />
      <Converter />
      <Graph />
      <History />
      <News />
    </>
  );
}

export default App;
