import React from 'react'

import './MainContent.scss'
const MainContent:React.FC = ({children}) => {
    return (
        <div className='app-main-content'>
            {children}
        </div>
    )
}

export default MainContent
