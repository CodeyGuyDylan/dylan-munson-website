// Libraries
import { FC } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserHistory } from 'history'
import '@fontsource/fira-code'

// Components
import GlobalStyle from './components/GlobalStyle'

// Pages
import Home from './pages/home'
import File from './pages/file'
import FourOhFour from './pages/404'

const App: FC = () => {
   const history = createBrowserHistory()

   return (
      <HelmetProvider>
         <GlobalStyle />

         <Router history={history}>
            <Switch>
               <Route exact path='/'>
                  <Home />
               </Route>

               <Route path='/file'>
                  <File />
               </Route>

               <Route component={FourOhFour} />
            </Switch>
         </Router>
      </HelmetProvider>
   )
}

export default App
