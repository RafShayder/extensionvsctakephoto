import * as vscode from 'vscode';
import puppeteer from 'puppeteer';

async function divToImage(htmlContent: string, divId: string, imageName: string) {
    // Obtén la carpeta raíz del primer espacio de trabajo
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
        vscode.window.showErrorMessage('No workspace folder open.');
        return;
    }
    const projectRoot = workspaceFolders[0].uri.fsPath;
    const imagePath = `${projectRoot}/${imageName}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
    await page.setContent(htmlContent);
    const elementHandle = await page.$(`#${divId}`);
    let imageBuffer: Buffer;
    if (elementHandle) {
        imageBuffer = await elementHandle.screenshot({ path: imagePath, omitBackground: true });
    } else {
        imageBuffer = await page.screenshot({ path: imagePath, omitBackground: true });

    }
    console.log("funciona img")
    console.log(imagePath)
    //clipboard.writeSync("shay funciona")
    await browser.close();
}

export { divToImage };