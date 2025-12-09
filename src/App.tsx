import './App.css'
import { TodoList } from './components/TodoList'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>My Tasks</h1>
        <p className="subtitle">Stay organized, get things done.</p>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  )
}

export default App
