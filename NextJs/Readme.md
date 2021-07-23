# what is next js

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
- run in CL:  npx create-next-app

This will create a starting template with the following folders:
- pages, where we write code
- public, resourses our pages use
- styles, for our style code

Unlike a 'regualar' react app, there is no index.html in the public folder. Instead, nextjs generates that for us, using the appropiate server side rendering. 
