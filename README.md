![Build Tests](https://github.com/daileyo/liatrio-messag-api/actions/workflows/build.yml/badge.svg)
![Unit Tests](https://github.com/daileyo/liatrio-messag-api/actions/workflows/unit-tests.yml/badge.svg)
[![codecov](https://codecov.io/gh/daileyo/liatrio-message-api/branch/development/graph/badge.svg?token=62B00DRSAZ)](https://codecov.io/gh/daileyo/liatrio-message-api)
[![Known Vulnerabilities](https://snyk.io/test/github/daileyo/liatrio-message-api/badge.svg)](https://snyk.io/test/github/daileyo/liatrio-message-api)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
<br />
<br />
[![Website](https://img.shields.io/website?down_color=orange&down_message=inactive&label=API%3A%20Development&logo=appveyor&up_color=blue&up_message=online&url=http%3A%2F%2F20.22.99.252)](http://20.22.99.252)
<br />
[![Website](https://img.shields.io/website?down_color=orange&down_message=inactive&label=API%3A%20%20%20%20%20Production&logo=appveyor&up_color=blue&up_message=online&url=http%3A%2F%2Fa423b46ed243042dcb5935d52996d57c-361157068.us-west-1.elb.amazonaws.com)](http://a423b46ed243042dcb5935d52996d57c-361157068.us-west-1.elb.amazonaws.com/)
<br />
[![Website](https://img.shields.io/website?down_color=orange&down_message=inactive&label=API%3A%20%20%20%20%20%20Prototype&logo=appveyor&up_color=blue&up_message=online&url=http%3A%2F%2F34.70.61.167/)](http://34.70.61.167/)


# liatrio-message-api

## Description
Messaging API for DevOps assessment and discussion.  This application exposes an API endpoing that will return a json string with
- a static message of "*Automate all things!*"
- a timestamp consitent with the time of the request.

## Dependencies

The following is a general breadkown of the dependencies for working with this project.

|Application Development & Testing|Workflow Development & Testing|Infrastructure Deployment & Testing|
--- | --- | --- |
|Node.js<br/>Docker (optional but recommended)|Node.js<br/>Docker<br/>Act<br/>Azure CLI (az)<br/>AWS CLI (aws)<br/>GCP CLI (gcloud)|Terraform<br/>Docker|

This documentation assumes that the depencies listed will be installed prior to doing the specified type of development or testing.

## How to Setup Locally

1.  Fork Repository
2.  Clone respitory locally
```
git clone git@github.com:daileyo/liatrio-message-api.git
```
3.  Run npm i

### Workflow Scripts

The workflow scripts are GitHub Action files for automating the following.  All actions can be executed in two ways:
-   In Repository on GitHub
-   Locally using Act, from GitHub

The table below gives the general purpose and dependencies of each action.

|GitHub Action File|Description|Blocking/None Blocking|Secret Variables|
--- | --- | ---| ---|
|build.yml|Build Smoke test|None Blocking|*none*|
|unit-tests.yml|Executes project unit tests, and generates report|Blocking|*none*|
|njscan.yml|Executes Node.js coding pattern scan|None Blocking|*none*|
|bp-docker.yml|Builds and publishes image to Docker Hub|None Blocking|DOCKERHUB_USERNAME<br/>DOCKERHUB_AT<br/>DOCKERHUB_REPOSITORY|
|bpd-azure.yml|Builds, publishes, and deploys project to Azure|None Blocking|AZURE_ACR_CREDS<br/>AZURE_ACR_PASSWORD<br/>AZURE_CLIENT_ID<br/>AZURE_CREDENTIALS<br/>AZURE_SUBSCRIPTION_ID<br/>AZURE_TENANT_ID|
|bpd-aws.yml|Builds, bublishes, and deploys project to AWS|None Blocking|AWS_ACCESS_KEY_ID<br/>AWS_KUBE_CONFIG_DATA_STAGING<br/>AWS_SECRET_ACCESS_KEY|
|d-gcp.yml|Deploys project to GCP|None Blocking|GCP_PROJECT<br/>GCP_CREDENTIALS|

#### Blocking vs. None Blocking
All workflow will block if the job itself fails to run.  However blocking vs. none blocking referes to whether there is a blocking step as part of the workflow.  A blocking step will prevent a push or merge even whent the workflow successfully runs.

#### Running and Testing Locally

The action files can be tested locally as follows:
1.  Create a secrets folder in the workspace (*.ignore file has been configured to ignore a secrets folder and all files within it.*)
2.  Setup secrets.yml file with the appropriate dependency variables from the ablove list
Example secrets.yml file for running d-gcp.yml:
```
secrets:
    GCP_PROJECT: <project id information>
    GCP_CREDENTIALS:  <credentials needed for GCP>
```
3.  Run act and reference the secrets file
```
act --workflows ./.github/workflows/d-gcp.yml --secret-file secrets/secrets.yml
```


### Terraform Scripts

The Terraform scripts are for deploying required infrastucture to the appropriate cloud vendor.

The table gelow gives the genral purpose and dependencies of each file.

|Terraform File|Description|Dependencies|
--- | --- | --- |
|gcp.tf|Deployment configuration for GCP|variables.tf|
|variables.tf|Variables file for storing variables needed in other terraform scripts|*none*|




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
