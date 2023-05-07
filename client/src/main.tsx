import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import store from './redux/store'
import ThemeProviders from './/lib/styles/Theme/ThemeProviders'
import router from './views/routes/router'
import ThemeModeProvider from './lib/styles/Theme/ThemeContext'
import AppInitializer from './components/AppInitializer'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Provider store={store}>
        <ThemeModeProvider>
          <ThemeProviders>
            <AppInitializer />
            <RouterProvider router={router} />
          </ThemeProviders>
        </ThemeModeProvider>
      </Provider>
    </ErrorBoundary>
  // </React.StrictMode>
)
