
import './App.css'
import ToDoList from './components/ToDoList'
import Header from './components/Header'

function App() {

  return (
 <div className='App'>
  <Header className ='header'/>
  <ToDoList className ='list'/>
 </div>
  )
}

export default App
