import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router'

import './index.css'
import HooksApp from './HooksApp.jsx'
import CounterApp from './01-useState/CounterApp.jsx'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook.jsx'
import SimpleForm from './02-useEffect/simpleForm.jsx'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook.jsx'
import MultipleCustomHooks from './03-examples/MultipleCustomHooks.jsx'
import Momorize from './06-memos/Momorize.jsx'
import MemoHook from './06-memos/MemoHook.jsx'
import CallbackHook from './06-memos/CallbackHook.jsx'
import TodoApp from './08-useReducer/TodoApp.jsx'
import MainApp from './09-useContext/MainApp.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <MainApp />
    </StrictMode>
  </BrowserRouter>
)
