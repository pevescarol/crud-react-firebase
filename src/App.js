import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Show } from './components/Show.jsx'
import { Edit } from './components/Edit.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Show />}/>
          <Route path='/create' element='Create' />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
