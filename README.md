# [Syvertsen.dev](https://syvertsen.dev/)

[![Vercel status](https://img.shields.io/github/deployments/andesyv/syvertsen.dev/production?label=vercel&logo=vercel&logoColor=white)](https://syvertsen-dev.vercel.app/_logs)

This is my personal portfolio webpage, which is made using Next.js based on the [Gatsby Simplefolio](https://github.com/cobidev/gatsby-simplefolio) template made by [Jacobo Martínez](https://github.com/cobidev). The page is hosted and deployed by Vercel.

## Deployment

If you want to set up a working environment in order to test features of the page or something else, you'll do that as follows:

Clone the repository locally:

```
$ git clone https://github.com/andesyv/syvertsen.dev
```

Navigate to folder and use npm to install required packages:

```
$ npm install --force
```
(`--force` is required as some packages used are not up to date (react-reveal))

Finally you can run the development environment by running the *develop* script (or just use `next dev` directly):
```
$ npm run dev
```
You can also optionally build the page using the *build* script (or `next build`):
```
$ npm run build
```
## Licence

The template by [Jacobo Martínez](https://github.com/cobidev) is modified and redistributed under the licence in [LICENCE.md](LICENCE.md). All unchanged parts of the template is licenced under [gatsby-simplefolio-LICENCE.md](gatsby-simplefolio-LICENCE.md).
