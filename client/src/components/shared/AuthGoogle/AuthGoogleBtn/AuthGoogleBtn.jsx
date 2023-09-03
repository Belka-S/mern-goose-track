import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import SvgGoogle from 'components/shared/Icons/Google';

import { LinkBtn } from './AuthGoogleBtn.styled';

const { DEV, VITE_BACK_URL_DEV, VITE_BACK_URL_PROD } = import.meta.env;

const baseUrl = DEV ? VITE_BACK_URL_DEV : VITE_BACK_URL_PROD;

const AuthGoogleBtn = ({ title }) => {
  const { t } = useTranslation();

  return (
    <LinkBtn href={`${baseUrl}/api/users/google`}>
      <SvgGoogle width="24px" height="24px" />
      {t(title)}
    </LinkBtn>
  );
};

AuthGoogleBtn.propTypes = {
  title: PropTypes.string
};

export default AuthGoogleBtn;
