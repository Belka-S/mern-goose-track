import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { themes } from 'styles/variables/themes';

export const SideBarBtnClose = styled.button`
  position: absolute;
  top: 24px;
  right: 20px;

  @media screen and (width >= ${themes.breakpoints.m}) {
    top: 32px;
    right: 32px;
  }
`;
export const IoCloseIcon = styled(IoClose)`
  color: ${({ theme }) => theme.colors.loaderWrapper};
  width: 24px;
  height: 24px;
  @media screen and (width >= ${themes.breakpoints.m}) {
    width: 34px;
    height: 34px;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    display: none;
  }
`;
