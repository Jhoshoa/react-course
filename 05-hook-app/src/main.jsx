import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HooksApp from './HooksApp.jsx'
import CounterApp from './01-useState/CounterApp.jsx'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook.jsx'
import SimpleForm from './02-useEffect/simpleForm.jsx'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook.jsx'
import MultipleCustomHooks from './03-examples/MultipleCustomHooks.jsx'
import Momorize from './06-memos/Momorize.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Momorize />
  </StrictMode>
)
