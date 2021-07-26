// https://www.youtube.com/watch?v=MFuwkrseXVE&ab_channel=Academind
import MeetupList from '../components/meetups/MeetupList'

//1:06 - The "_app.js" File & Wrapper Components

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

const HomePage = () => {
  return <MeetupList meetups={MEETUPS} />
}

export default HomePage