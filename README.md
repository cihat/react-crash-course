# This repo contains the codes and notes of the resources I used while learning React.js and Next.js.

![](https://raw.githubusercontent.com/cihat/react-crash-course/master/img/Next.js-react.png)

The youtube links I watched are below

1. [React JS Crash Course 2021](https://www.youtube.com/watch?v=w7ejDZ8SWv8&list=RDCMUC29ju8bIPH5as8OGnQzwJyA&index=2)

Timestamps:

- [x] 0:00 - Intro & Slides
- [x] 12:37 - Create a React app
- [x] 14:52 - Files & folders
- [x] 18:54 - App component & JSX
- [x] 22:39 - Expressions in JSX
- [x] 23:49 - Creating a component
- [x] 27:18 - Component Props
- [x] 28:50 - PropTypes
- [x] 30:42 - Styling
- [x] 34:17 - Button Component
- [x] 37:46 - Events
- [x] 40:18 - Tasks Component
- [x] 41:03 - Create a list with .map()
- [x] 43:07 - State & useState Hook
- [x] 44:55 - Global state
- [x] 46:52 - Task Component
- [x] 49:30 - Icons with react-icons
- [x] 51:41 - Delete task & prop drilling
- [x] 55:50 - Optional message if no tasks
- [x] 56:58 - Toggle reminder & conditional styling
- [x] 1:03:13 - Add Task Form
- [x] 1:06:16 - Form input state (controlled components)
- [x] 1:09:18 - Add task submit
- [x] 1:14:36 - showAddTask state
- [x] 1:15:58 - Button toggle
- [x] 1:19:33 - Build for production
- [x] 1:21:51 - JSON Server
- [x] 1:25:53 - useEffect Hook & Fetch tasks from server
- [x] 1:30:13 - Delete task from server
- [x] 1:31:51 - Add task to server
- [x] 1:35:15 - Toggle reminder on server
- [x] 1:39:15 - Routing, footer & about

2. [Next.js Crash Course 2021](https://www.youtube.com/watch?v=mTz0GXj8NN0)

Timestamps:

- [x] 0:00 - Intro & Slides
- [x] 6:52 - Getting Setup with create-next-app
- [x] 8:23 - Files & Folders
- [x] 11:37 - Pages & Routing
- [x] 13:14 - Head
- [x] 16:05 - Layouts & CSS Modules
- [x] 20:56 - Nav Component & Link
- [x] 23:34 - Create a Header
- [x] 25:05 - Styled JSX
- [x] 27:46 - Custom Document
- [x] 31:16 - Data Fetching
- [x] 32:02 - getStaticProps()
- [x] 33:58 - Showing Data
- [x] 40:15 - Nested Routing
- [x] 42:46 - getServerSideProps()
- [x] 46:00 - getStaticPaths()
- [x] 49:47 - Export a Static Website
- [x] 53:18 - API Routes
- [x] 59:24 - Using the API Data
- [x] 1:03:48 - Custom Meta Component

3. [Advanced Next.js Course | Learn Next.js in 2021](https://www.youtube.com/watch?v=EJVGzyWSCBE)

Timestamps

- [x] 00:00 codedamn Intro
- [x] 01:19 Introduction
- [x] 02:28 Environment Variables
- [x] 13:18 Managing Env Files
- [x] 19:36 getServerSideProps Part 1
- [x] 27:16 getServerSideProps Part 2
- [x] 38:13 getServerSideProps Part 3
- [x] 44:59 getStaticProps Part 1
- [x] 50:37 getStaticProps Part 2
- [x] 01:05:00 getStaticProps Part 3
- [x] 01:06:59 getStaticPaths
- [x] 01:19:45 Preview Mode
- [x] 01:30:49 Dynamic Loading Part 1
- [x] 01:37:33 Image Component Part 1
- [x] 01:45:41 Image Component Part 2
- [x] 01:52:38 Outro

4. [Birlikte Next.js Öğreniyoruz](https://www.youtube.com/watch?v=XSc2MzIqUqw&t=87s)

5. [Learning Next.js Page](https://nextjs.org/learn/basics/data-fetching/two-forms)

- ### When to Use Static Generation v.s. Server-side Rendering

  We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.
  You should ask yourself: "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Generation. On the other hand, Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.
  In that case, you can use Server-side Rendering. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data.

  #### Static Generation with Data using `getStaticProps`

  ```javascript
      export default function Home(props) { ... }

      export async function getStaticProps() {
        // Get external data from the file system, API, DB, etc.
        const data = ...

        // The value of the `props` key will be
        //  passed to the `Home` component
        return {
          props: ...
        }
      }
  ```

  **Note**: In development mode, getStaticProps runs on each request instead.

- [x] [How to deploy React App to GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)
