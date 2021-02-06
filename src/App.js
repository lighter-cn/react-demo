import './css/App.css';
import './css/style.css'
import Header from './module/header';
import Footer from './module/footer';
import Gurunavi from './module/Gurunavi';
import Timer from './module/timer';
import Good from './module/Good';
import Mouse from './module/Mouse';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Gurunavi />
        <Timer />
        <Good />
        <Mouse />
      </div>
      <Footer />
    </div>
  );
}

export default App;