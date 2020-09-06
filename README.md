# TypeScript AST Scaffolding

A simple project to start use TypeScript AST

## Installation & Execution
1. Clone the repo `git clone git@github.com:ofirrifo/typescript-ast-scaffolding.git`
2. Install dependencies `npm i`
3. Execute the example `npm run dev`

## Project tree

```
.
|-- README.md
|-- package-lock.json
|-- package.json                          # Our dependencies & dev script
|-- src
|   `-- app
|       `-- file-to-test-with-ast.ts      # A TS file for testing
`-- ts-ast-playground.ts                  # Our TS AST Code

```

When we execute the `npm run dev` we are executing this file `ts-ast-playground.ts`
which contain the TS AST code in order to read this file `./src/app/file-to-test-with-ast.ts` as AST



## Online TypeScript AST Viewer
- [TypeScript AST Viewer](https://ts-ast-viewer.com/#code/KYDwDg9gTgLgBAYwDYEMDOa4EE4G8BQ+cxiEAdmjFAK4IzQAUAlHgL6ElxooBuwDZFAFtgALi5UAlmQDmLAp04JyaCEmAA6JBBkDhwJgG4iJdu0LKK8FHAC8cMsADu2Yyg3c+DAOQxglbyMgA)
- [AST Explorer](https://astexplorer.net/)
- [TSQuery Playground](https://tsquery-playground.firebaseapp.com/)


## Inspired By
- [Uri Shaked, Diving into the Internals of TypeScript: How I Built TypeWiz](https://medium.com/@urish/diving-into-the-internals-of-typescript-how-i-built-typewiz-d273bbef3565)
- [Experimenting With ts-node And Using TypeScript In Node.js On The Server](https://www.bennadel.com/blog/3268-experimenting-with-ts-node-and-using-typescript-in-node-js-on-the-server.htm)
