import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='title'>Xiaomi Mobile Bazaar</h1>
      </header>
      <Shop></Shop>
      <footer>
        <h1 className='title'>Question answer</h1>
        <p>1. React maintained by Facebook. ReactJS is simply a JavaScript library for building user interfaces. React apps have a structure. Each code that performs on its own is constrained inside a component. And these components work in separation but communicate with each other to make the web application work.</p>
        <p>
          2. Components that have a state are referred to as stateful components, while those that do not have states are stateless components. While a React component can have an initial state, the real power is in updating its state — after all, if we didn't need to update the state, the component shouldn't have any state. The state is only reserved for data that changes in our component and is visible in the UI.
        </p>
      </footer>
    </div>
  );
}

export default App;
