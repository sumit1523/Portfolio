import React from 'react'
import ProfileIntroSection from '../ProfileIntroSection'
import ProfileListItem from '../ProfileListItem'
import EventListItem from '../EventListItem'
import Head from '../Head'
import ProfileList from '../ProfileList'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import { ListsSection, ClientsList } from './style'

export default ({ data }) => {
  const { clients, events } = data

  return (
    <ContentWrapper>
      <Head
        {...META.profile}
        image={META.common.image}
      />
      <ProfileIntroSection
        content={() =>
          <>
            <p>Over the last 3+ years, I have been working with Capgemini India company.
              I focus primarily on building and implementing user interfaces that are usable and scalable for any web-based platform.{' '}
              <a href="https://github.com/sumit1523" target="_blank" rel="noopener noreferrer">I enjoy experimenting</a>,building and trying out new tools.</p>
          </>
        }
      />
      <ListsSection>
        {events.edges.length > 0 &&
          <ProfileList
            title='Timeline'
            list={() => events.edges.map(({ event }, i) => (
              <EventListItem
                key={i}
                {...event}
              />
            ))}
          />}
        {clients.edges.length > 0 &&
          <ClientsList
            title='Company I have worked in'
            list={() => clients.edges.map(({ client }, i) => (
              <ProfileListItem
                key={i}
                {...client}
              />
            ))}
          />}
      </ListsSection>
    </ContentWrapper>
  )
}
