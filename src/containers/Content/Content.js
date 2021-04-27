import React from 'react';

import './Content.scss';

const Content = ({children}) => {
    return (
        <div className='app-content'>
            {children}
        </div>
    )
}

export default Content
