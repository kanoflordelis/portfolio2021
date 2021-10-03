import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  HEADER_OUTER_HEIGHT,
  HEADER_INNER_HEIGHT,
  ICON_HEIGHT,
  ICON_WIDTH,
  GeneralFontSize,
} from '../consts/StyleConsts';
import { spacing } from '../utils/StyleUtils';

const navLinks = [
  { to: 'works', text: 'WORKS' },
  { to: 'about', text: 'ABOUT' },
  { to: 'contact', text: 'CONTACT' },
];

// TODO: ヘッダーをfixにする

export const NavigationHeader = () => (
  <HeaderOuter>
    <HeaderInner>
      <div>
        <Logo>KanoFlordelis</Logo>
      </div>
      <Navigations>
        <div>
          <GithubIcon />
          <LinkedInIcon />
        </div>
        <NavLinkWrapper>
          {navLinks.map(({ to, text }) => (
            <CustomLink key={to} to={to} activeClass="active" offset={-144} duration={400} spy smooth>
              <p>{text}</p>
            </CustomLink>
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
  padding-top: 8px;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
`;

const Logo = styled.p`
  font-family: 'Monoton', sans-serif;
  font-size: ${GeneralFontSize.LOGO};
  margin: 0;
`;

const Navigations = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
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

const CustomLink = styled(Link)`
  & p {
    font-size: ${GeneralFontSize.PARAGRAPH};
    font-family: Cardo, serif;
    margin: 0 0 0 ${spacing(3)}px;
    cursor: pointer;
  }
`;
