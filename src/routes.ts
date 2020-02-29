export default [
  { name: 'en', path: '/', crumb: 'Home', root: true },
  { name: 'ru', path: '/ru', crumb: 'Home', root: true },
  { name: 'en.privacy', path: 'privacy', crumb: 'Privacy Policy' },
  {
    name: 'ru.privacy',
    path: '/politika-privatnosti',
    crumb: 'Privacy Policy',
  },

  // TREE ROUTES
  {
    name: 'en.tree',
    path: 'first',
    crumb: 'First 1',
    children: [
      {
        name: 'second',
        path: '/:id',
        crumb: 'second 2',
        children: [{ name: 'third', path: '/:docs', crumb: 'Third crumb 3' }],
      },
    ],
  },

  {
    name: 'ru.tree',
    path: '/ru/first',
    crumb: 'First 1',
    children: [
      {
        name: 'second',
        path: '/:id',
        crumb: 'second 2',
        children: [{ name: 'third', path: '/:docs', crumb: 'Third crumb 3' }],
      },
    ],
  },

  // FLAT ROUTES
  { name: 'en.flat', path: '/flat-first', crumb: 'Flat first 4' },
  { name: 'en.flat.example', path: '/:id', crumb: 'Flat second 5' },
  { name: 'ru.flat', path: '/flat-first', crumb: 'Flat first 4' },
  { name: 'ru.flat.example', path: '/:id', crumb: 'Flat second 5' },
]
