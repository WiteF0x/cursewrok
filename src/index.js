import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
// import 'babel-polyfill'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Bin from './components/Bin'


// render(<App/>, document.getElementById('root'))
render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/bin' component={Bin}/>
    </Switch>
  </BrowserRouter>,
    document.getElementById('root')
  )