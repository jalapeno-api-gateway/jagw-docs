# Jalapeño API Gateway Docs

This is the source code of the [Jalapeño API Gateway Docs Website](https://jalapeno-api-gateway.github.io/jagw-docs/).

This website is built using [Docusaurus 2](https://docusaurus.io/).

### Installation

```
$ yarn
```

Run this command to install all node modules.

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

This command builds the website and pushes it to the `gh-pages` branch for deployment.
For more information see the official [Docusaurus documentation](https://docusaurus.io/docs/deployment).
