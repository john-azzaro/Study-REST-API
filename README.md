# REST API Study

<br>

## What is the REST API Study?
The "REST API Study" explores the functionality of REST (REpresentational State Transfer) technology, which is an 
underlying architectural principle for the web.  In this study, we take an indepth look from the initial setup of
a REST API to the essential operations that make REST API's so powerful.  In addition, there are a few special features
integrated into the study, including: Routers, middleware, database connections, creating and using mongoose models, custom
middleware for routes, and of course the routes themselves.

<br>

## What is a REST API?
REST is a convention used to build HTTP services and expose
resources at various endpoints, such as the subscribers (i.e. localhost:3000/subscribers) resource in this study.  
There are FOUR generic operations that REST API's support, such as create, read, update, or delete a subscriber (CRUD).  
To create a "route" for an enpoint, we can HTTP methods such as the following:

| **Operation:**                            | **Description:**                             |
| ---------------------------------------- | ----------------------------------------------|
| GET                      | Request existing resources.       |
| POST                      |  Create a new resource.      |
| PATCH                      |  Partially modify an exisiting resource.      |
| PUT                      |  Update an existing resource.      |
| DELETE                      | Remove an exisitng resource.      |

<br>

## How is the REST API Study structured?
I structured the REST API study in multiple phases so that it would be easier to study in sections and more easily digest them.  Each phase addresses an important milestone in the study which can be viewed independently but follow from the preceeding phase.  So if you are having trouble with Phase 2 (database connection) and you find a tough error, you can simply review this phase or backtrack to the preceeding phases to see if you missed a key detail.

The REST API study is broken down into 13 Phases:

| **Phase:**                            | **Objective:**                             | **Process:**                             |
| ---------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
|    1   |  Project Setup                     |  Create folder, install dependencies, install developer dependencies, create initial application files (e.g. server.js, etc.).   |
|    2    |   Create Basic Server                |  Load Express library, instantiate app, and create server in server.js.  |
|    3   |   Setup database connection           |  Load mongoose, connect to mongodb, verify connection logic, create .env file.   |
|    4   |   Setup initial middleware           |  Add built-in middleware like express.json (lets out server accept JSON as a body).   |
|    5   |   Setup Router(s)                    |  Create route folder, Setup Router in server.js, create Route file(s) in routes folder, use given routes, setup route files.   |
|    6   |   Create Routes in Router(s)         |  Create route pseudo-code shell and tets for functionality.   |
|    7   |   Create a mongoose model           |  Create schema folde, file, load mongoose, create new schema, layout and define properties of schema, export schema, import to server.js.|
|    8   |   Create GET route                  |  Add GET route logic with an async/await function and try/catch blocks.  |
|    9    |   Create POST route                 |  Add POST route logic with async/await function, schema, properties, try/catch block, test routes.   |
|   10    |   Create Middleware for id's         |  Create async/await function, get user id, pass middleware function to relevant routes, test the GET one route.   |
|   11    |    Create a GET (one) route          |  Add GET (one) logic (using middleware for id).   |
|   12    |   Create a DELETE route             |  Add DELETE logic (using middleware for id), try/catch block.   |
|   13    |   Create a PATCH route              |  ADD PATCH logic.   |

<br>

## Does REST API Study feature commentary?
Yes! The REST API Study features EXTENSIVE commentary for the server.js, models > subscriber file, and routes > subscriber file.  I also have an incredibly extensive step-by-step
process in the processNotes.txt file that goes through my reasoning.

## What are the key features of REST API study?
| **Feature:**                            | **Description:**                             |
| ---------------------------------------- | ----------------------------------------------|
|  development environment                  |   Use of dev dependencies, .env file, etc.                            |
|  clean server.js file                           |   Optimal setup for server.js, including Express, Mongoose (& mongoDb), built-in middleware, and server connection      |
|                                  |                              |
|                                  |                              |
|                                  |                              |
|                                  |                              |
|                                  |                              |
|                                  |                              |
|                                  |                              |
|                                  |                              |
|                                  |                              |
|                                  |                              |




