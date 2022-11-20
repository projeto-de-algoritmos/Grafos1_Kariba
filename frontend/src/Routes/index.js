import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"

// Pages
import { HomePage } from '../Pages/Home'
import { GraphView } from '../Pages/Graph';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
      </Switch>
      <Switch>
        <Route path="/oasis" element={<GraphView />} />
      </Switch>
    </BrowserRouter>
  )
}

export {
  Routes
}