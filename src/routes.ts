export default [
  { name: 'en', path: '/', crumb: 'Home' },
  { name: 'ru', path: '/ru', crumb: 'Home' },
  { name: 'en.privacy', path: '/privacy', crumb: 'Privacy Policy' },
  {
    name: 'ru.privacy',
    path: '/politika-privatnosti',
    crumb: 'Privacy Policy',
  },

  // TREE ROUTES
  {
    name: 'tree',
    path: '/first',
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
  { name: 'flat', path: '/flat-first', crumb: 'Flat first 4' },
  { name: 'flat.example', path: '/:id', crumb: 'Flat second 5' },
]
