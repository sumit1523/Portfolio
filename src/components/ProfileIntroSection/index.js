import React from 'react'
import Intro from '../Intro'
import { Wrapper, InfoWrapper, Content, StyledImage } from './style'
import { Loader } from '../../style/shared'

const ProfileIntroSection = ({ content }) =>
  <Wrapper>
    <InfoWrapper>
      <Intro fixed={false} />
      <Content>{content()}</Content>
    </InfoWrapper>

    <StyledImage
      src="/images/sumit_kumar.jpeg"
      alt="Sumit Kumar - Interdisciplinary Developer"
      loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
      sources={[{
        media: 'max-width: 40rem',
        srcset: [
          '/images/sumit_kumar.jpeg'
        ]
      },{
        srcset: [
          '/images/profile/sumit_kumar.jpeg'
        ]
      }]}
    />
  </Wrapper>

export default ProfileIntroSection
