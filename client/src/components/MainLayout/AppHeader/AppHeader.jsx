import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import LogoutBtn from 'components/shared/LogoutBtn/LogoutBtn';
import UserInfo from 'components/MainLayout/UserInfo/UserInfo';
import { Header, LoactionSign, Go, Slogan } from 'components/MainLayout/AppHeader/Header.styled';

import goose1x from 'images/others/desktop/goose-calendar1x.png';
import goose2x from 'images/others/desktop/goose-calendar2x.png';
import goose3x from 'images/others/desktop/goose-calendar3x.png';

import UserMenuBTN from './UserMenuBTN/UserMenuBTN';

export default function AppHeader({ callBack }) {
  const { t } = useTranslation();

  const location = useLocation();
  const activePage = location.pathname.split('/')[1];
  const isCalendarDayPage = activePage === 'calendar' && location.pathname.includes('/day/');

  const headerTitle = {
    account: t('Profile'),
    statistics: t('Statistics'),
    calendar: t('Calendar')
  };

  const [isDesktop1440, setIsDesktop1440] = useState(false);

  useEffect(() => {
    const checkIsDesktop1440 = () => {
      setIsDesktop1440(window.innerWidth >= 1440);
    };

    checkIsDesktop1440();

    window.addEventListener('resize', checkIsDesktop1440);

    return () => {
      window.removeEventListener('resize', checkIsDesktop1440);
    };
  }, []);

  return (
    <>
      {isCalendarDayPage && isDesktop1440 ? (
        <Header>
          <UserMenuBTN callBack={callBack} />
          <img
            srcSet={`${goose1x} 1x,
            ${goose2x} 2x,
            ${goose3x} 3x`}
            src={goose1x}
            alt="Goose"
            style={{ marginRight: '8px' }}
          />

          <LoactionSign>
            {headerTitle[activePage]}
            <Slogan>
              <Go>{t('Let go')}</Go> {t('of_the past and focus on the present!')}
            </Slogan>
          </LoactionSign>

          <UserInfo />
          <LogoutBtn />
        </Header>
      ) : (
        <Header>
          <UserMenuBTN callBack={callBack} />
          {isDesktop1440 && <LoactionSign>{headerTitle[activePage]}</LoactionSign>}

          <UserInfo />
          <LogoutBtn />
        </Header>
      )}
    </>
  );
}

AppHeader.propTypes = {
  callBack: PropTypes.func.isRequired,
  onGiveFeedBack: PropTypes.func.isRequired
};
