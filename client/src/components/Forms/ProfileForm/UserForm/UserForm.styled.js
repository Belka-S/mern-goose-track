import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { themes } from 'styles/variables/themes';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserNameTitle = styled.h3`
  margin: 0;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.textCancelBtn};

  @media screen and (${themes.breakpoints.m} <= width) {
    margin-bottom: 20px;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0 50px;
    width: 758px;
    position: relative;
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBtn = styled.button`
  width: 195px;
  height: 46px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  margin-top: 0px;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hovered};
    transform: scale(1.02);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    width: 262px;
    height: 48px;
    margin-top: 40px;
    font-size: 16px;
  }
`;
