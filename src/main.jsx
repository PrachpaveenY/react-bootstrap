import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import NavBar from './Components/NavBar'
import Homepage from './Page/Homepage'
import ProductList from './Page/ProductList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
        <div>
          <NavBar/>
          <Route path="/" exact={true} Component={Homepage}/>
          <Route path="/productlist" Component={ProductList}/>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}