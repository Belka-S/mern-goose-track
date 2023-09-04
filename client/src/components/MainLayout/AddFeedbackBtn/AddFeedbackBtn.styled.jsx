import styled from 'styled-components';
import { themes } from 'styles/variables/themes';

export const AddFeedbackBtnStyles = styled.button`
  position: absolute;
  bottom: 24px;
  left: 20px;
  width: calc(100% - 20px * 2);
  display: block;
  padding: 8px 20px;
  border-radius: 8px;

  background-color: ${themes.colors.accent};

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;

  @media screen and (width >= ${themes.breakpoints.m}) {
    bottom: 32px;
    left: 32px;
    width: calc(100% - 32px * 2);
    text-align: center;
    font-size: 16px;
  }

  @media screen and (width >= ${themes.breakpoints.l}) {
    bottom: 24px;
    left: 24px;
    width: calc(100% - 24px * 2);
  }

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;
