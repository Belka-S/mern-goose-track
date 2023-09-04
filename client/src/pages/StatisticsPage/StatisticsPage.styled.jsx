import styled from 'styled-components';
import { themes } from 'styles/variables/themes';

export const StatisticsPageStyles = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundUserForm};
  border-radius: 16px;
  padding: 14px;

  @media screen and (width >= ${themes.breakpoints.m}) {
    padding: 30px;
  }
  @media screen and (width >= ${themes.breakpoints.l}) {
    padding: 50px;
  }
`;

export const StatisticsHeadWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (width >= 768px) {
    padding: 0 32px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Legend = styled.ul`
  /* margin-bottom: 45px; */

  display: flex;
  gap: 14px;

  color: ${({ theme }) => theme.colors.textCancelBtn};
`;

export const LegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Ellipse = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  background: ${(props) => (props.type === 'day' ? '#FFD2DD' : '#3E85F3')};
`;

export const LegendText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;
