import styled from 'styled-components';
import { FiSun } from 'react-icons/fi';
import { FaRegMoon } from 'react-icons/fa';

import { device } from 'styles/variables/mediaVeriables';

export const ToggleThemeBtn = styled.button`
  transform: scale(1);
  transition-property: transform;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  color: ${({ theme }) => theme.colors.acent};

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const IconLight = styled(FiSun)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const IconDark = styled(FaRegMoon)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.darkBlue};
`;
