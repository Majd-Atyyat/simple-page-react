import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent />
      <Footer/>
      
    </div>
  );
}

export default App;
