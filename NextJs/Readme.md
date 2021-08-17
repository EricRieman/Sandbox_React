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

In this example we can wrap the MyApp component in the Layout component to ensure every page has the same navigation bar. Hence, we only need wrap this lyout once, instead of wrapping each page.

## NextJs pre-render and SEO
NextJs will output the inital render for the search engine crawler. This conflicts with how react pages that fetch it's main content data, because that is generaly done inside a useEffect, which does not return its data untill the second trigger.

NextJs provides two forms of pre-rendering, which will run code at different times.
- Static generation, page component is rendered when you build your app for production (npm run build). The page is not pre-rendered on the fly, when a request reaches the server, but instead its is rendered by the developer, when you build the site for production. This means after deployment, the pre-rendered page does not change, by default. If you want the pre-render to change, you need to re-build and re-deploy your code. This is generally the way you want, becasue pages themselves dont change, the content does, and the content comes from an API.

  By default, NextJs prepares and generates your pages statically duing the build process. But, if you need to wait for data, you can do that by exporting a spectial function that can only be done by components inside your pages folder. The function must be named, getStaticProps(), see /pages/index.js for example. This tells NextJs to call this function duing the build stage pre-render. It can also be async, so it can return a promise, which NextJs will wait for and is typically where you fetch data.

  This function can also execute code that would normally just run on a server, like accessing files or securly connect to a database, because any code inside of it will never end up on, or execute on the client side. Simply becaue this code is executed during the build process, not on the server and especially not on the client. 

  You must always return an object from getStaticProps. Inside the object, we can configure various things, but most impotantly, we need to set a props object as a property. That props object is whats recieved inside the page component function. 

  Problem: the page is rendered during build, and that data could become outdated. In our example, perhaps new meetups are added or removed from the database. We could always re-build and re-deply when our data changes, which is fine for profile pages becasue data does not change frequently. If data does change frequently, there is another property we can add to the retured props object, called revalidate. This unlocks a feature called incremental static generation. That property gets set to an integer, which is the number of seconds nextjs will wait until it re-generates this page for an incoming request. So, if it is set to 10, it gets generated during the build process, and at least every 10 seconds for every request. This way, we can ensure our data is never older then 10 seconds.

- Server-side rendering

  Sometimes, a re-validate is not enough, and you want to re-generate this page for every incoming request. You want to pre-generate the page dynamically, on the fly, after deployment, on the sever. Not during the build process and not every few seconds, but for every request. 

  To do this, we create a function spcific to nextjs called getServerSideProps. This would be used instead of getStaticProps, but it isnt used as often. This function is not run during the build process, but instead always on the server after deployment. Being server side, it gives us access to server-side code and perform operations that require credentials. This function will als return an object with a props property.

## Good practice tips
- Keep page components lean by simply returning a component that hold contains all the content and styling.
- Pair a js file with a css module file