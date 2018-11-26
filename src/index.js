import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
// import 'babel-polyfill'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Bin from './components/Bin'


// render(<App/>, document.getElementById('root'))
render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={App} />
        <Route path='bin' component={Bin} />
      </Route>
    </Router>,
    document.getElementById('root')
  )