# router5-breadcrumbs-react

<img src="public/banner-01.jpg" alt="React breadcrumbs component download" width="100%">

> Breadcrumbs component, based on router5 and react.js which renders crumbs automatically written in less than 200 lines of code.

[![NPM](https://img.shields.io/npm/v/router5-breadcrumbs.svg)](https://www.npmjs.com/package/router5-breadcrumbs) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) ![npm](https://img.shields.io/npm/dm/@thousandsofraccoons/router5-breadcrumbs-react)

## Install

**NPM**

```bash
npm i router5-breadcrumbs-react
```

**Yarn**

```bash
yarn add router5-breadcrumbs-react
```

## Features

:paperclip: Microdata and semantics  
:earth_asia: Translation support  
:hamster: Tiny component (< 200 lines, ~3kb gzipped)  
:scissors: Customizable icons  
:heart: Tailwind default styles

## Breadcrumbs usage

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

Including breadcrumbs tag into page will automatically render trail to current page based on it's path. It could be something like: _"user > user-profile"_. You can utilize it by using localization files, just add following to your json with translations:

```json
{
  "user": "User",
  "user-profile": "Profile"
}
```

Or you can specify crumbs right in your **router5** route files:
Tree structure also will work in the same way - just add "crumb" key to each children. Each hierarchical link will be passed translated if translation function is specified. See description of [**t** props](#t)

```typescript
export const routes = [
  { name: 'user', path: '/user', crumb: 'User' },
  { name: 'user.profile', path: '/profile', crumb: 'Profile' },
]
```

## Props

> #### got
>
> `{[index: number]: string | React.ReactElement}`
>
> ```tsx
> export const Example = () => {
>   return <Breadcrumbs got={{ 0: product_title }} />
> }
> ```
>
> Allows to pass dynamic value resulted from fetch request to server. Starts from 0, root crumb not being count in.

> #### children
>
> `string | React.ReactElement`  
> default = `undefined`
>
> ```tsx
> export const Example = () => {
>   return <Breadcrumbs>{product_title}</Breadcrumbs>
> }
> ```
>
> Allows to rewrite current page's link with dynamic value.

> #### hide
>
> `Array<string>`
> default = `undefined`
>
> In some cases you would prefer to hide certain crumbs. For example if you have duplicated nodes in your route tree. Or in case when one view being returned for two different routes (for example if you using **router5-tabs-react** with redirect to \*.tabs parameter)
>
> ```tsx
> export const Example = () => {
>   return <Breadcrumbs hide={['route.names', 'to.hide']} />
> }
> ```

> #### t
>
> `function`  
> default = `(text: string) => text`
>
> To enable translation just pass translation function to component:
>
> ```tsx
> import { useTranslation } from 'react-i18next'
>
> export const Example = () => {
>   const { t } = useTranslation()
>   return <Breadcrumbs t={t} />
> }
> ```

> #### homeRouteName
>
> `string`
> default = `'home'`
>
> Name of route node which will be assigned to **Home** crumb

> #### homeRouteLabel
>
> `string`
> default = `'Home'`
>
> ```typescript
> {
>   strokeWidth: string
>   fill: string
>   stroke: string
>   className: any
> }
> ```
>
> Defines which label for root of the trail to display.

> #### iconProps
>
> ```typescript
> {
>   strokeWidth: string
>   fill: string
>   stroke: string
>   className: any
> }
> ```
>
> Parameters, which will be applied to default Home Icon and Arrow Icons

> #### forward
>
> ```typescript
> {
>   from: string // router paths
>   to: string
> }
> ```
>
> Use it if you want to overwrite links assigned by default.

> #### classes
>
> ```typescript
> {
>   activeLink: string // clickable links style
>   currentPage: string // classes for current page's label
>   wrapper: string // <ol></ol> tag around trails
> }
> ```
>
> default =
>
> ```typescript
> {
>   activeLink = 'flex items-baseline text-blue-700 hover:underline mx-2',
>   currentPage = 'text-gray-500 ml-2',
>   wrapper = 'flex items-baseline text-xl my-10 whitespace-no-wrap',
> }
> ```
>
> Classnames for HTML elements.

> > #### icons
>
> ```typescript
> {
>   CustomHomeIcon: React.ReactElement
>   CustomArrowIcon: React.ReactElement
> }
> ```
>
> default = `<></>`

## Check also

### router5-tabs-react

> [https://github.com/thousandsofraccoons/router5-tabs-react](https://github.com/thousandsofraccoons/router5-tabs-react)

Tiny tabbed navigation component, which renders selected tab in active breadcrumb

## License

MIT © [https://github.com/thousandsofraccoons](https://github.com/thousandsofraccoons)
