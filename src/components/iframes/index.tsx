import React from 'react'
// import Tabs from 'router5-tabs-react'

export const Iframes = () => {
  const tabs = [
    {
      name: 'info',
      label: 'Info',
    },
    {
      name: 'buyers',
      label: 'Buyers',
    },
    {
      name: 'rails',
      label: 'Rails',
    },
  ]

  return (
    <>
      {/* <Tabs tabs={tabs}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Tabs> */}

      <div className='px-6 sm:px-4 md:px-0'>
        <iframe
          src='https://codesandbox.io/embed/20w380j47r?fontsize=14&hidenavigation=0&initialpath=%2Finfo&module=%2Fsrc%2Ffeatures%2Froot%2Froot.js&theme=dark'
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
    </>
  )
}
