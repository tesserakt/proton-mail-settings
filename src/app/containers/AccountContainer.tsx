import * as React from 'react';
import {
    UsernameSection,
    PasswordsSection,
    NewsSection,
    DeleteSection,
    EmailSection,
    TwoFactorSection,
    SettingsPropsShared
} from 'react-components';
import { c } from 'ttag';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

export const getAccountPage = () => {
    return {
        text: c('Title').t`Account`,
        to: '/account',
        icon: 'account',
        subsections: [
            {
                text: c('Title').t`Username`,
                id: 'username'
            },
            {
                text: c('Title').t`Passwords`,
                id: 'passwords'
            },
            {
                text: c('Title').t`Two factor authentication`,
                id: 'two-fa'
            },
            {
                text: c('Title').t`Recovery & notification`,
                id: 'email'
            },
            {
                text: c('Title').t`Email subscriptions`,
                id: 'news'
            },
            {
                text: c('Title').t`Delete account`,
                id: 'delete'
            }
        ]
    };
};

const AccountContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getAccountPage()}
            setActiveSection={setActiveSection}
        >
            <UsernameSection />
            <PasswordsSection />
            <TwoFactorSection />
            <EmailSection />
            <NewsSection />
            <DeleteSection />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default AccountContainer;
