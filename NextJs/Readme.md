[youtube](https://www.youtube.com/watch?v=MFuwkrseXVE&ab_channel=Academind)\
[github-main](https://github.com/mschwarzmueller/nextjs-course-code/tree/9c9e9f19b1bd27605fb4ccdca2d1a0ebb5c3a802)\
[github-starting](https://github.com/mschwarzmueller/nextjs-course-code/tree/e099f80089b65e45f500b75fec1861fb36179f4f)

# What is next js

A react framework for production, it offers many features that makes building large react projects easier to scale. Think of it as a fullstack framework for React. This is a feature, not a library, so it has a lot more structure, but it
was built to enhance the react library.

You will write react code, get lots of built-in feature to help solve problems that would usually be nessesary for production code.

# Why use next.js

## Provides server side rendering
- Automatically Pre-renders on server for crawlers (SEO)
- 'Smart' about keeping user interactions on client side (the benefit of react) and server side rendering for quick loading and SEO. This results server-side and client-side code being 'blended together'
- Note: React does provide server side rendering, but it can be difficult, NextJs makes server side rendering much easier 

## File-base routing
- In tradition react, we dont have a router, which gives the illusion that we have multiple pages. There is a react-router package, which works fine, but its extra code to write. Instead, we can just place files in a certain folder and Nextjs will take care of the routing.
- less code, less work, and highly understandable.

## Full stack capabilities
- allows us to easily add backend code for our application
- storing data, authentication, etc.

# How to install
- Install node js
- run this command VS code terminal:
```bash
  npx create-next-app
```

This will create a starting template with the following folders:
- pages, where we write code
- public, resourses our pages use
- styles, for our style code

Unlike a 'regular' react app, there is no index.html in the public folder. Instead, nextjs generates that for us, using the appropiate server side rendering. 

Remove the following files/folders:
- /pages/api
- index.js (or just delete content)
- styles/Home.module.css

# What our app will do
- 3 simple pages
  - Starting page, a home page with link to news page
  - news page, link to to page with details about the news
  - news details page, a dynamic page that will fetch details about the news, based on what news event was accessed

## How we would implemnt routing in nextjs

Inside the template /pages folder, index.js always point to the root of the website (/ *nothing). Then, as we create page components, those file names are used as paths. So, to create the page component AND the route, we can add a news.js and newsDetails.js to the /pages folder. By doing this routing to
//our-domain.com/news

We can also create a folder in /pages and name it the same as the route path. In this case, we need to define an index.js inside that folder as the root of that page. This approach is nessesary when we have nested routes.

We can create dynamic pages (the equivalent of URL params and placeholders in react router) by using square brackets in the web page, etc: [newsID].js. To extract the values from the URL, nextjs provides a special hook that we can use in functional components. We can access it by importing:

```js
import {useRouter} from 'next/router'

const DeatilPage = () => {
  const router = useRouter();
  const id = router.query.newsID

  //use id for fetching from API
  return <div />
}
```

Note that react router runs first when the page is first rendered, then again when the route is accessed.

We can apply a link to that route by defining a link (html anchor tag) in the jsx, which is the traditional way to access a new page. However, doing this will no longer make the app single page, and instead, the browser will send a new request for the html. This is not good for a reactive web page!

Instead, we need to use the Link component that nextjs provides:
```js
import Link from 'next/link'

const NewsPage = () => {
  <Link href='/news/hello'>Click me! </Link>
  return <div />
}
```

## Wrapping components
In the example, we define a Layout component that can used to wrap every page with the same navigation bar. This is a common practice, but can be cumbersome if your app has many pages. This is why next provide an _app.js file, which should be created by default when creating a nextjs app. Defined in this file is the root component. It has 2 props, the component and pageProps, which is just the main component react will render, and its props. This is the component that gets rendered for every page.

In this example we can wrap the MyApp component in the Layout component to ensure every page has the same navigation bar. Hence, we only need wrap this layout once, instead of wrapping each page.

## NextJs pre-render and SEO
NextJs will output the inital render for the search engine crawler. This conflicts with how react pages that fetch it's main content data, because that is generaly done inside a useEffect, which does not return its data untill the second trigger.

NextJs provides two forms of pre-rendering, which will run code at different times.
- Static generation
  Page component is rendered when you build your app for production (npm run build). The page is not pre-rendered on the fly, when a request reaches the server, but instead its is rendered by the developer, when you build the site for production. This means after deployment, the pre-rendered page does not change, by default. If you want the pre-render to change, you need to re-build and re-deploy your code. This is generally the way you want, becasue pages themselves dont change, the content does, and the content comes from an API.

  By default, NextJs prepares and generates your pages statically duing the build process. But, if you need to wait for data, you can do that by exporting a spectial function that can only be done by components inside your pages folder. The function must be named, getStaticProps(), see /pages/index.js for example. This tells NextJs to call this function duing the build stage pre-render. It can also be async, so it can return a promise, which NextJs will wait for and is typically where you fetch data.

  This function can also execute code that would normally just run on a server, like accessing files or securly connect to a database, because any code inside of it will never end up on, or execute on the client side. Simply becaue this code is executed during the build process, not on the server and especially not on the client. 

  You must always return an object from getStaticProps. Inside the object, we can configure various things, but most impotantly, we need to set a props object as a property. That props object is whats recieved inside the page component function. 

  Problem: the page is rendered during build, and that data could become outdated. In our example, perhaps new meetups are added or removed from the database. We could always re-build and re-deply when our data changes, which is fine for profile pages becasue data does not change frequently. If data does change frequently, there is another property we can add to the retured props object, called revalidate. This unlocks a feature called incremental static generation. That property gets set to an integer, which is the number of seconds nextjs will wait until it re-generates this page for an incoming request. So, if it is set to 10, it gets generated during the build process, and at least every 10 seconds for every request. This way, we can ensure our data is never older then 10 seconds.

- Server-side rendering

  Sometimes, a re-validate is not enough, and you want to re-generate this page for every incoming request. You want to pre-generate the page dynamically, on the fly, after deployment, on the sever. Not during the build process and not every few seconds, but for every request. 

  To do this, we create a function spcific to nextjs called getServerSideProps. This would be used instead of getStaticProps, but it isnt used as often. This function is not run during the build process, but instead always on the server after deployment. Being server side, it gives us access to server-side code and perform operations that require credentials. This function will always return an object with a props property, and with it, porperties to hold the data.

  A parameter called context is passed into this function, which gives us access to a number of things, including the request (req) and response (res). This is similar to how nodejs and express handles middleware on the server side, and can be used with authentication.

In our example, and in most practices, it is better to use static generation (getServerSideProps) if data doesnt change multiple times a second, or you dont need access to the request object (ex: authentication). This is becasue the data fetched is all pre-rendered at build time for SEO, which is faster then pre-generating for every request.

These can be applied to any nextjs page. In our example, we dont need anything for the new-meetup page becasue it is just a form that doesnt require any data. However, the [meetupID] page (aka MeetupDetails) does have data, but it can only be accessed with an ID. We could access that ID with the useRouter hook, but we cant use that inside the getStaticProps function. Instead, we use the context parameter passed in, context.params.meetupId (see [meetupId] for example).

To do this, we need to define another nextjs function called getStaticPaths, which is nessesary for any dynamic page that uses getStaticProps. Remember, a page with getStaticProps gets pre-generated during the build, which means it needs to generate ALL versions of the dynamic page, for every ID. In the getStaticPaths function, we return an object that describes all the dynamic segment values. The object has a paths key which is an array of objects, one for each version of the page. This object has a params key, which is an object with all the key/value pairs that might lead to your dynamic page. See [meetupId] for an example. Typically, you dont hard code these values, but fetch them from a database. 

Along with the params key, we also need to include a fallback key, which tells nextjs that we will provide either some or all of the versions of this page. False means it will support all values, true means it will only provide some.

## API routs
NextJs provides us a way to create a backend API together with our React front end, in the same project, called API routes. They are special routes (or pages) that dont return HTML code, but are about accepting incoming HTTP requests, also PUT, POST, PATCH, DELETE, ect requests, with json data. Then write, modidify or return json data to/from a database. API routes allow you to write your own API endpoints as part of the NextJs project, then then served on the same servere that hosts your nextjs app.

To add API routes, we create a special folder in the pages folder called api. NextJS will pick up any js files stored in there, and turn those files into API routes. In the api folder, we can add js files, and their names will correspond to paths segments in the url. The functions defined in these files are NOT react componenets, they are server-side code that execute on requests to the route.

Typically, the function is called 'handler' but you can name it whatever you want, as long as its exported. The function takes a reqest and response object, similar to NodeJs and express. The request object takes data about the incoming request, the response is responsible for sending back a response. For the request, we can get things like header, body, and method. 

In this example, we will connect to a mongoDB database. To do this, we can sign up for a free account on [mongoDb clound](https://www.mongodb.com/cloud). Then we create a free cluster, add our local IP and then add a user with read/write permissions. We can now write code in our api route that send querries to our mongoDB cluster by installing the mongoDB package.

```bash
  npm install mongodb
```

From mongodb, we import the MongoClient, an object that allows us to connect to the database. On the mongoDB cloud portal, copy the connection string and pass that in as a parameter to the MongoClient's connect method (see api/new-meetup.js). Change the `<password>` part of the string to the password of the user you created, make sure the user name natches, and rename the myFirstDatabase to the name you want your database to be. If it does not exist, like our case the first time this code runs, mongodb will create it on the fly, otherwise it accesses the database. NEVER run this code on the client side, as it will expose your credentials. 

Connect returns a promise, so make sure your function is async, so you can use await when connectiing. When it finnaly connects and returns a client object. Ob that object, we can access the db property to access the database we connected to. Then on the db object, we can access the meetups collection using the collection property. MongoDb is no-SQL, which is a collection of documents, where a collection is like an SQL table and the documents are like the entries in that table.

The collection property takes a name for the collection, if it does not exist, it will be created on the fly. The collection can be the same name as the database or any name of your choice.

On that collection object, we can call the insertOne method, which is a built in querry method to insert one document into the collection. A document is just a js object (JSON). IN our example, we would include an object with title, image, address and description. This method returns a promise so we can use await and eventually, it wil get a result. Now that we have the result, we want to call client.close() to close the database connection.

Now, we need to send back a response by using the passed in res object. This works similar to express, res has a status method that will send an http status response, like 201, which indicates a successful insert. Then we can chain on a json call to prepare the json data that will be addes to the outgoing respose. Here, we can add a message key and assign it a sting like 'Meetup inserted'.

We can now send a request to this api route from the front end, when the add meetup form is submitted. Sending a request to this api route works like any other backend, using the native fetch function, or by some third-party tool like axios. This would generally require an external url, with domain(.com)/path. But in our case, since this is being ran locally, we can use an internal absolute path. See new-meetup/index.js for example. The path must always match the folder name(s) and file name. The fetch also take an object that configures the request, that contains proerties like method, body, and headers.

In our example, the method property is assigned to POST because that is what we configured the backend to look for. The body holds the data which is the backend will insert, but make sure we pass it through a JSON.stringify call. The headers is assigned a 'Content-Type' property, set to application/json to make it clear we are sending json data. We can now use response from the fetch by awaiting for its json data. In the case of a post, we dont care about the response data, so we can just console log it. See pages/new-meetup/index.js for example.

Now that data can be/has been entered into the database, we can now fetch that data in the getStaticProps() method of the home page (/pages/index.js). This way, we can take advantage of build time rendering. However, we would need to add a new api route handler to fetch the data, then parse the data into props, but that's a bit cumbersome. Keep in mind, you nowmally cannot use fetch on the server, but NextJs has built-in functionality to do that. To avoid creating out own api route, we can just access the database dirently. Remember, getStaticProps will only run on the server or during build time, so the code we write in there is not exposed to the client. Therfore, we can wwrite code to directly access the database, instead of going through our own api route. If a page's  imported code is only used in getStaticProps/getServerSideProps, the imported package will not be apart of the client side bundle. This feature is offered by nextjs to reduce the size of the client package, and increase security.

## Good practice tips
- Keep page components lean by simply returning a component that hold contains all the content and styling.
- Pair a js file with a css module file