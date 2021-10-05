import DEVISE_QUERY from 'consts/DeviseSize';
import { GeneralColors } from 'consts/StyleConsts';
import styled from 'styled-components';

export enum GeneralFontSize {
  PARAGRAPH = 16,
  TITLE = 31.25,
  TITLE_MOBILE = 24,
  SUB_TITLE = 20,
  TITLE_JP = 12,
  LOGO = 48,
  LOGO_MOBILE = 34,
}

export enum GeneralFontWeight {
  NORMAL = 400,
  BLACK = 900,
}

export type GeneralTextStyleProps = {
  fontSize: GeneralFontSize;
  fontWeight?: GeneralFontWeight;
  fontColor?: string;
  responsiveMaxWidth?: string;
  responsiveFontSize?: GeneralFontSize;
};

export const GeneralText = styled.span<GeneralTextStyleProps>`
  font-family: ${(props: GeneralTextStyleProps) =>
    props.fontSize === GeneralFontSize.TITLE ? 'Cardo' : 'Times New Romen'};
  font-size: ${(props: GeneralTextStyleProps) => props.fontSize}px;
  line-height: ${(props: GeneralTextStyleProps) => (props.fontSize > 20 ? 1.5 : 2)};
  color: ${(props: GeneralTextStyleProps) => props.fontColor || GeneralColors.Palette.Black};
  font-weight: ${(props: GeneralTextStyleProps) => props.fontWeight || GeneralFontWeight.NORMAL};

  @media ${DEVISE_QUERY.sp} {
    font-size: ${(props: GeneralTextStyleProps) => props.responsiveFontSize || props.fontSize}px;
  }
`;
