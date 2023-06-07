import Navbar from './components/Navbar.js'
import Filters from './components/Filters.js'
import Total from './components/Total.js'
import Places from './components/Places.js'
import Footer from './components/Footer.js'
import Carousels from './components/Carousels.js'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Filters/>
    <Total/>
    <Places/>
    <Carousels/>
    <Footer/>
    </div>
  );
}

export default App;
