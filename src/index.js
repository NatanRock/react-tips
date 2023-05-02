// Core
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Components
import { App } from './App';

// Instruments
import './theme/main.scss';

// Context providers
import { SelectedTagProvider, SettingProvider, queryClient } from './lib';

render(
    <QueryClientProvider client = { queryClient }>
        <SettingProvider>
            <SelectedTagProvider>
                <Router>
                    <App />
                </Router>
            </SelectedTagProvider>
        </SettingProvider>
        <ReactQueryDevtools initialIsOpen = { false } />
    </QueryClientProvider>,
    document.getElementById('root'),
);
