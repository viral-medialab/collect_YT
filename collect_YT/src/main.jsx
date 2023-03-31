import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import WoK from './WoK'
import WoKMUI from './WoKMUI'
import './index.css'
import ExpandCard from './components/ExpandCard'
import BarChart from './BarChart'
import Grid from './Grid'
// import Tree from './Tree'
import Landing from './Landing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Landing />
    {/* <BarChart /> */}
    {/* <Grid /> */}
    {/* <Grid numRows={10} numCols={10} size="5x" /> */}
    {/* <ExpandCard /> */}
    {/* <WoKMUI /> */}
    <WoK />
  </React.StrictMode>,
)
