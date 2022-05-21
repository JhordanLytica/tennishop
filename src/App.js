import { Black, White, Main, ContainerCrud } from "./styles";
import Header from "./components/header";
import Paper from "./components/paper";
import TableContainerData from "./Container/Table";
import Add from './Container/Add';
import EditContainer from './Container/Edith';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Main>
      <Main>
        <Black/>
        <White />
      </Main>
      <ContainerCrud>
        <div className="ContainerTable">
          <Header />
          <Paper>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<TableContainerData />} />
                <Route path="/add/product" element={<Add />} />
                <Route path="/edit/product/:id" element={<EditContainer />} />
              </Routes>
            </BrowserRouter>
          </Paper>
        </div>
      </ContainerCrud>
    </Main>
  );
}

export default App;
