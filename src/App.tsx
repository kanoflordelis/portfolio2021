import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { GeneralFontSize, GeneralText } from 'components/styles/GeneralTextStyle';
import DEVISE_QUERY from 'consts/DeviseSize';
import { GeneralColors } from 'consts/StyleConsts';
import { NavigationHeader, WorkCard, SectionTitle } from './components';
import { spacing } from './utils/StyleUtils';

function App() {
  return (
    <Container>
      <NavigationHeader />
      <TopSection>
        <MainPictureWrapper>
          <MainPicture>
            <GeneralText
              fontSize={GeneralFontSize.TITLE}
              fontColor="#fff"
              responsiveFontSize={GeneralFontSize.TITLE_MOBILE}
            >
              TexttextTexttextTexttextTexttext
            </GeneralText>
          </MainPicture>
        </MainPictureWrapper>
      </TopSection>
      <Content>
        <Section>
          <TitleWrapper name="works">
            <SectionTitle title="WORKS" subtitle="仕事" />
          </TitleWrapper>
          <WorkList>
            <WorkCard />
            <WorkCard />
            <WorkCard />
          </WorkList>
        </Section>
        <Section>
          <Bcg>
            <TitleWrapper name="about">
              <SectionTitle title="ABOUT" subtitle="紹介" />
            </TitleWrapper>
            <About>
              <AboutDescription>
                AboutDescriptionHereAboutDescriptionHereAboutDescriptionHereAboutDescriptionHere AboutDescriptionHere
                AboutDescriptionHere AboutDescriptionHereAboutDescriptionHereAboutDescriptionHere
              </AboutDescription>
              <AboutImage src={`${process.env.PUBLIC_URL}/images/about_image.jpg`} />
            </About>
          </Bcg>
        </Section>
        <Section>
          <TitleWrapper name="contact">
            <SectionTitle title="CONTACT" subtitle="連絡" />
          </TitleWrapper>
        </Section>
      </Content>
    </Container>
  );
}

export default App;

const Content = styled.div`
  &:first-child {
    margin-top: 0;
  }
`;

const Container = styled.div`
  position: relative;
`;

const TopSection = styled.div`
  height: calc(100vh - ${spacing(20)}px);
`;

const MainPictureWrapper = styled.div`
  width: 100%;
  height: 360px;
`;

const MainPicture = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${process.env.PUBLIC_URL}/images/main_picture.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  margin-top: ${spacing(20)}px;
  position: relative;

  @media ${DEVISE_QUERY.sp} {
    margin-top: ${spacing(16)}px;
  }
`;

const WorkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-itmes: center;

  @media ${DEVISE_QUERY.sp} {
    & > div {
      margin-bottom: ${spacing(8)}px;
    }
  }
`;

const Bcg = styled.div`
  width: 100%;
  padding-top: ${spacing(10)}px;
  padding-bottom: ${spacing(10)}px;
  background-color: ${GeneralColors.Palette.BcgBlue};
`;

const About = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: start;

  @media ${DEVISE_QUERY.sp} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const AboutDescription = styled.p`
  width: calc(100% - 240px - ${spacing(3)}px);
  padding-right: ${spacing(3)}px;
  margin: 0;
  text-align: left;
  letter-spacing: 1px;
  line-height: 64px;
  word-wrap: break-word;

  @media ${DEVISE_QUERY.sp} {
    width: 80%;
    text-align: center;
    padding-right: 0;
  }
`;

const AboutImage = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
`;

const TitleWrapper = styled(Element)`
  text-align: center;
  margin-bottom: ${spacing(7)}px;
`;
