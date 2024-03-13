import React from 'react'
import { TopMenu, SideMenu } from '../../components/Admin';
import './AdminLayout.scss'
export function AdminLayout(props) {
    const {children} = props;

    return(
        <div className='admin_layout'>
            <div className='admin_layout_menu'>
                <TopMenu />
            </div>
            <div className='admin_layout_main_content'>
                <SideMenu>{children}</SideMenu>
            </div>
        </div>
    )
}