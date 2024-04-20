import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import {Link, useLocation} from 'react-router-dom';
import './LearnMenu.scss';

export function LearnMenu() {
    const { pathname } = useLocation();
    return (
        <Menu className="top_menu_admin" borderless>
            <Menu.Item as={Link} to={'/fryton/learn/1'} active={pathname === '/fryton/learn'}>
                <Icon name="newspaper" />
                Lection 1
            </Menu.Item>
            <Menu.Item as={Link} to={'/fryton/learn/2'} active={pathname === '/fryton/learn'}>
                <Icon name="newspaper" />
                Lection 2
            </Menu.Item>
            <Menu.Item as={Link} to={'/fryton/learn/3'} active={pathname === '/fryton/learn'}>
                <Icon name="newspaper" />
                Lection 3
            </Menu.Item>
            <Menu.Item as={Link} to={'/fryton/learn/4'} active={pathname === '/fryton/learn'}>
                <Icon name="newspaper" />
                Lection 4
            </Menu.Item>
            <Menu.Item as={Link} to={'/fryton/learn/5'} active={pathname === '/fryton/learn'}>
                <Icon name="newspaper" />
                Lection 5
            </Menu.Item>
        </Menu>
    );
}