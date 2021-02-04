import './css/App.css';
import Header from './module/header';
import Footer from './module/footer';
import Gurunavi from './module/Gurunavi';
import Timer from './module/timer';
import Good from './module/Good';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Gurunavi />
        <Timer />
        <Good />
      </div>
      <Footer />
    </div>
  );
}

export default App;