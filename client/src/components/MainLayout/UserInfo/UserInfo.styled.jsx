import styled from 'styled-components';

import { themes } from 'styles/variables/themes';

export const UserInfoStyles = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.textCancelBtn};

  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  margin-left: 8px;

  @media screen and (width >= ${themes.breakpoints.m}) {
    font-size: 16px;
  }
`;
