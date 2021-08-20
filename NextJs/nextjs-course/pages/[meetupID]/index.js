import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = (props) => {
  return <MeetupDetail />
}

export async const getStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        }
      },
      {
        params: {
          meetupId: 'm2',
        }
      }
    ]
  }
}

export async const getStaticProps = () => {
  const metupId = context.params.meetupId
  console.log(meetupId)

  return {
    props: {meetups: {
      id: metupId,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Oklahoma_city_downtown.JPG/1920px-Oklahoma_city_downtown.JPG',
      title: 'a first meetup',
      address: 'Some address 5, 1234 some city',
      description: 'this is the second meetup'
    }}
  }
}

export default MeetupDetails
