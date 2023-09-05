import React, { useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';
import { scrollIntoView } from 'scroll-js';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout, Hero, Newsletter, Fade } from '~/components';
import { Button, Headline, Icon } from '~/elements';
import { mq } from '~/Theme';
import HeroMp4 from '~/assets/hero.mp4';
import HeroWebm from '~/assets/hero.webm';
import CheckMp4 from '~/assets/check.mp4';
import CheckWebm from '~/assets/check.webm';
import ExperienceMp4 from '~/assets/experience.mp4';
import ExperienceWebm from '~/assets/experience.webm';
import ThemesMp4 from '~/assets/themes.mp4';
import ThemesWebm from '~/assets/themes.webm';

const Screen = styled.div`
  background-color: ${({ theme }) => theme.secondary.blendToBackground(125)};
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(12, 20, 66, 0.02), 0px 30px 80px rgba(12, 20, 66, 0.08),
    inset 0 0 0 1px ${({ theme }) => theme.secondary.blendToBackground(200)};

  div {
    border-radius: inherit;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    mask-image: -webkit-radial-gradient(white, black);
  }

  video {
    display: block;
    width: 100%;
  }

  ${mq.lessThan('md')`
    border-radius: 15px;
  `}

  ${mq.lessThan('sm')`
    border-radius: 9px;
  `}

  ${mq.lessThan('xs')`
    border-radius: 8px;
  `}
`;

const Grid = styled.div`
  margin: 120px 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 32px;

  ${mq.lessThan('lg')`
    margin: 100px 0;
  `}

  ${mq.lessThan('md')`
    margin: 80px 0;
    grid-gap: 24px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  `}

  ${mq.lessThan('sm')`
    margin: 60px 0;
  `}
`;

const GridFull = styled.div`
  position: relative;
  padding-bottom: 45%;
  background-color: #f4f4f5;
  border-radius: 20px;
  grid-column: 1 / 3;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: -webkit-radial-gradient(white, black);

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 20%;
    left: 0%;
    right: 0;
    opacity: 0.13;
    filter: blur(120px);
    transform: translate(-40%, -50%) rotate(8deg);
    height: 20%;
    background-color: ${({ theme }) => theme.primary.background};
    border-radius: 75%;
    pointer-events: none;
  }

  ${mq.lessThan('md')`
    padding-bottom: 90%;
    grid-column: 1;
    border-radius: 15px;
  `}

  ${mq.lessThan('sm')`
    padding-bottom: 105%;
    border-radius: 9px;
  `}

  ${mq.lessThan('xs')`
    border-radius: 8px;
  `}
`;

const VideoFull = styled.video`
  width: 66.66%;
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;

  ${mq.lessThan('lg')`
    width: 64%;
    transform: translateX(6%);
  `}

  ${mq.lessThan('md')`
    width: 100%;
    transform: translateX(0px);
  `}
`;

const GridHalf = styled.div<{ shineBottom?: boolean }>`
  position: relative;
  padding-bottom: 100%;
  background-color: #f4f4f5;
  border-radius: 20px;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: -webkit-radial-gradient(white, black);

  ${mq.lessThan('md')`
    padding-bottom: 90%;
    border-radius: 15px;
  `}

  ${mq.lessThan('sm')`
    border-radius: 9px;
  `}

  ${mq.lessThan('xs')`
    border-radius: 8px;
  `}

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.12;
    filter: blur(100px);
    transform: translate(-40%, -50%) rotate(8deg);
    height: 20%;
    background-color: ${({ theme }) => theme.primary.background};
    border-radius: 75%;
    pointer-events: none;

    ${({ shineBottom }) =>
      shineBottom &&
      css`
        top: auto;
        bottom: 0;
        transform: translate(20%, -40%) rotate(8deg);
      `}
  }
`;

const GridText = styled.div<{ bottom?: boolean }>`
  position: absolute;
  z-index: 2;
  left: 60px;
  top: 60px;
  right: 60px;
  display: grid;
  grid-gap: 16px;
  max-width: 360px;

  ${mq.lessThan('lg')`
    left: 48px;
    top: 48px;
    right: 48px;
    grid-gap: 12px;
  `}

  ${mq.lessThan('md')`
    left: 40px;
    top: 40px;
    right: 40px;
    grid-gap: 8px;
  `}

  ${mq.lessThan('sm')`
    left: 36px;
    top: 36px;
    right: 36px;
    grid-gap: 4px;
  `}

  ${mq.lessThan('xs')`
    left: 24px;
    top: 24px;
    right: 24px;
  `}

  ${({ bottom }) =>
    bottom &&
    css`
      top: auto;
      bottom: 60px;

      ${mq.lessThan('lg')`
        top: auto;
        bottom: 48px;
      `}

      ${mq.lessThan('md')`
        top: auto;
        bottom: 40px;
      `}

      ${mq.lessThan('sm')`
        top: auto;
        bottom: 36px;
      `}

      ${mq.lessThan('xs')`
        bottom: 24px;
      `}
    `}
`;

const VideoTop = styled.div`
  position: absolute;
  left: -1px;
  right: -1px;
  top: 0;

  &:before {
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    height: 24px;
    background-image: linear-gradient(rgba(244, 244, 245, 0), rgba(244, 244, 245, 1));
  }

  video {
    display: block;
    width: calc(100% + 2px);
  }
`;

const VideoBottom = styled(VideoTop)`
  bottom: 0;
  top: auto;

  &:before {
    content: '';
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    height: 20px;
    background-image: linear-gradient(rgba(244, 244, 245, 1), rgba(244, 244, 245, 0));
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin: 0;
  color: ${({ theme }) => theme.secondary.background};

  ${mq.lessThan('md')`
    font-size: 16px;
  `}
`;

const Modal = styled.div<{ state: string }>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  background-color: ${({ theme }) => theme.secondary.blendToBackground(500, 800)};
  opacity: 0;
  transition: opacity 0.3s ease;
  padding-left: 20px;
  padding-right: 20px;

  ${({ state }) =>
    (state === 'entering' || state === 'entered') &&
    css`
      opacity: 1;
    `}
`;

const ModalInner = styled.div<{ state: string }>`
  width: 100%;
  max-width: 1140px;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: -webkit-radial-gradient(white, black);
  position: relative;
  border-radius: 11px;
  box-shadow: 0px 30px 130px rgba(0, 0, 0, 0.05);

  ${mq.lessThan('lg')`
    max-width: 960px;
  `}

  ${mq.lessThan('md')`
    max-width: 720px;
  `}

  ${mq.lessThan('sm')`
    max-width: 480px;
  `}

  ${({ state }) =>
    state === 'entering' &&
    css`
      animation: scaleUp 0.4s ease forwards;
    `}

  @keyframes scaleUp {
    from {
      transform: translateY(-24px) scale(0.9);
    }
  }

  & > div {
    width: 100%;
    padding-bottom: 56.25%;
    margin: auto;
    display: block;
    position: relative;

    object,
    iframe,
    embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Close = styled.button<{ state: string }>`
  appearance: none;
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  position: absolute;
  right: 36px;
  top: 36px;
  border-radius: 50%;
  color: ${({ theme }) => theme.primary.foreground};
  background-color: ${({ theme }) => theme.secondary.blendToBackground(600)};
  transition: background-color 0.15s;

  ${mq.lessThan('sm')`
    bottom: 40px;
    left: 50%;
    top: auto;
    transform: translateX(-50%);
  `}

  &:hover {
    background-color: ${({ theme }) => theme.secondary.blendToBackground(650)};
  }

  svg {
    --icon-color: currentColor;
    --icon-size: 18px;
  }
`;

const IndexPage: React.FC = () => {
  const newsletterRef = useRef<HTMLInputElement>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const handleTryForFree = () => {
    window.open('https://app.dona.ai', '_blank')?.focus()
  };

  return (
    <Layout>
      <Helmet>
        <title>Home - {data.site.siteMetadata.title}</title>
      </Helmet>
      <Hero
        headline={
          <>
            <span>A more humane</span>
            <br />
            to-do list
          </>
        }
        text={<>Dona is a back to basic to-do list focused on fast and delightful user experience.</>}
        textLight
        cta={
          <>
            <Button variant="light" icon={<Icon.Play />} onClick={() => setShowModal(true)}>
              Watch video
            </Button>
            <Button onClick={handleTryForFree}>Try for free →</Button>
          </>
        }
      />
      <Fade>
        <Screen>
          <div>
            <video autoPlay loop muted playsInline>
              <source src={HeroMp4} type="video/mp4" />
              <source src={HeroWebm} type="video/webm" />
            </video>
          </div>
        </Screen>
        <Grid>
          <GridFull>
            <GridText>
              <Headline type="h2">
                Fast &amp; delightful
                <br />
                user experience
              </Headline>
              <Paragraph>
                Dona helps you to manage your tasks and achieve your goals in intuitive and delightful way. We wanted to
                build an app you will enjoy using every day.
              </Paragraph>
            </GridText>

            <VideoFull autoPlay loop muted playsInline>
              <source src={ExperienceMp4} type="video/mp4" />
              <source src={ExperienceWebm} type="video/webm" />
            </VideoFull>
          </GridFull>
          <GridHalf>
            <GridText>
              <Headline type="h3">Light, dark &amp; black UI theme</Headline>
              <Paragraph>
                Dona offers lot of customizations, one of them allowing you to choose from light, dark and black UI
                theme.
              </Paragraph>
            </GridText>

            <VideoBottom>
              <video autoPlay loop muted playsInline>
                <source src={ThemesMp4} type="video/mp4" />
                <source src={ThemesWebm} type="video/webm" />
              </video>
            </VideoBottom>
          </GridHalf>
          <GridHalf shineBottom>
            <GridText bottom>
              <Headline type="h3">Details matter</Headline>
              <Paragraph>We want to bring satisfation to every interaction.</Paragraph>
            </GridText>
            <VideoTop>
              <video autoPlay loop muted playsInline>
                <source src={CheckMp4} type="video/mp4" />
                <source src={CheckWebm} type="video/webm" />
              </video>
            </VideoTop>
          </GridHalf>
        </Grid>
        <Newsletter ref={newsletterRef} />
      </Fade>

      <Transition in={showModal} timeout={300} unmountOnExit>
        {(state: string) => (
          <Modal state={state}>
            <Close state={state} onClick={() => setShowModal(false)}>
              <Icon.Close />
            </Close>
            <ModalInner state={state}>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/0_2xORiONDo?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </ModalInner>
          </Modal>
        )}
      </Transition>
    </Layout>
  );
};

export default IndexPage;
