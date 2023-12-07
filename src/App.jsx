import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './component/Contact'
import Home from './component/Home'
import Layout from './component/Layout'
import Services from './component/Services'
import ServiceDetail from './component/Services/ServiceDetail'
import DataTable from './component/Record'

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/contact' Component={Contact} />
          <Route path='/services' Component={Services} />
          <Route path='/service-detail' Component={ServiceDetail} />
          <Route path='/record' Component={DataTable} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
