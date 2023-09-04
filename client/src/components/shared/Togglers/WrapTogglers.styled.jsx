import styled from 'styled-components';

import { themes } from 'styles/variables/themes';

export const WrapTogglers = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 10px 14px;
  height: 30px;

  @media screen and (${themes.breakpoints.s} < width <=${themes.breakpoints.m}) {
    margin-bottom: 32px;
  }
`;
