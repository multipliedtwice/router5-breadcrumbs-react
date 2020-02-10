import React from 'react'

export const Iframes = () => {
  return (
    <div className='px-6 sm:px-4 md:px-0'>
      <iframe
        src='https://codesandbox.io/embed/pensive-leftpad-ggpgy?fontsize=14&hidenavigation=1&theme=dark'
        style={{
          height: '500px',
        }}
        className='overflow-hidden rounded-lg my-10 w-full'
        title='router5-breadcrumbs-react-tree-of-routes-example'
        allow='geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb'
        sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
      ></iframe>
      <iframe
        src='https://codesandbox.io/embed/router5-breadcrumbs-react-flat-route-list-example-f0tvc?fontsize=14&hidenavigation=1&theme=dark'
        style={{
          height: '500px',
        }}
        className='overflow-hidden rounded-lg my-10 w-full'
        title='router5-breadcrumbs-react-flat-route-list-example'
        allow='geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb'
        sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
      ></iframe>
    </div>
  )
}
