# Next.js 13 with Module Federation

Module Federation in Next.js depends on <a href="https://www.npmjs.com/package/@module-federation/nextjs-mf">@module-federation/nextjs-mf</a>

NOTE: There seems to be a problem with css-in-js sharing between federated modules. This is likely due to some internal module not being shared as a singleton. PR is welcome

## Getting Started

1. run `cd mfe-dpc-* && npm install` with npm 7 (yarn probably better) or install it directly in each folder/app
2. run `npm run dev` in each folder/app except for mfe-dpc-main
3. run `npm run dev` in mfe-dpc-main

## Context

We have three next.js applications

- `mfe-dpc-task` - port 8082
- `mfe-dpc-main` - port 8080
- ...

The applications utilize omnidirectional routing and pages or components are able to be federated between applications like a SPA

I am using hooks here to ensure multiple copies of react are not loaded into scope on server or client.

### Sharing

Next.js does not have an async boundary. Between the entrypoint and the shared code.
Read this for more context: https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5.md

In order for webpack to figure out who shares what, an async boundary is typically needed somewhere before the module is used.
Usually, we can work around async boundaries for things like `react` by specifying the following

https://medium.com/dev-genius/module-federation-advanced-api-inwebpack-5-0-0-beta-17-71cd4d42e534?source=friends_link&sk=70658eb0bf58dfcc5ce534cb1cd78b1f

```js
const config = {
  shared: {
    react: {
      eager: true,
      singleton: true,
    },
  },
};
```

However, in the case of Next.js - you need to use <a href="https://www.npmjs.com/package/@module-federation/nextjs-mf">@module-federation/nextjs-mf</a>

## Reference Points

I do have some VietNamese Version and hopefully these will be of use.
https://grizzly-handbell-7f1.notion.site/2-MFE-NextJS-13-2fbf2b6008cb4d3ea54caccc038bfecb?pvs=74