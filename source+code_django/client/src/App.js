import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/common/Nav'
import Home from './components/common/Home'
import About from './components/common/About'
import JobIndex from './components/jobs/JobIndex'
import Testimonials from './components/jobs/Testimonials'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/jobs/" component={JobIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
