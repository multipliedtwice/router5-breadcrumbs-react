# router5-breadcrumbs-react

<img src="public/banner-01.jpg" alt="React breadcrumbs component download" width="100%">

> Breadcrumbs component, based on router5 and react.js which renders crumbs automatically.

[![NPM](https://img.shields.io/npm/v/router5-breadcrumbs.svg)](https://www.npmjs.com/package/router5-breadcrumbs) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) ![npm](https://img.shields.io/npm/dm/@thousandsofraccoons/router5-breadcrumbs-react)

## Install

```bash
yarn add router5-breadcrumbs-react
```

## Usage

```tsx
import Breadcrumbs from 'router5-breadcrumbs-react'

export const Page = () => {
  return (
    <>
      <Breadcrumbs />
    </>
  )
}
```

## Props

> #### removeCrumbs

In some cases you would prefer to hide certain crumbs. For example if you have duplicated nodes in your route tree.

```tsx
import Breadcrumbs from 'router5-breadcrumbs-react'

export const Page = () => {
  return (
    <>
      <Breadcrumbs removeCrumbs={['route.names', 'to.hide']} />
    </>
  )
}
```

## Check also

### router5-tabs-react

> [https://github.com/thousandsofraccoons/router5-tabs-react](https://github.com/thousandsofraccoons/router5-tabs-react)

Tiny tabbed navigation component, which renders selected tab in active breadcrumb

## License

MIT © [https://github.com/thousandsofraccoons](https://github.com/thousandsofraccoons)
