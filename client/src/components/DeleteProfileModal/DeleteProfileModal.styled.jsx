import styled from 'styled-components';
import { themes } from 'styles/variables/themes';

export const DeleteProfileBtn = styled.button`
  width: 172px;
  height: 48px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  border-radius: 16px;
  color: white; //  color: ${({ theme }) => theme.colors.white};
  background-color: #fad91b;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #bb0202;
    transform: scale(1.1);
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    width: 195px;
  }
`;
