// url - /api/new-meetup

// since we only define a case for post requests, those are the only
// type of request this endpoint will execute (all others will return
// error code 400)

import {MongoClient} from 'mongodb'

async const handler = (req, res) => {
    if( req.method === 'POST' ) {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://new-user:todokgF6iLhpzwU4@cluster0.y9rq6.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()
        const meetupCollection = db.collection('meetups')

        const result = await meetupCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({message: 'Meetup inserted'})
    }
} 

export default handler