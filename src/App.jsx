import './App.css'
import { useState } from 'react'
import CardForm from './Components/CardForm';
import CardDisplay from './Components/CardDisplay';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <CardForm setData={setData} />
        </div>
        <div className="col">
          {data.length > 0 && <CardDisplay data={data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
