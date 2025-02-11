import { StrictMode } from 'react'
import { renderToString} from 'react-dom/server'
import {StaticRouter } from 'react-router-dom'
import App from './App'
import { Router } from './router'

export function render(path: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <Router/>
      </StaticRouter>
    </StrictMode>,
  )
  return { html }
}
