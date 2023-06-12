import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Example from './Example';
import DeleteStudent from './DeleteStudent';
import AllCountries from './Country/AllCountries';
import AllGovernorates from './Country/AllGovernorates';
function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Example />}/>
            <Route path="delete" element={<DeleteStudent/>}/>
            <Route path='/countries' element={<AllCountries/>}>
                <Route path='governorates/:id' element={<AllGovernorates/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;