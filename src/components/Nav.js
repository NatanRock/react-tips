// Core
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { icons } from '../theme/icons/nav';

import { Context } from '../lib/settingsContext';


export const Nav = () => {
    const [, setSettingsOpen] = useContext(Context);

    const handleClick = (event) => {
        event.preventDefault();
        setSettingsOpen(true);
    };

    return (
        <nav className = 'nav'>
            <h1 title = 'Типсы и Триксы'>T и T</h1>
            <Link to = '#'>
                <icons.Home /> Все темы
            </Link>
            <Link  to = '#'>
                <icons.Tag /> По тегам
            </Link>
            <Link  to = '#'>
                <icons.Publish /> Опубликовать
            </Link>
            <a href = '#' onClick = { handleClick } >
                <icons.Settings /> Настройки
            </a>
        </nav>
    );
};
