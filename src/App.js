import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import HabitsPage from "./pages/HabitsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cadastro" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/habitos" element={<HabitsPage></HabitsPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
