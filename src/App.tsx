import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { NavigationHeader, WorkCard, SectionTitle } from './components';
import { spacing } from './utils/StyleUtils';
import { GeneralColors, GeneralFontSize } from './consts/StyleConsts';

function App() {
  return (
    <div>
      {/* Header  Area */}
      <NavigationHeader />
      {/* Header  Area */}
      <TopSection>
        {/* Main Picture Area */}
        <MainPictureWrapper>
          <MainPicture>
            <p>TexttextTexttextTexttextTexttext</p>
          </MainPicture>
        </MainPictureWrapper>
        {/* Main Picture Area */}
      </TopSection>

      {/* WORKS Section */}
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
      {/* WORKS Section */}

      {/* ABOUT Section */}
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
      {/* ABOUT Section */}

      {/* CONTACT Section */}
      <Section>
        <TitleWrapper name="contact">
          <SectionTitle title="CONTACT" subtitle="連絡" />
        </TitleWrapper>
      </Section>
      {/* CONTACT Section */}
    </div>
  );
}

export default App;

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

  & p {
    margin: 0;
    font-size: ${GeneralFontSize.TITLE};
    font-family: Cardo, serif;
    color: #fff;
  }
`;

const Section = styled.section`
  width: 100%;
  margin-top: ${spacing(20)}px;
  position: relative;

  &:first-child {
    margin-top: 0;
  }
`;

const WorkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-itmes: center;
`;

const Bcg = styled.div`
  width: 100%;
  padding-top: ${spacing(10)}px;
  padding-bottom: ${spacing(10)}px;
  background-color: ${GeneralColors.Palette.bcgBlue};
`;

const About = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const AboutDescription = styled.p`
  width: calc(100% - 240px - ${spacing(3)}px);
  padding-right: ${spacing(3)}px;
  margin: 0;
  text-align: left;
  letter-spacing: 1px;
  line-height: 64px;
  word-wrap: break-word;
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
