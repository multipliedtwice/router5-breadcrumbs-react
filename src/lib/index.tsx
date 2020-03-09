import React, { FunctionComponent } from 'react'
import { Link } from 'react-router5'
import { BreadcrumbsProps, RouterWithCrumbs } from './typings'
import { HomeIcon, ArrowIcon } from './assets'
import { useBreadcrumbs } from './hooks'

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({
  hide,
  forward,
  t = (text: string) => text,
  iconProps,
  children,
  got = {},
  homeRouteName = ['ru', 'en'],
  homeRouteLabel = 'Home',
  classes: {
    wrapper = 'breadcrumbs flex items-baseline text-xl py-10 whitespace-no-wrap',
    activeLink = 'breadcrumbs-link flex items-baseline text-blue-700 hover:underline mx-2',
    currentPage = 'breadcrumbs-current text-gray-500 ml-2',
    activeCrumb = 'breadcrumbs-crumb list-none flex items-baseline',
  } = {},
  icons: { CustomHomeIcon = <></>, CustomArrowIcon = <></> } = {},
}) => {
  const {
    filteredPaths,
    handleClick,
    dependencies,
    path,
    name,
    params,
  } = useBreadcrumbs(hide, forward)

  const Arrow = () =>
    CustomArrowIcon.type.name ? CustomArrowIcon : <ArrowIcon {...iconProps} />

  const Home = () =>
    CustomHomeIcon.type.name ? CustomHomeIcon : <HomeIcon {...iconProps} />
  const Crumbs = () => {
    return (
      <>
        {filteredPaths?.map((crumb: RouterWithCrumbs, idx: number) => {
          const isNotEnd = filteredPaths.length > idx + 1

          if (!crumb.crumb) {
            crumb = dependencies.length
              ? {
                  ...crumb,
                  ...dependencies.find(
                    (el: { name: string }) => el.name === crumb.route
                  ),
                }
              : crumb
          }
          const isMostLikelyHome = Array.isArray(homeRouteName)
            ? crumb.route !== '@@router5/UNKNOWN_ROUTE' &&
              !homeRouteName.some(r => crumb.route === r)
            : false

          return (
            isMostLikelyHome && (
              <React.Fragment key={idx}>
                {isNotEnd ? (
                  t(`${crumb.crumb || crumb.name}`) && (
                    <li
                      itemScope
                      itemType='http://data-vocabulary.org/Breadcrumb'
                      className={activeCrumb}
                    >
                      <Link
                        className={activeLink}
                        routeName={crumb.route}
                        routeParams={{ ...params }}
                        routeOptions={{ reload: true }}
                        onClick={handleClick}
                        itemProp='url'
                      >
                        {got[idx] !== undefined
                          ? got[idx]
                          : t(`${crumb.crumb || crumb.name}`)}
                      </Link>
                      <Arrow />
                    </li>
                  )
                ) : (
                  <li
                    itemScope
                    itemType='http://data-vocabulary.org/Breadcrumb'
                    className={currentPage}
                  >
                    {typeof children === 'object'
                      ? children
                      : t(`${children || crumb.crumb || crumb.name}`)}
                  </li>
                )}
              </React.Fragment>
            )
          )
        })}
      </>
    )
  }
  return (
    path !== '/' && (
      <nav style={{ textTransform: 'capitalize' }}>
        <ol className={wrapper}>
          <li
            itemScope
            itemType='http://data-vocabulary.org/Breadcrumb'
            className={activeCrumb}
          >
            <Link
              className={activeLink}
              routeName={name?.split('.')[0]}
              itemProp='url'
            >
              <Home />
              {t(homeRouteLabel)}
            </Link>
            <Arrow />
          </li>
          <Crumbs />
        </ol>
      </nav>
    )
  )
}

export default Breadcrumbs
