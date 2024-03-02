const os = require('os');
const fs = require('fs');
const path = require('path');
const { PythonShell } = require('python-shell');

const currentDirectory = process.cwd();

exports.verifyUsingDocument = async (req, res, next) => {
    let options1 = {
        scriptPath: path.join(currentDirectory, '..', 'Signature-extraction', 'yolov8')
    };
    let options2 = {
        scriptPath: path.join(currentDirectory, '..', 'Signature-verification'),
        pythonOptions: ['-u'] // get print results in real-time
    };

    try {
        // Run the first Python script
        await PythonShell.run("predict.py", options1, (err, predictRes) => {
            if (err) console.log(err);
            if (predictRes) console.log(predictRes);
        });

        // Run the second Python script
        await PythonShell.run('verify.py', options2).then(verifyRes => {
            // Log the messages collected during execution
            console.log('results: %j', verifyRes[verifyRes.length - 1]);

            // Define folder paths for file deletion
            let folderPathGenuine = 'C:/Users/Dell/Desktop/Minor-Project/Signature-Verification-System/server/uploads/genuine';
            let folderPathVerification = 'C:/Users/Dell/Desktop/Minor-Project/Signature-Verification-System/server/uploads/verification';

            // Read files in genuine folder and delete them
            fs.readdir(folderPathGenuine, (err, files) => {
                if (err) {
                    console.error('Error reading genuine directory:', err);
                    return res.status(500).send('Error reading genuine directory');
                }

                files.forEach(file => {
                    const filePath = path.join(folderPathGenuine, file);
                    fs.unlink(filePath, err => {
                        if (err) {
                            console.error('Error deleting file:', err);
                        }
                    });
                });
            });

            // Read files in verification folder and delete them
            fs.readdir(folderPathVerification, (err, files) => {
                if (err) {
                    console.error('Error reading verification directory:', err);
                    return res.status(500).send('Error reading verification directory');
                }

                files.forEach(file => {
                    const filePath = path.join(folderPathVerification, file);
                    fs.unlink(filePath, err => {
                        if (err) {
                            console.error('Error deleting file:', err);
                        }
                    });
                });
            });

            return res.send(verifyRes[verifyRes.length - 1]);
        });
    } catch (error) {
        console.error("Error occurred:", error);
        return res.status(500).send("Error occurred while processing the document.");
    }
};
