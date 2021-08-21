// url - /api/new-meetup

// since we only define a case for post requests, those are the only
// type of request this endpoint will execute (all others will return
// error code 400)

const handler = (req, res) => {
    if( req.method === 'POST' ) {
        const data = req.body;

        const {title, image, address, description} = data;

        
    }
} 

export default handler