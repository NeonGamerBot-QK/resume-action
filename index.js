const fs = require("fs")
const path = require("path")
const core = require('@actions/core');
const github = require('@actions/github');
const puppeteer = require('puppeteer');
;(async () => {
  try {
    // `who-to-greet` input defined in action metadata file
    const filePath = core.getInput('output');
    const ghUsername = core.getInput('github_user_name');
    console.log(`Writing to ${filePath}!`);
    // const time = (new Date()).toTimeString();
    // core.setOutput("time", time);
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto('https://resume.github.io/?'+ghUsername);
    // Get the JSON webhook payload for the event that triggered the workflow
    fs.mkdirSync("dist")
    await page.pdf({ path: path.join( "dist", filePath )})

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
    await browser.close();
  } catch (error) {
    core.setFailed(error.message);
  }
  
})()
