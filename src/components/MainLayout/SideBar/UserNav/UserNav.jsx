import { useTranslation } from 'react-i18next';
import { BsBarChart } from 'react-icons/bs';
import UserCheck from 'src/components/shared/Icons/UserCheck';
import CalendarCheck from 'src/components/shared/Icons/CalendarCheck';
import getCurrentDate from 'src/utils/currentDate';
import routes from 'src/routes.js';

import { NavUl, NavLinkStyled, IconDiv } from './UserNav.styled';

export default function UserNav() {
  const isMonthViewActive = location.pathname.includes('/calendar/month');
  const isDayViewActive = location.pathname.includes('/calendar/day');

  const { t } = useTranslation();

  return (
    <NavUl>
      <li key="AccountPage">
        <NavLinkStyled to={routes.accountPage}>
          <IconDiv>
            <UserCheck />
          </IconDiv>
          {t('My Account')}
        </NavLinkStyled>
      </li>
      <li key="CalendarPage">
        <NavLinkStyled
          to={`${routes.navFromLogIn}/${getCurrentDate()}`}
          className={isMonthViewActive || isDayViewActive ? 'active' : ''}
        >
          <IconDiv>
            <CalendarCheck />
          </IconDiv>
          {t('Calendar')}
        </NavLinkStyled>
      </li>
      <li key="SatisticsPage">
        <NavLinkStyled to={routes.statisticsPage}>
          <IconDiv>
            <BsBarChart />
          </IconDiv>
          {t('Statistics')}
        </NavLinkStyled>
      </li>
    </NavUl>
  );
}
