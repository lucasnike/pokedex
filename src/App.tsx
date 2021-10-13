import axios from './services/axios'

function App() {

  axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((result) => {
      console.log(result.data);
    })

  return (
    <h1>Hello world</h1>
  );
}

export default App;
