import './App.css';
import Form from './Components/Form';

function App() {
  


  return (
    <div>
      <div className='text-center text-2xl p-2 bg-blue-800 text-white'>
        <h1>ToDo List</h1>
      </div>
      <div className='body min-h-fit bg-pink-500'>
        <Form />
      </div>
      
    </div>
  );
}

export default App;
