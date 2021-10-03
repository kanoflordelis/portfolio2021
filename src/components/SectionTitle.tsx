import { GeneralFontSize } from 'consts/StyleConsts';
import React from 'react';
import styled from 'styled-components';
import { spacing } from 'utils/StyleUtils';

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
  //   text-align: center;
  //   margin-bottom: ${spacing(7)}px;
  & p {
    margin: 0 0 ${spacing(2)}px 0;
    font-size: ${GeneralFontSize.TITLE};
    font-family: Cardo, serif;
  }
  & span {
    font-size: ${GeneralFontSize.TITLE_JP};
  }
`;
