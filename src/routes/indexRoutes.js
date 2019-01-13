import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import DetailMovie from '../pages/DetailMovie'


export default () => (
    <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/detail" component={DetailMovie} /> */}
    <Route exact path="/detail" component={DetailMovie}></Route>
  </Switch>
)