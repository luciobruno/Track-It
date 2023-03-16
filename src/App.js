import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import HabitsPage from "./pages/HabitsPage";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

export default function App() {

  const [dados,setDados] = useState({});
  const [concluidos,setConcluidos] = useState(0);

  return (
    <UserContext.Provider value={{dados, setDados, concluidos, setConcluidos}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/cadastro" element={<RegisterPage></RegisterPage>}></Route>
          <Route path="/habitos" element={<HabitsPage></HabitsPage>}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
