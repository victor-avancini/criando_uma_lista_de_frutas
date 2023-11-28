import { useState } from "react";

function App() {
  const initialValue = [
    {
      name: "Morango",
      price: 15,
      category: "Frutas",
    },
    {
      name: "Uva",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Banana",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Beterraba",
      price: 5,
      category: "Legumes",
    },
  ];
  const [fruitList, setFruitList] = useState(initialValue);

  const totalValue = fruitList.reduce((currentValue, fruit) => {
    return currentValue + fruit.price;
  }, 0);

  const addFruitOrVegetable = (newItem) => {
    setFruitList([...fruitList, newItem]);
  };

  const fruits = fruitList.filter((fruit) => fruit.category === "Frutas");

  const vegetables = fruitList.filter((fruit) => fruit.category === "Legumes");

  console.log(totalValue)

  return (
    <div className="App">
      <h1>{totalValue.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</h1>
      <h2>Frutas:</h2>
      <ul>
        {fruits.map((fruits, index) => (
          <li key={index}>
            <h3>{fruits.name}</h3>
            <span>{fruits.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
          </li>
        ))}
      </ul>
      <h2>Legumes:</h2>
      <ul>
        {vegetables.map((vegetables, index) => (
          <li key={index}>
            <h3>{vegetables.name}</h3>
            <span>{vegetables.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => addFruitOrVegetable({
        name: "Maça",
        price: 10,
        category: "Frutas",
      })}>Adicionar Maça
      </button>
      <button onClick={() => addFruitOrVegetable({
        name: "Cenoura",
        price: 8,
        category: "Legumes",
      })}>Adicionar Cenoura
      </button>
    </div>
  )
}

export default App