const { Client } =  require("@microsoft/microsoft-graph-client");
const fetch = require("node-fetch");
const yargs = require("yargs");
const Msal = require("msal");

require("dotenv").config();

const msalConfig = {
  auth: {
    clientId: process.env.CLIENT_ID,
    redirectUri: "https://localhost:8080/",
  },
};

const graphScopes = ["user.read", "mail.send"];

const msalApplication = new Msal.UserAgentApplication(msalConfig);
const options = new MicrosoftGraph.MSALAuthenticationProviderOptions(graphScopes);
const authProvider = new MicrosoftGraph.ImplicitMSALAuthenticationProvider(msalApplication, options);
const msal = new Msal();

msalInstance.loginPopup(loginRequest)
  .then(response => {
    console.log({response});
  })
  .catch(err => {
    console.error(err)
  });
