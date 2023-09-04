import styled from 'styled-components';
import { themes } from 'styles/variables/themes';

export const ChangeValueBtn = styled.button`
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.02em;
  border-width: 1px;
  border-style: solid;
  color: ${({ theme }) => theme.colors.textCancelBtn};
  border-color: ${({ theme }) => theme.colors.borderInputUserForm};
  border-radius: 8px;
  padding: 0 18px;
  text-align: left;
  background: ${({ theme }) => theme.colors.backgroundUserForm};

  &:hover {
    border: 1px solid black;
  }

  &.input-error {
    border: 1px solid ${themes.colors.failed};
  }

  &.input-correct {
    border: 1px solid ${themes.colors.saccess};
  }

  @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
    width: 299px;
    height: 42px;
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    font-size: 16px;
    line-height: 1.13;
    width: 354px;
    height: 46px;
    border-radius: 8px;
    padding: 0 18px;
  }
`;
