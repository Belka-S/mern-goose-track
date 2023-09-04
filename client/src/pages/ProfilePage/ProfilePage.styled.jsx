import styled from 'styled-components';
import { themes } from 'styles/variables/themes';

export const ProfilePageWrap = styled.div`
  padding: 0 18px 40px 18px;
  background-color: white;
  border-radius: 16px;
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundUserForm};

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    padding: 40px 80px;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    padding: 50px 100px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;

  justify-content: center;
  gap: 16px 50px;
  width: 100%;

  @media screen and (width <= ${themes.breakpoints.m}) {
    flex-direction: column;
    align-items: center;
  }
`;
