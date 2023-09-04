import styled from 'styled-components';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';
import { themes } from 'styles/variables/themes';

export const Label = styled.label`
  width: 100%;
  @media screen and (${themes.breakpoints.s} <= width) {
    margin: 0 auto;
  }
`;

export const FormLabelSpan = styled.span`
  display: flex;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.placeholder};
`;

export const InputField = styled(Field)`
  width: 100%;
  display: flex;

  height: 36px;
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.02em;
  border-width: 1px;
  border-style: solid;
  color: ${({ theme }) => theme.colors.textCancelBtn};
  border-color: ${({ theme }) => theme.colors.borderInputUserForm};
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;
  background: ${({ theme }) => theme.colors.backgroundUserForm};

  &:hover {
    border: 1px solid black;
  }

  &.input-error {
    border: 1px solid ${themes.colors.failed};
  }

  &.input-correct {
    border: 1px solid ${themes.colors.saccess};
  }

  @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
    width: 280px;
    height: 42px;
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    font-size: 16px;
    line-height: 1.13;
    width: 354px;
    height: 46px;
    border-radius: 8px;
    padding: 0 18px;
    margin-bottom: 8px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: ${themes.fontSizes.xs};
  font-weight: ${themes.fontWeight.r};
  line-height: 14px;
  padding-left: 14px;
  color: red;

  @media screen and (${themes.breakpoints.l} <= width) {
    padding-left: 18px;
  }
`;
