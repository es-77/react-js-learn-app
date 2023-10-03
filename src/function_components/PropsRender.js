import React from 'react'
import A from './components/props_render/A'
import B from './components/props_render/B'
import MainPropsRender from './components/props_render/MainPropsRender'

function PropsRender() {
  return (
    <div>
    PropsRender
    <br />
    <MainPropsRender render={(increment,count)=><A count={count} increment={increment} />}/>
    <MainPropsRender render={(increment,count)=><B count={count} increment={increment} />}/>
    </div>
  )
}

export default PropsRender
