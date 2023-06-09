import { Card } from './components/card/card';
import './App.css'
import { useFoodData } from './hooks/useFoodData';

function App() {
  const { data } = useFoodData();
  return (
    <div className="container">
      <h1>Cardápio Ditigal</h1>
        <div className="card-grid">
          {data?.map(foodData => 
            <Card 
              price={foodData.price} 
              title={foodData.title} 
              image={foodData.image}
            />
          )}
        </div>        
    </div>
  )
}

export default App
