import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import { useMemo, useState } from "react";
import Dashboard, {DashboardStyled} from './Components/Dashboard/Dashboard'
import Income from "./Components/Incomes/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";
import Transactions from "./Components/Transactions/Transactions";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard></Dashboard>
      case 2:
        return <Income></Income>
      case 3:
      return <Expenses></Expenses>
      default:
        return <Dashboard></Dashboard>
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb></Orb>
  });
  return (
    <AppStyled bg = {bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}></Navigation>
        <main>
          {displayData()}
        </main>
      </MainLayout>

    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
