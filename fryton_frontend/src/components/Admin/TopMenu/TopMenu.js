import React from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import {Link, useLocation} from "react-router-dom";
import './TopMenu.scss'
export function TopMenu() {
    const { pathname } = useLocation();

  return (
    <Menu fixed='top' className='top_menu_admin' borderless>
      <Menu.Item className='top_menu_admin_logo'>
          <Icon name='python'/>Fryton
      </Menu.Item>
        <Menu.Item as={Link} to={'/fryton'} active={pathname === '/fryton'}>
            <Icon name='home'/>Home
        </Menu.Item>
        <Menu.Item as={Link} to={'/fryton/about'} active={pathname === '/fryton/about'}>
            <Icon name='info'/>About
        </Menu.Item>
        <Menu.Item as={Link} to={'/fryton/run'} active={pathname === '/fryton/run'}>
            <Icon name='code'/>Run
        </Menu.Item>
        <Menu.Item as={Link} to={'/fryton/learn'} active={pathname === '/fryton/learn'}>
            <Icon name='book'/>Learn
        </Menu.Item>
        <Menu.Item as={Link} to={'https://github.com/fabrizzioRios/Fryton'} active={pathname === 'https://github.com/fabrizzioRios/Fryton'}>
            <Icon name='github'/>Repository
        </Menu.Item>
    </Menu>
  )
}
