import createRouter from 'router5'
import loggerPlugin from 'router5-plugin-logger'
import listenersPlugin from 'router5-plugin-listeners'
import browserPlugin from 'router5-plugin-browser'

import routes from './routes'

const configureRouter = (options = { listener: false, logger: false }) => {
  const router = createRouter(
    routes,
    {
      allowNotFound: true,
    },
    routes
  )

  router.usePlugin(browserPlugin())
  if (options.listener) router.usePlugin(listenersPlugin())
  if (options.logger) router.usePlugin(loggerPlugin)

  return router
}

export default configureRouter
