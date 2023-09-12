import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className='App'>
      <h1 className='naslov'>My Todos</h1>
      <div className='Kartice'>

        <Todo text='Ponovit React'/>
        <Todo text='Naucit Next.js'/>
        <Todo text='Naucit Node.js'/>
      </div>

    </div>
  );
}

export default App;
