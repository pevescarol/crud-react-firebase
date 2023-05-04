import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element='componente Show' />
          <Route path='/create' element='Create' />
          <Route path='/edit/:id' element='Edit' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
