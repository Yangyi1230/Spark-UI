# Spark-UI
This repository is the web app for the Spark project in Big Data course, which display our analysis computed by Spark.

## Prerequisites

- We use meteor to build our app, which integrate both front-end and back-end. 

- [Check here to see how to install meteor](https://www.meteor.com/install)

- npm

- Recommend to use Chrome with the latest version

## How To Run

1. enter into the root file of the project

2. type command: `meteor npm install`

3. start up meteor:

	If your MongoDB is running on localhost with no password:

		npm run-script start

	If your MongoDB enabled authentication

		MONGO_URL='mongodb://{username}:{passwd}@{ip}:{port}/{dbname}' meteor

		

4. open the browser, see running app at http://localhost:3000/



