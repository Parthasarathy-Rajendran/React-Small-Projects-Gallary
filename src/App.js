import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import Counter from './components/counter/Counter.jsx'
import Calculator from './components/calculator/Claculator.jsx';
import Header from './components/header/Header.jsx';
import Form from './components/form/Form.jsx'




function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/counter" element={<Counter />} />
        <Route path='/calculator' element={ <Calculator /> } />
        <Route path="/form" element={<Form />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

