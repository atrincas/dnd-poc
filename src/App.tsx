import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css'
import { ImageDnD } from './ImageDnD'

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <ImageDnD />
      </DndProvider>
    </div>
  )
}

export default App
