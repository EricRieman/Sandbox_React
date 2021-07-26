import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const handleAddMeetup = ( meetupData ) => {
    console.log(meetupData)
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetup}/>
}

export default NewMeetupPage