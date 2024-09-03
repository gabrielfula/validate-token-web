import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ValidatePage from '../pages/ValidatePage'
import ErrorPage from '../pages/ErrorPage'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={ErrorPage} />
        <Route path='/:hash' Component={ValidatePage} />
      </Routes>
    </BrowserRouter>
  )
}