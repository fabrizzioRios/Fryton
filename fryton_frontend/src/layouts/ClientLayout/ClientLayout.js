import React from 'react'

export function ClientLayout(props) {
    const {children} = props;
    
    return(
        <div>
            <p>Client layout</p>
            {children}
        </div>
    )
}
