import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { spacing } from 'utils/StyleUtils';
import DEVISE_QUERY from 'consts/DeviseSize';
import { HEADER_OUTER_HEIGHT, HEADER_INNER_HEIGHT, ICON_HEIGHT, ICON_WIDTH } from 'consts/StyleConsts';
import { GeneralFontSize, GeneralText } from './styles/GeneralTextStyle';

const NavLinks = [
  { to: 'works', text: 'WORKS' },
  { to: 'about', text: 'ABOUT' },
  { to: 'contact', text: 'CONTACT' },
];

export const NavigationHeader = () => (
  <HeaderOuter>
    <HeaderInner>
      <div>
        <Logo>KanoFlordelis</Logo>
      </div>
      <Navigations>
        <div>
          <IconLink href="https://github.com/kanoflordelis" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </IconLink>
          <IconLink href="linkedin.com/in/kano-flordelis-gomez-483435173" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconLink>
        </div>
        <NavLinkWrapper>
          {NavLinks.map(({ to, text }, i) => (
            <Link key={to} to={to} activeClass="active" offset={-144} duration={400} spy smooth>
              {i === 0 ? (
                <LinkTextNoMargin fontSize={GeneralFontSize.PARAGRAPH}>{text}</LinkTextNoMargin>
              ) : (
                <LinkText fontSize={GeneralFontSize.PARAGRAPH}>{text}</LinkText>
              )}
            </Link>
          ))}
        </NavLinkWrapper>
      </Navigations>
    </HeaderInner>
  </HeaderOuter>
);

const HeaderOuter = styled.div`
  height: ${HEADER_OUTER_HEIGHT}px;
  padding-top: ${spacing(8)}px;
  position: sticky;
  top: calc(${HEADER_INNER_HEIGHT}px - ${HEADER_OUTER_HEIGHT}px);
  z-index: 1;
`;

const HeaderInner = styled.div`
  height: calc(${HEADER_INNER_HEIGHT}px - ${spacing(2)}px);
  padding-top: 16px;
  padding-bottom: 16px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;

  @media ${DEVISE_QUERY.sp} {
    flex-direction: column;
  }
`;

const Logo = styled.p`
  font-family: 'Monoton', sans-serif;
  font-size: ${GeneralFontSize.LOGO}px;
  margin: 0;

  @media ${DEVISE_QUERY.sp} {
    font-size: ${GeneralFontSize.LOGO_MOBILE}px;
  }
`;

const Navigations = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;

  @media ${DEVISE_QUERY.sp} {
    flex-direction: row-reverse;
  }
`;

const IconLink = styled.a`
  text-decoration: none;
  color: #3f3f3f;
`;

const SnsIconStyles = css`
  width: ${ICON_WIDTH}px;
  height: ${ICON_HEIGHT}px;
  margin-left: ${spacing(2)}px;
  cursor: pointer;
`;

const GithubIcon = styled(FaGithub)`
  ${SnsIconStyles}
`;

const LinkedInIcon = styled(FaLinkedin)`
  ${SnsIconStyles}
`;

const NavLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkText = styled(GeneralText)`
  margin: 0 0 0 ${spacing(3)}px;
  cursor: pointer;
`;

const LinkTextNoMargin = styled(LinkText)`
  @media ${DEVISE_QUERY.sp} {
    margin-left: 0;
  }
`;
