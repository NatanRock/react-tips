// Core
import { useContext } from 'react';
import cx from 'classnames';

import { Context } from '../lib/settingsContext';

export const Settings = () => {
    const [isSettingsOpen, setSettingsOpen] = useContext(Context);

    const handleClick = () => {
        setSettingsOpen(false);
    };

    const settingClasses = cx('settings', {
        open:   isSettingsOpen,
        closed: !isSettingsOpen,
    });

    // `settings  ${isSettingsOpen ? 'open' : 'closed'}`

    return (

        <section className = { settingClasses }>
            <header>
                <h1>Настройки</h1>
            </header>
            <footer>
                <button onClick = { handleClick }>Закрыть</button>
            </footer>
        </section>
    );
};
