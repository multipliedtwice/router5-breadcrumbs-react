export type BreadcrumbsProps = {
  removeCrumb?: Array<string>
  forward?: { from: string; to: string }
  t?: ([crumb]: string) => string
  got?: { [index: number]: string | React.ReactElement }
  debugMode?: boolean
  homeRouteName?: string
  homeRouteLabel?: string
  icons?: {
    CustomHomeIcon: React.ReactElement
    CustomArrowIcon: React.ReactElement
  }
  classes?: {
    activeLink: string
    currentPage: string
    icon: string
    wrapper: string
  }
  iconProps?: {
    strokeWidth: string
    fill: string
    stroke: string
    className
  }
}

export interface RouterWithCrumbs {
  name: string
  route: string
  crumb?: string
  children?: Array<RouterWithCrumbs>
}

export type Paths = {
  route: string
  name: string
}
