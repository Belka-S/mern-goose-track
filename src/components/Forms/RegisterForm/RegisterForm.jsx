import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import icon from 'src/images/svg/login.svg';
import iconError from 'src/images/svg/validation-error.svg';
import iconSuccess from 'src/images/svg/validation-success.svg';

import { validationRegisterRules } from '../validationRules';

import {
  Container,
  Title,
  FormElement,
  InputWrap,
  Subtitle,
  Input,
  ErrorText,
  TextCorrect,
  Button,
  Img,
  SvgIcon
} from './RegisterForm.styled';

export default function RegisterForm({ callBack }) {
  const { t } = useTranslation();

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const onSubmit = (data, { setSubmitting, resetForm }) => {
    callBack(data);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Container>
      <Title>{t('Sign Up')}</Title>

      <Formik
        validationSchema={validationRegisterRules}
        initialValues={{ name: '', email: '', password: '' }}
        validateOnBlur={false}
        validateOnChange={validateAfterSubmit}
        validateOnMount={false}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { errors, handleSubmit, isValid, isSubmitting } = formik;

          const validateInput = (input) => {
            if (validateAfterSubmit && errors[input]) {
              return 'input-error';
            } else if (validateAfterSubmit && !errors[input]) {
              return 'input-correct';
            }
            return '';
          };

          return (
            <FormElement autoComplete="off" onSubmit={onSubmit}>
              <InputWrap>
                <Subtitle htmlFor="name" className={validateInput('name')}>
                  {t('Name')}
                  <Input
                    type="name"
                    name="name"
                    placeholder={t('Enter your name')}
                    id="signup_name"
                    className={validateInput('name')}
                  />
                  {validateInput('name') === 'input-correct' && (
                    <TextCorrect>This is an CORRECT name</TextCorrect>
                  )}
                  <ErrorText name="name" component="p" />
                  {validateInput('name') === 'input-correct' && (
                    <SvgIcon src={iconSuccess} alt="Success Icon" />
                  )}
                  {validateInput('name') === 'input-error' && (
                    <SvgIcon src={iconError} alt="Error Icon" />
                  )}
                </Subtitle>

                <Subtitle htmlFor="email" className={validateInput('email')}>
                  {t('Email')}
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('Enter email')}
                    id="signup_email"
                    className={validateInput('email')}
                  />
                  {validateInput('email') === 'input-correct' && (
                    <TextCorrect>This is an CORRECT email</TextCorrect>
                  )}
                  <ErrorText name="email" component="p" />

                  {validateInput('email') === 'input-correct' && (
                    <SvgIcon src={iconSuccess} alt="Success Icon" />
                  )}
                  {validateInput('email') === 'input-error' && (
                    <SvgIcon src={iconError} alt="Error Icon" />
                  )}
                </Subtitle>

                <Subtitle htmlFor="password" className={validateInput('password')}>
                  {t('Password')}
                  <Input
                    type="password"
                    name="password"
                    placeholder={t('Enter password')}
                    id="signup_password"
                    className={validateInput('password')}
                  />
                  {validateInput('password') === 'input-correct' && (
                    <TextCorrect>This is an CORRECT password</TextCorrect>
                  )}
                  <ErrorText name="password" component="p" />

                  {validateInput('password') === 'input-correct' && (
                    <SvgIcon src={iconSuccess} alt="Success Icon" />
                  )}
                  {validateInput('password') === 'input-error' && (
                    <SvgIcon src={iconError} alt="Error Icon" />
                  )}
                </Subtitle>
              </InputWrap>

              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                onClick={() => {
                  setValidateAfterSubmit(true);
                  handleSubmit();
                }}
              >
                {t('Sign Up')} <Img src={icon} alt="LogIn SVG" />
              </Button>
            </FormElement>
          );
        }}
      </Formik>
    </Container>
  );
}

RegisterForm.propTypes = {
  callBack: PropTypes.func.isRequired
};
