import { useRoute } from 'react-router5'
import { RouterWithCrumbs, Paths } from './typings'

export const useBreadcrumbs = (
  hide: Array<string>,
  forwarding: { from: string; to: string }
) => {
  const {
    route: { name, params, path },
    router: { forward, getDependencies },
  } = useRoute()
  const dependencies = getDependencies()

  const getParameter = (
    curr: string,
    acc: Array<RouterWithCrumbs>,
    idx: number
  ) => {
    if (!(acc.length > 0)) return curr
    if (curr === 'tab') return `${acc[idx - 1]['route']}.${params.tab}`
    return `${acc[idx - 1]['route']}.${curr}`
  }

  const findCrumb = (name: string, arr) => {
    return arr.reduce((a: string, item: RouterWithCrumbs) => {
      if (a) return a
      if (item.name === name) return item.crumb
      if (item.children) return findCrumb(name, item.children)
      return null
    }, null)
  }

  const routeNameToArray = (paths: Array<Paths>, curr: string, idx: number) => {
    const parameter = getParameter(curr, paths, idx)
    const newPath = {
      route: parameter,
      name: parameter.replace(/\./gi, '-'),
      crumb: dependencies.length ? findCrumb(curr, dependencies as Array<RouterWithCrumbs>) : '',
    }
    paths.push(newPath)
    return paths
  }

  const pathsArray = name.split('.').reduce(routeNameToArray, [])

  const filterPaths = (el: { route: string }) => !hide?.includes(el.route, 0)

  const filteredPaths = pathsArray.filter(filterPaths)

  const handleClick = () =>
    forwarding ? forward(forwarding.from, forwarding.to) : () => null

  return {
    filteredPaths,
    handleClick,
    dependencies,
    path,
    name,
    params,
  }
}
