import './css/App.css';
import Header from './module/header';
import Footer from './module/footer';
import Gurunavi from './module/Gurunavi';
import Timer from './module/timer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Gurunavi />
        <Timer />
      </div>
      <Footer />
    </div>
  );
}

export default App;