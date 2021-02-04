import './App.css';
import Header from './header';
import Footer from './footer';
import Gurunavi from './Gurunavi';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Gurunavi />
      </div>
      <Footer />
    </div>
  );
}

export default App;