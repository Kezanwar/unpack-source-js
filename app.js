import { exec } from "child_process";

// drop a file into this directory you want to unpack then change the file name here and run the app to execute the unpacking code.

const FILE_NAME = "example.chunk.js.map";

exec(
  `node ./node_modules/source-map-unpacker/unmap.js \
  -p ${FILE_NAME} -o code`,
  (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err);
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  }
);
