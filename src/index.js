import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

require('dotenv').config();

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App/>)