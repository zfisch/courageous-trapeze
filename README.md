# antiSocialite

antiSocialite allows you to schedule SMS communications with your closest contacts.

## Team

  - __Product Owner__: Melanie Gin
  - __Scrum Master__: Kevin Huang
  - __Development Team Members__: Melanie Gin, Mike Harris, Kevin Huang, John Yeglinski

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Roadmap](#roadmap)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

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

From within the root directory:

```sh
grunt
grunt watch
```

### Run

From within the root directory:

```sh
mongod (or sudo mongod)
node index.js
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### Roadmap

View the project roadmap [here](https://github.com/courageous-trapeze/courageous-trapeze/issues)

## Deployment

Make sure there is an environment variable for `DATABASE_URL` on the host that specifies the URL of your MongoDB instance.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
