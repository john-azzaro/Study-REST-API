# REST API Study

<br>

## What is the REST API Study?
The "REST API Study" explores the functionality of REST (REpresentational State Transfer) technology, which is an 
underlying architectural principle for the web.  In this study, we take an indepth look from the initial setup of
a REST API to the essential operations that make REST API's so powerful.

| **Operation:**                            | **Description:**                             |
| ---------------------------------------- | ----------------------------------------------|
|    P1: Project Setup                     |  Create folder, install dependencies, install developer dependencies, create initial application files (e.g. server.js, etc.).   |
|    P2: Create Basic Server                |  Load Express library, instantiate app, and create server in server.js.  |
|    P3: Setup database connection           |  Load mongoose, connect to mongodb, verify connection logic, create .env file.   |
|    P4: Setup initial middleware           |  Add built-in middleware like express.json (lets out server accept JSON as a body).   |
|    P5: Setup Router(s)                    |  Create route folder, Setup Router in server.js, create Route file(s) in routes folder, use given routes, setup route files.   |
|    P6: Create Routes in Router(s)         |  Create route pseudo-code shell and tets for functionality.   |
|    P7: Create a mongoose model             |  Create schema folde, file, load mongoose, create new schema, layout and define properties of schema, export schema, import to server.js.  |
|    P8: Create GET route                  |  Add GET route logic with an async/await function and try/catch blocks.  |
|    P9: Create POST route                 |  Add POST route logic with async/await function, schema, properties, try/catch block, test routes.   |
|   P10: Create Middleware for id's         |  Create async/await function, get user id, pass middleware function to relevant routes, test the GET one route.   |
|   P11: Create a GET (one) route          |  Add GET (one) logic (using middleware for id).   |
|   P12: Create a DELETE route             |  Add DELETE logic (using middleware for id), try/catch block.   |
|   P13: Create a PATCH route              |  ADD PATCH logic.   |




| GET                      | Request existing resources.       |
| POST                      |  Create a new resource.      |
| PATCH                      |  Partially modify an exisiting resource.      |
| PUT                      |  Update an existing resource.      |
| DELETE                      | Remove an exisitng resource.      |


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