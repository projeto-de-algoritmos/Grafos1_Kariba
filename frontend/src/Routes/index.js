import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"

// Pages
import { HomePage } from '../Pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={<HomePage />} />
      </Switch>
    </BrowserRouter>
  )
}

export {
  Routes
}