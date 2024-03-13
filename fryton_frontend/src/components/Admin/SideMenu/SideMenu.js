import React from 'react'
import "./SideMenu.scss"

export function SideMenu(props) {
    const { children } = props;
    return (
        <div className='side_menu_admin'>
            <div className='content'>{children}</div>
        </div>
    )
}


