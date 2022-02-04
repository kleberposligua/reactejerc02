//import "./App.css";
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 1,
      title: "Gastos Carro",
      amount: 294.67,
      date: new Date(2021, 2, 11),
    },
    {
      id: 2,
      title: "Gastos de Internet",
      amount: 394.67,
      date: new Date(2020, 10, 18),
    },
    {
      id: 3,
      title: "Gastos de Salud",
      amount: 194.67,
      date: new Date(2019, 6, 28),
    },
    {
      id: 4,
      title: "Gastos de Vivienda",
      amount: 494.67,
      date: new Date(2022, 2, 15),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
