import ReactDOM from 'react-dom/client'; //injecting ReactDOM
import { App } from "./App"; //injecting App.js file to use its components

const rootDiv = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(rootDiv)

reactRoot.render(<App />)