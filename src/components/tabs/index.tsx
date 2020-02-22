import React from 'react'
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs'

const Tab = ({ children }) => {
  const { onClick } = useTabState()

  return <button onClick={onClick}>{children}</button>
}

const Panel = ({ children }) => {
  const isActive = usePanelState()

  return isActive ? <p>{children}</p> : null
}

export default () => (
  <Tabs>
    <div>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </div>

    <Panel>Panel 1</Panel>
    <Panel>Panel 2</Panel>
  </Tabs>
)
