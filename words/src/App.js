
import './App.css';
import Words from './components/Words';
import Training from './components/Training';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Words></Words>
    <Training></Training>
    <Card></Card>
    <Footer></Footer>
    </div>
  );
}

export default App;
