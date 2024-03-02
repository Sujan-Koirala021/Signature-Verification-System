const path = require('path');
const { PythonShell } = require('python-shell');
const fs = require('fs');

const currentDirectory = process.cwd();

exports.verifyUsingSignature = async (req, res, next) => {
    let options = {
        scriptPath: path.join(currentDirectory, '..', 'Signature-verification'),
        pythonOptions: ['-u'], // get print results in real-time
    };

    // Execute the Python script
    await PythonShell.run('verify.py', options).then(messages => {
        // results is an array consisting of messages collected during execution
        console.log('results: %j', messages[messages.length - 1]);

        // Define the folder paths
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

        return res.send(messages[messages.length - 1]);
    }).catch(err => {
        console.error('Error running Python script:', err);
        return res.status(500).send('Error running Python script');
    });
};
