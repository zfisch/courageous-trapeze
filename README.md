# Pigeon v0.0.1

Pigeon allows you to schedule SMS communications with your clients and analyze the responses.

## Table of Contents

1. [Usage](#usage)
1. [Team](#team)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

The web app is used to view and add contacts, view and schedule messages, and view response data.

## Team

  - __Product Owner__: Charlie Hwang
  - __Scrum Master__: Zack Fischmann
  - __Development Team Members__: Brant Choate, Johnny Nguyen, Charlie Hwang, Zack Fischmann


###This fork is built on top off of a project called antiSocialite by:

  - __Product Owner__: Melanie Gin
  - __Scrum Master__: Kevin Huang
  - __Development Team Members__: Melanie Gin, Mike Harris, Kevin Huang, John Yeglinski

## Requirements

- Node 0.12.0
- MongoDB 2.6.9+

## Development

### Google Account

In order to enable the Google contacts import, a Google account, Google Contacts API key, and Google Client ID are required. Details on how to set up all these components can be found on the [Google Contacts](https://developers.google.com/google-apps/contacts/v3/) API page.

Once you have your own Google API key and Google Client ID, set them in the `Contacts` factory in `factories.js`.

### Installing Dependencies

From within the root directory:

```sh
npm install
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

View the project roadmap [here](https://github.com/isolated-ocelot/courageous-trapeze/issues)

## Deployment

Make sure there is an environment variable for `DATABASE_URL` on the host that specifies the URL of your MongoDB instance.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
