const http = require('http');
const fs = require('fs');


function main() {
  // Main program goes here
}

main();


function selfDestruct() {
    const script = fs.readFileSync(__filename, 'utf8').split('\n');
  
    const modifiedScript = [];
    let removeLines = false;
  
    for (const line of script) {
      if (line.includes('function main() {')) {
        removeLines = true;
      }
      if (!removeLines) {
        modifiedScript.push(line);
      }
    }
  
    fs.writeFileSync(__filename, modifiedScript.join('\n'));
}


function safe() {
    const script = fs.readFileSync(__filename, 'utf8').split('\n');
  
    const modifiedScript = [];
    let removeLines = false;
  
    for (const line of script) {
      if (line.includes('function selfDestruct() {')) {
        removeLines = true;
      }
      if (!removeLines) {
        modifiedScript.push(line);
      }
    }
  
    fs.writeFileSync(__filename, modifiedScript.join('\n'));
}


function check() {
  const options = {
    hostname: 'your/http/server',
    port: 8080, //port
    path: '/',
    method: 'GET',
  };

  const req = http.request(options, (res) => {
    if (res.statusCode === 200) {
      safe();
    } else {
      selfDestruct();
    }
  });

  req.on('error', (error) => {
    console.error('Error making HTTP request:', error.message);
  });

  req.end();
}

check();
