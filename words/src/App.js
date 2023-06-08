
import './App.css';
import Words from './components/Words';
import Training from './components/Training/Training';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
