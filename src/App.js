import Navbar from "./Navbar";
import Parity from "./Parity";
import { Routes, Route } from "react-router-dom";
import Sapre from "./Sapre";
import Bocone from "./Bcone";
import Emred from "./Emred";

const App = () => {
  return (
    <div>

<Navbar/>
      <Routes>

        <Route path="/" element={<Parity />} />
        <Route path="/Sapre" element={<Sapre/>} />
        <Route path="/bcone" element={<Bocone/>} />
        <Route path= "/Emred" element={<Emred/>}/>
      </Routes>
     
      
    </div>
  );
};

export default App;
