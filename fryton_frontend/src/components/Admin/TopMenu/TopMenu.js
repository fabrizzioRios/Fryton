import React from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import {Link, useLocation} from "react-router-dom";
import './TopMenu.scss'
export function TopMenu() {
    const { pathname } = useLocation();

  return (
    <Menu fixed='top' className='top_menu_admin'>
      <Menu.Item className='top_menu_admin_logo'>
        <p>Fryton</p>
      </Menu.Item>
        <Menu.Item as={Link} to={'/fryton'} active={pathname === '/fryton'}>
            <Icon name='home'/>Home
        </Menu.Item>
        <Menu.Item as={Link} to={'/fryton/about'} active={pathname === '/fryton/users'}>
            <Icon name='users'/>About
        </Menu.Item>
        <Menu.Item as={Link} to={'/fryton/run'} active={pathname === '/fryton/run'}>
            <Icon name='building'/>Run
        </Menu.Item>
        <Menu.Item as={Link} to={'/fryton/learn'} active={pathname === '/fryton/learn'}>
            <Icon name='hdd outline'/>Learn
        </Menu.Item>
        <Menu.Item as={Link} to={'https://github.com/fabrizzioRios'} active={pathname === 'https://github.com/fabrizzioRios'}>
            <Icon name='hdd outline'/>Repository
        </Menu.Item>
    </Menu>
  )
}
