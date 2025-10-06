import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
