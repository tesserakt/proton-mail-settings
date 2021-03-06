import React from 'react';
import { ProtonApp, StandardSetup } from 'react-components';
import sentry from 'proton-shared/lib/helpers/sentry';
import locales from 'proton-shared/lib/i18n/locales';

import * as config from './config';
import PrivateApp from './content/PrivateApp';

import './app.scss';

const enhancedConfig = {
    APP_VERSION_DISPLAY: '4.0.0-beta.16',
    ...config,
};

sentry(enhancedConfig);

const App = () => {
    return (
        <ProtonApp config={enhancedConfig}>
            <StandardSetup PrivateApp={PrivateApp} locales={locales} />
        </ProtonApp>
    );
};

export default App;
