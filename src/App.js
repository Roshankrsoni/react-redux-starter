import './App.css'
import React, {
  lazy,
  Suspense
  // useEffect
} from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { history } from './utils/history'
import { Loading } from './components/Base/Content/Loading'
import { testing } from './routes/routes'
import { PublicLayout } from './layouts'

const withAuth = (ContentComponent) => {
  return (props) => (
    <PublicLayout>
      {/*  <AuthGuard permission={permission} type={types}> */}
      <ContentComponent {...props} />
      {/* </AuthGuard> */}
    </PublicLayout>
  )
}

/**
 * Pages with Lazy Import
 */
const Home = withAuth(lazy(() => import('./pages/test/Home')))
const Testing = withAuth(lazy(() => import('./pages/test/Testing')))
const NotFound = withAuth(lazy(() => import('./pages/NotFound/NotFound')))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={testing} component={Testing} />
          {/* 404 route */}
          <Route exact path="*" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
