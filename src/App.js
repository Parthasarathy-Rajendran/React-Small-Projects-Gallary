import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import Counter from './components/counter/Counter.jsx'
import Calculator from './components/calculator/Claculator.jsx';
import Header from './components/header/Header.jsx';


const ImagePage = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <p>This is the detail page for {title}.</p>
  </div>
);

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/counter" element={<Counter />} />
        <Route path='/calculator' element={ <Calculator /> } />
        <Route path="/image2" element={<ImagePage title="Image 2" />} />
        <Route path="/image3" element={<ImagePage title="Image 3" />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

