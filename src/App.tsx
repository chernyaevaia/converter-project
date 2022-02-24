import './App.css';
import { News, Logo, Converter, CardList, History, ChartComponent } from './components';


function App() {
  return (
    <>
      <Logo />
      <CardList/>
      <News />
      <History/>
      <ChartComponent/>
      <Converter />
    </>
  );
}

export default App;
