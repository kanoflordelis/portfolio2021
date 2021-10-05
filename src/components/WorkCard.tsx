import React from 'react';
import styled from 'styled-components';
import DEVISE_QUERY from 'consts/DeviseSize';
import { spacing } from 'utils/StyleUtils';
import { GeneralFontSize } from './styles/GeneralTextStyle';

export const WorkCard = () => (
  <WorkCardWrapper>
    <WorkImage src={`${process.env.PUBLIC_URL}/images/work_image.jpg`} />
    <WorkDetails>
      <WorkTitle>WorkTitleHere</WorkTitle>
      <WorkDescription>
        WorkDescriptionHereWorkDescriptionHereWorkDescriptionHereWorkDescriptionHere WorkDescriptionHere
      </WorkDescription>
    </WorkDetails>
  </WorkCardWrapper>
);

const WorkCardWrapper = styled.div`
  width: 320px;
  margin-right: ${spacing(5)}px;
  &:last-child {
    margin-right: 0;
  }

  @media ${DEVISE_QUERY.sp} {
    margin-right: 0;
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 320px;
`;

const WorkDetails = styled.div`
  padding-top: ${spacing(2)}px;
  width: 100%;

  & p {
    word-wrap: break-word;
    letter-spacing: 1.2px;
  }

  @media ${DEVISE_QUERY.sp} {
    text-align: center;
  }
`;

const WorkTitle = styled.p`
  font-size: ${GeneralFontSize.SUB_TITLE};
  font-weight: bold;
  margin: 0;
`;

const WorkDescription = styled.p``;
