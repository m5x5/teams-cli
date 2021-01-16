/**

POST /common/oauth2/v2.0/token HTTP/1.1
Host: https://login.microsoftonline.com
Content-Type: application/x-www-form-urlencoded

client_id=df6930a4-6bdd-4896-b0c0-cc873532692e
&scope=EduRoster.Read.All
&code=? // TODO: Fill with information
&redirect_uri=http%3A%2F%2Flocalhost%2Fmyapp%2F
&grant_type=authorization_code
&client_secret=JqQX2PNo9bpM0uEihUPzyrh

**/



const fetch = require("node-fetch");
const yargs = require("yargs");

console.log({ argv: yargs.argv })

fetch(yargs.argv._).then((res) => {
  console.log(res.status);
})
