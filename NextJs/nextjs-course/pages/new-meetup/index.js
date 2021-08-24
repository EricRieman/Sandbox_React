import {useRouter} from 'next/router'

import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const router = useRouter()

  const handleAddMeetup = async ( meetupData ) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify( meetupData ),
      headers: { 'Content-Type': 'application/json'}
    });

    const data = await response.json()
    console.log( data )

    // we could use push() to navigate away after sumbitting, but by
    // using replace(), we can't use the brwser's back button, 
    // which is useful when submitting a form.
    router.replace('/') 
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetup}/>
}

export default NewMeetupPage