import styled from 'styled-components';
import { themes } from 'styles/variables/themes';

export const ProfilePageWrap = styled.div`
  padding: 0 18px 40px 18px;
  background-color: white;
  border-radius: 16px;
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundUserForm};

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    padding: 20px 80px 20px 80px;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    padding: 30px 100px 30px 100px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (${themes.breakpoints.l} <= width) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;
