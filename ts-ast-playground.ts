import * as fs from 'fs';
import * as ts from 'typescript';

const path = './src/app/file-to-test-with-ast.ts'
const sourceCode = fs.readFileSync(path, 'utf-8');
const sourceFile = ts.createSourceFile(path, sourceCode, ts.ScriptTarget.Latest, true);

class ASTHelper {
    visitAllNodes(sourceFile: ts.SourceFile, callback: (node: ts.Node) => void) {
        this.visit(sourceFile, callback);
    }

    private visit(node: ts.Node, callback: (node: ts.Node) => void): void {
        callback(node);
        node.forEachChild((node: ts.Node) => {
            this.visit(node, callback);
        });
    }
}

const astHelper = new ASTHelper;
astHelper.visitAllNodes(sourceFile, logClassName);
astHelper.visitAllNodes(sourceFile, logMethodNames);
astHelper.visitAllNodes(sourceFile, logMethodParameters);

function logClassName(node: ts.Node) {
    if (ts.isIdentifier(node) && ts.isClassDeclaration(node.parent)) {
        console.log(node.getText());
        // console.log(node.getSourceFile().fileName); // path to file
    }
}

function logMethodNames(node: ts.Node) {
    if (ts.isIdentifier(node) && ts.isMethodDeclaration(node.parent)) {
        console.log(node.getText());
    }
}

function logMethodParameters(node: ts.Node) {
    if (ts.isParameter(node) && ts.isMethodDeclaration(node.parent)) {
        console.log(node.getText());
    }
}
