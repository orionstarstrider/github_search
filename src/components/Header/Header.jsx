import React from 'react'
import s from './Header.module.scss'
import Logo from '../Logo'

const Header = () => (
    <header className={ s.header }>
        <Logo />
    </header>
)

export default Header