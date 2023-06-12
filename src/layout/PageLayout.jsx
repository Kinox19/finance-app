import './PageLayout.css'
import React from 'react'

const PageLayout = ({children}) => {
  return (
    <div className='layout'>{children}</div>
  )
}

export default PageLayout