import React from 'react';
import { Route, Routes,BrowserRouter} from "react-router-dom";
import './App.css';
import Top from './scenes/top';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
