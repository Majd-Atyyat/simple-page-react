import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import MainContent from './components/MainContent';
import Table from './components/Table';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Table/>
    <Contact/>
     
      <MainContent />
      <Footer/>
      
    </div>
  );
}

export default App;
