import React, { ChangeEvent, FormEvent, forwardRef, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Submit, Headline, Button, Icon } from '~/elements';
import { mq } from '~/Theme';
import { validateEmail } from '~/util';

const Wrapper = styled.form`
  margin: 200px 0;
  position: relative;
  display: block;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -50%;
    right: 0;
    opacity: 0.5;
    filter: blur(90px);
    transform: translate(-40%, -50%) rotate(-8deg) translateZ(0);
    height: 30%;
    background-color: ${({ theme }) => theme.primary.background};
    border-radius: 75%;
    pointer-events: none;

    ${mq.lessThan('md')`
      filter: blur(80px);
      transform: translate(-20%, -50%) rotate(-8deg);
    `}
  }

  ${mq.lessThan('lg')`
    margin: 160px 0;
  `}

  ${mq.lessThan('md')`
    margin: 120px 0;
  `}

  ${mq.lessThan('sm')`
    margin: 84px 0;
  `}
`;

const Input = styled.input<{ isInvalid?: boolean }>`
  color: inherit;
  line-height: 60px;
  font-size: 40px;
  margin: 0 0 28px 0;
  appearance: none;
  padding: 0;
  width: 100%;
  border: none;
  outline: none;
  background: none;
  position: relative;
  z-index: 1;
  transform-origin: 0 100%;

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      animation: invalid 0.15s 2 linear forwards;
    `}

  @keyframes invalid {
    33% {
      transform: translateX(-1.5px);
    }
    66% {
      transform: translateX(1.5px);
    }
  }

  ${mq.lessThan('lg')`
    line-height: 48px;
    font-size: 36px;
    margin: 0 0 32px 0;
  `}

  ${mq.lessThan('md')`
    line-height: 40px;
    font-size: 32px;
    margin: 0 0 28px 0;
  `}

  ${mq.lessThan('sm')`
    line-height: 36px;
    font-size: 28px;
    margin: 0 0 24px 0;
  `}

  &::placeholder {
    color: ${({ theme }) => theme.secondary.blendToBackground(500)};
    transition: color 0.15s;
  }

  &:hover {
    &::placeholder {
      color: ${({ theme }) => theme.secondary.blendToBackground(600)};
    }
  }
`;

const Error = styled.div<{ hasError: boolean }>`
  position: absolute;
  left: 0;
  top: 100%;
  transform: translateY(8px);
  font-size: 14px;
  font-weight: 500;
  color: #ec0039;
`;

const Default = styled.div<{ hasSuccess: boolean }>`
  position: relative;
  transition: opacity 0.2s, transform 0.2s;

  ${({ hasSuccess }) =>
    hasSuccess &&
    css`
      opacity: 0;
      transform: translateY(16px);
      pointer-events: none;
    `}
`;

const Success = styled.div<{ hasSuccess: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  transition: opacity 0.2s ease 0.15s, transform 0.3s ease 0.15s;

  ${({ hasSuccess }) =>
    !hasSuccess &&
    css`
      opacity: 0;
      transform: translateY(-16px);
      pointer-events: none;
    `}
`;

const StyledHeadline = styled(Headline)`
  line-height: 56px;
  margin-bottom: 32px;
  font-size: 48px;

  span {
    line-height: inherit;
  }

  ${mq.lessThan('lg')`
    font-size: 44px;
    margin-bottom: 24px;
  `}

  ${mq.lessThan('md')`
    font-size: 36px;
    line-height: 44px;

    span {
      margin-bottom: -2px;
    }
  `}

  ${mq.lessThan('sm')`
    font-size: 28px;
    line-height: 36px;
  `}
`;

const SuccessHeadline = styled.div`
  position: relative;
  transform: translateY(-20%);
`;

const SuccessMessage = styled.p`
  margin: 0;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  color: ${({ theme }) => theme.secondary.background};

  ${mq.lessThan('sm')`
    font-size: 14px;
  `}
`;

const Follow = styled(Button)`
  transform: translateY(10%);
`;

const DiscordFollow = styled(Button)`
  transform: translateY(10%);
  margin-left: 16px;
  background-color: #7289da;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Newsletter = forwardRef<HTMLInputElement, any>((props, ref) => {
  const errorRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const [hasSuccess, setHasSuccess] = useState<boolean>(false);
  const [hasLoading, setHasLoading] = useState<boolean>(false);
  const [triggerInvalid, setTriggerInvalid] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (triggerInvalid || hasLoading || !errorRef.current) {
      return;
    }

    const error = errorRef.current;
    const input = (ref as any).current as HTMLInputElement;

    if (!validateEmail(email)) {
      setTriggerInvalid(true);
      if (input) {
        input.focus();
      }
      setTimeout(() => setTriggerInvalid(false), 300);
      return;
    }

    setHasLoading(true);
    setHasError(false);

    setTimeout(() => {
      fetch('https://api.dona.ai/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((response) => {
          setHasLoading(false);

          if (!response.ok) {
            setHasError(true);
            setTimeout(() => setTriggerInvalid(false), 300);
            error.textContent = 'Something went wrong';
            return;
          }

          response.json().then((json) => {
            if (json.type === 'error') {
              setHasError(true);
              setTimeout(() => setTriggerInvalid(false), 300);
              error.textContent = json.message;
              return;
            }
            if (json.type === 'success') {
              setHasSuccess(true);
              return;
            }
          });
        })
        .catch(() => {
          setHasLoading(false);
          setHasError(true);
          setTimeout(() => setTriggerInvalid(false), 300);
          error.textContent = 'Something went wrong';
        });
    }, 800);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Default hasSuccess={hasSuccess}>
        <Input
          ref={ref}
          placeholder="Enter your email"
          autoComplete="off"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
            if (errorRef.current) {
              errorRef.current.textContent = '';
            }
          }}
          isInvalid={triggerInvalid}
        />
        <Error ref={errorRef} hasError={hasError} />
        <Submit isValid={validateEmail(email)} isLoading={hasLoading}>
          Join our newsletter
        </Submit>
      </Default>
      <Success hasSuccess={hasSuccess}>
        <SuccessHeadline>
          <StyledHeadline type="h1">
            Thank you! <span className="inline">You're in.</span>
          </StyledHeadline>
          <SuccessMessage>You can be involved by following Dona on Twitter and joining our discord server.</SuccessMessage>
        </SuccessHeadline>
        <FlexBox>
          <Follow onClick={() => window.open('https://twitter.com/getdona', '_blank')?.focus()} icon={<Icon.Twitter />}>
            Follow us on Twitter
          </Follow>
          <DiscordFollow
            onClick={() => window.open('https://discord.gg/ar9KGYjvAA', '_blank')?.focus()}
            icon={<Icon.Discord />}
          >
            Join our Discord community
          </DiscordFollow>
        </FlexBox>
      </Success>
    </Wrapper>
  );
});
