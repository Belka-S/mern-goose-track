import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  display: flex;
  max-width: 335px;
  padding: 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  border-radius: 8px;
  background: #fff;

  @media screen and (min-width: 768px) {
    width: 480px;
    gap: 40px;
  }
`;

export const Title = styled.h1`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const FormElement = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 48px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const Subtitle = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  color: #111;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 14px;

  border-radius: 8px;
  border: 1px solid #dce3e5;
  background: #fff;

  color: #111;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 18px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: darkblue;
  display: block;
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 14px;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border-radius: 16px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    padding: 16px;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
