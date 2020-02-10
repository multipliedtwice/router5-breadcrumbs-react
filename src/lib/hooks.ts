import { useRoute } from 'react-router5'
import { RouterWithCrumbs, Paths } from './typings'

export const useBreadcrumbs = (
  removeCrumb: Array<string>,
  forwarding: { from: string; to: string }
) => {
  const {
    route: { name, params },
    router: { forward, getDependencies },
  } = useRoute()
  const dependencies = getDependencies()

  const getParameter = (
    curr: string,
    acc: any,
    idx: number,
    separator: string
  ) => {
    const val = separator === '/' ? 'name' : 'route'
    if (!(acc.length > 0)) return curr
    if (curr === 'tab') return `${acc[idx - 1][val]}${separator}${params.tab}`
    return `${acc[idx - 1][val]}${separator}${curr}`
  }

  const findCrumb = (name: string, arr: any) => {
    return arr.reduce((a: string, item: RouterWithCrumbs) => {
      if (a) return a
      if (item.name === name) return item.crumb
      if (item.children) return findCrumb(name, item.children)
      return null
    }, null)
  }

  const routeNameToArray = (paths: Array<Paths>, curr: string, idx: number) => {
    const newPath = {
      route: getParameter(curr, paths, idx, '.'),
      name: getParameter(curr, paths, idx, '/'),
      crumb: findCrumb(curr, dependencies),
    }
    paths.push(newPath)
    return paths
  }

  const pathsArray = name.split('.').reduce(routeNameToArray, [])

  const filterPaths = (el: { route: string }) =>
    !(removeCrumb !== undefined && removeCrumb.includes(el.route, 0))

  const filteredPaths = pathsArray.filter(filterPaths)

  const handleClick = () =>
    forwarding ? forward(forwarding.from, forwarding.to) : () => null

  return {
    filteredPaths,
    handleClick,
    dependencies,
  }
}
