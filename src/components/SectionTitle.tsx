import React from 'react';
import styled from 'styled-components';
import { spacing } from 'utils/StyleUtils';
import { GeneralFontSize } from './styles/GeneralTextStyle';

interface Props {
  title: string;
  subtitle: string;
}

export const SectionTitle: React.FC<Props> = ({ title, subtitle }) => (
  <StyledSectionTitle>
    <p>{title}</p>
    <span>{subtitle}</span>
  </StyledSectionTitle>
);

const StyledSectionTitle = styled.div`
  & p {
    margin: 0 0 ${spacing(2)}px 0;
    font-size: ${GeneralFontSize.TITLE}px;
    font-family: Cardo, serif;
  }
  & span {
    font-size: ${GeneralFontSize.TITLE_JP}px;
  }
`;
