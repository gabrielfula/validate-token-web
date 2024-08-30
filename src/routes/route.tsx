import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ValidatePage from '../pages/ValidatePage'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:hash' Component={ValidatePage} />
      </Routes>
    </BrowserRouter>
  )
}