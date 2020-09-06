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
|-- package.json                         # Our dependencies & dev script
|-- src
|   `-- app
|       `-- file-to-test-with-ast.ts      # A TS file for testing
`-- ts-ast-playground.ts                  # Our TS AST Code

```

When we execute the `npm run dev` we are executing this file `ts-ast-playground.ts`
which contain the TS AST code in order to read this file `./src/app/file-to-test-with-ast.ts` as AST




