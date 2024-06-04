import { resaltarElementos } from './color.js';
import { divToImage } from './htmltophoto.mjs';
//oficial
import vscode from 'vscode';

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context: { subscriptions: vscode.Disposable[]; }) {
    let disposable = vscode.commands.registerCommand('phototakerv2.shay', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No hay editor de texto abierto
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        if (!text) {
            vscode.window.showInformationMessage('Por favor, selecciona algún código primero.');
            return;
        }

        const language = editor.document.languageId;

        const panel = vscode.window.createWebviewPanel(
            'codePreview',
            'Vista Previa del Código',
            vscode.ViewColumn.One,
            {}
        );
        const codeformated = getWebviewContent(text);
        panel.webview.html = codeformated;
        divToImage(codeformated,"code","output.png").then(() => {
            vscode.window.showInformationMessage('Se capturó imagen');
        })
        .catch((error) => {
            console.error('Error al capturar imagen', error);
        });    

        
        //generateImage(codeformated)

    });

    context.subscriptions.push(disposable);
}



function getWebviewContent(code:string) {
    return `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vista Previa del Código</title>
        
        <style>
            body {
                font-family: 'Courier New', Courier, monospace;
                background-color: Transparent;
                color: white;
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .code-container {
                background-color: #21252b;
                padding: 10px;
                border-radius: 14px;
                overflow: auto;
                max-width: 80%;
                max-height: 80%;
            }
            pre {
                white-space: pre-wrap;
                word-wrap: break-word;
                margin: 0;
            }
            .header {
                display: flex;
                justify-content: start;
                align-items: center;
                background-color: #21252b;
                padding: 10px;
                border-radius: 5px 5px 0 0;
                margin-bottom: 10px;
               
            }
            .header div {
                display: inline-block;
                height: 12px;
                width: 12px;
                border-radius: 50%;
                margin:2px;
            }
            .header .red {
                background-color: #ff5f56;
            }
            .header .yellow {
                background-color: #ffbd2e;
            }
            .header .green {
                background-color: #27c93f;
            }
            pre {
                white-space: pre-wrap;
                word-wrap: break-word;
                margin: 0;
                background-color: #21252b; /* Ensure pre background matches the container */
            }
            code {
                color: white; /* Set text color for code */
                background-color: #21252b; /* Set background color for code */
            }


        </style>
    </head>
    <body>
        <div class="code-container" id="code">
            <div class="header">
                <div class="red"></div>
                <div class="yellow"></div>
                <div class="green"></div>
            </div>
            <pre><code>${resaltarElementos(code)}</code></pre>
        </div>
    </body>

    </html>`;
}




function deactivate() { }

module.exports = {
    activate,
    deactivate
};
