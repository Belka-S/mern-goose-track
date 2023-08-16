import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import icon from 'src/images/svg/login.svg';
import iconError from 'src/images/svg/validation-error.svg';
import iconSuccess from 'src/images/svg/validation-success.svg';

import { validationLoginRules } from '../validationRules';

import {
  Container,
  Title,
  FormElement,
  InputWrap,
  InputContainer,
  Subtitle,
  Input,
  ErrorText,
  TextCorrect,
  Button,
  Img,
  SvgIcon
} from './LoginForm.styled';

export default function LoginForm({ onSubmitForm }) {
  const { t } = useTranslation();

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  return (
    <Container>
      <Title>{t('Log In')}</Title>

      <Formik
        validationSchema={validationLoginRules}
        initialValues={{ email: '', password: '' }}
        validateOnBlur={false}
        validateOnChange={validateAfterSubmit}
        validateOnMount={false}
        onSubmit={async (data) => {
          setValidateAfterSubmit(true);
          onSubmitForm(data);
          setValidateAfterSubmit(false);
        }}
      >
        {(formik) => {
          const { errors, handleSubmit, submitCount } = formik;

          const validateInput = (input) => {
            if ((validateAfterSubmit || submitCount > 0) && errors[input]) {
              setValidateAfterSubmit(true);
              return 'input-error';
            } else if (submitCount > 0 && !errors[input]) {
              return 'input-correct';
            }
            return '';
          };

          return (
            <FormElement autoComplete="off">
              <InputWrap>
                <Subtitle htmlFor="email" className={validateInput('email')}>
                  {t('Email')}
                  <InputContainer>
                    <Input
                      type="email"
                      name="email"
                      placeholder={t('nadiia@gmail.com')}
                      id="login_email"
                      className={validateInput('email')}
                    />
                    {validateInput('email') === 'input-correct' && (
                      <SvgIcon src={iconSuccess} alt="Success Icon" />
                    )}
                    {validateInput('email') === 'input-error' && (
                      <SvgIcon src={iconError} alt="Error Icon" />
                    )}
                  </InputContainer>

                  {validateInput('email') === 'input-correct' && (
                    <TextCorrect>{t('Correct email')}</TextCorrect>
                  )}
                  <ErrorText name="email" component="p" />
                </Subtitle>

                <Subtitle htmlFor="password" className={validateInput('password')}>
                  {t('Password')}
                  <InputContainer>
                    <Input
                      type="password"
                      name="password"
                      placeholder="●●●●●●●"
                      id="login_password"
                      className={validateInput('password')}
                    />
                    {validateInput('password') === 'input-correct' && (
                      <SvgIcon src={iconSuccess} alt="Success Icon" />
                    )}
                    {validateInput('password') === 'input-error' && (
                      <SvgIcon src={iconError} alt="Error Icon" />
                    )}
                  </InputContainer>

                  <ErrorText name="password" component="p" />
                </Subtitle>
              </InputWrap>

              <Button type="submit" onClick={handleSubmit}>
                {t('Log in')}
                <Img src={icon} alt="LogIn SVG" />
              </Button>
            </FormElement>
          );
        }}
      </Formik>
    </Container>
  );
}

LoginForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
