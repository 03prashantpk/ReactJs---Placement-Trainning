//import logo from './logo.svg';
import './App.css';
import Card from './components/Card' // class components with default exports
import {Button, Idea} from "./components/Button" // functional components without default exports
import Age from './components/Age'


function App() {

  const cards = [{
    title: "Feeney LLC",
    description: "Balanced next generation array",
    image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    price: "$22.15",
  },{
    title: "Hoeger LLC",
    description: "Seamless empowering toolset",
    image: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
    price: "$83.83",
  },{
    title: "Huel, Deckow and Funk",
    description: "Profound 24/7 emulation",
    image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
    price: "$49.42",
  },{
    title: "Kuhic - Thompson",
    description: "Synergized bifurcated paradigm",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    price: "$99.45",
  },{
    title: "Molly",
    description: "Multi-channelled non-volatile framework",
    image: "https://react.semantic-ui.com/images/avatar/large/molly.png",
    price: "$86.36",
  },
]

  return (  
    <div>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
        {cards.map((card,index) =>(
          <Card key={index} card={card}></Card>
        ))}
      </div>
      <Age></Age>
    </div>
  );
}

export default App;
