import styled from 'styled-components';
import { themes } from 'styles/variables/themes';

export const LogOutBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  margin-left: 10px;
  display: flex;
  padding: 6.6px 20px;
  border-radius: 8px;

  cursor: pointer;

  display: flex;
  gap: 6px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.3);
  color: ${({ theme }) => theme.colors.white};

  background-color: ${themes.colors.accent};

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;

  @media screen and (width >= ${themes.breakpoints.m}) {
    margin-left: 16px;
    text-align: center;
    font-size: 16px;
  }

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const IconDiv = styled.div`
  display: block;
  width: 18px;
  height: 18px;
  & > * {
    height: 100%;
    width: 100%;
  }
  @media screen and (width > ${themes.breakpoints.s}) {
    width: 20px;
    height: 20px;
  }
`;
