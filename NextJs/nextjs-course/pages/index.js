
//import {useEffect, useState} from 'react'
import MeetupList from '../components/meetups/MeetupList'

const MEETUPS = [
  {
    id:'m1',
    title: 'a first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Oklahoma_city_downtown.JPG/1920px-Oklahoma_city_downtown.JPG',
    address: 'Some address 5, 1234 some city',
    desciption: 'this is the first meetup'
  },
  {
    id:'m2',
    title: 'a second meetup',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85pIR8iKN_3e0pgsEn0_ztfop90eunPDH5KiUPNNabUbqIdZKdCGkup9Q_gWk0s3Ak70&usqp=CAU',
    address: 'Some address 10, 1234 some city',
    desciption: 'this is the second meetup'
  }
]

const HomePage = (props) => {
  // WE NO LONGER NEED TO MANAGE STATE OR EFFECT TO FETCH DATA!
  //    it is being done in getStaticProps, see ReadMe fro deails.
  //const [loadedMeetups, setLoadedMeetups] = useState([])

  //useEffect(() => {
  //  // send http request and fetch data
  //  setLoadedMeetups(MEETUPS)
  //}, [])

  //return <MeetupList meetups={loadedMeetups} />

  return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
  // fetch data afrom an API
  // read files from the system

  return {props: {meetups: MEETUPS}}
}

export default HomePage