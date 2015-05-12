# antiSocialite v0.0.1

antiSocialite allows you to schedule SMS communications with your closest contacts.

## Table of Contents

1. [Usage](#usage)
1. [Team](#team)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

As of v0.0.1, the product is composed of two UIs—the web app and the mobile app (Android). The web app is used to view and add contacts, as well as to view and schedule messages. The mobile app is used to retrieve scheduled messages for the day and to send the messages.

## Team

  - __Product Owner__: Melanie Gin
  - __Scrum Master__: Kevin Huang
  - __Development Team Members__: Melanie Gin, Mike Harris, Kevin Huang, John Yeglinski

## Requirements

- Node 0.12.0
- MongoDB 2.6.9+

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Build

From within the root directory, compile all the necessary files using Grunt:

```sh
grunt
```

To have Grunt automatically watch and re-compile files upon change, use:

```sh
grunt watch
```

### Run

From within the root directory, launch the MongoDB daemon and the server:

```sh
mongod (or sudo mongod)
node server.js
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### Roadmap

View the project roadmap [here](https://github.com/courageous-trapeze/courageous-trapeze/issues)

## Deployment

Make sure there is an environment variable for `DATABASE_URL` on the host that specifies the URL of your MongoDB instance.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
