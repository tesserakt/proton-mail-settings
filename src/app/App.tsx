import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ProtonApp, StandardSetup } from 'react-components';
import sentry from 'proton-shared/lib/helpers/sentry';
import locales from 'proton-shared/lib/i18n/locales';

import * as config from './config';
import PrivateApp from './content/PrivateApp';

import './app.scss';

sentry(config);

const App = () => {
    return (
        <ProtonApp config={config}>
            <StandardSetup PrivateApp={PrivateApp} locales={locales} />
        </ProtonApp>
    );
};

export default hot(App);
