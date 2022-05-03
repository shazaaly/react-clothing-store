import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigation/navigation.component'
import Home from "./routes/home/home.component";



const Shop = () => {
  return <div>I am shop page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
