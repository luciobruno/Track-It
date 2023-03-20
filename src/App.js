import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import HabitsPage from "./pages/HabitsPage";
import UserContext from "./contexts/UserContext";
import { useEffect, useState } from "react";
import HistoricPage from "./pages/HistoricPage";
import TodayPage from "./pages/TodayPage";

export default function App() {

  const [dados, setDados] = useState({});
  const [concluidos, setConcluidos] = useState(0);
  const [newHabit, setNewHabit] = useState("");
  const [dias, setDias] = useState([])
  const [habito, setHabito] = useState("");
  const [habits, setHabits] = useState([])
  const [habitsToday, setHabitsToday] = useState([]); 
  const [disableNewHabit, setDisableNewHabit] = useState(false)

  return (
    <UserContext.Provider value={{ disableNewHabit,setDisableNewHabit,dados, setDados, concluidos, setConcluidos, newHabit, setNewHabit, dias, setDias, habito, setHabito, habits, setHabits, habitsToday, setHabitsToday }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/cadastro" element={<RegisterPage></RegisterPage>}></Route>
          <Route path="/habitos" element={<HabitsPage></HabitsPage>}></Route>
          <Route path="/historico" element={<HistoricPage></HistoricPage>}></Route>
          <Route path="/hoje" element={<TodayPage></TodayPage>}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
