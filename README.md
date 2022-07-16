![Build Tests](https://github.com/daileyo/liatrio-messag-api/actions/workflows/build.yml/badge.svg)
![Unit Tests](https://github.com/daileyo/liatrio-messag-api/actions/workflows/unit-tests.yml/badge.svg)
[![codecov](https://codecov.io/gh/daileyo/liatrio-message-api/branch/development/graph/badge.svg?token=62B00DRSAZ)](https://codecov.io/gh/daileyo/liatrio-message-api)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# liatrio-message-api

## Description
Messaging API for DevOps assessment and discussion.  This application exposes an API endpoing that will return a json string with
- a static message of "*Automate all things!*"
- a timestamp consitent with the time of the request.


## Hard Dependencies
- npm

## Soft Dependencies
- Act (from github actions)  **NOTE**:  *Only needed for running workflow actions locally*
- Docker                     **NOTE**:  *Docker is not explicitly needed, but certain features from GitHub Actions and files will not be useable*


## How to Setup Locally

1.  Fork Repository
2.  Clone respitory locally
```
git clone git@github.com:daileyo/liatrio-message-api.git
```
3.  Run npm i

### Without Docker
-  To run and monitor changes:
```
npm run serve
```
-  To run without monitoring changes *(more akin to production mode)*:
```
npm start
```

In both situations, the api functionality can be verfied by using a browser of choice and/or cur.
-  curl example:
```
curl -o /dev/null -s -w "%{http_code}\n" http://localhost:4242
```
-  standard gui browsers *(Edge, Chrome, Firefox, Safari, etc.)*
```
enter url http//localhost:4242
```

### With Docker

#### Running Docker image
1.  pull docker image
```
docker pull daileyo/liatrio-api
```
2.  run docker image
```
docker run -dt --name liatrio-api -p 4242:4242 daileyo/liatrio-api
```