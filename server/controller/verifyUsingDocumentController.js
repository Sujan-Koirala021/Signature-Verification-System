const os = require('os');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/verification' });
const path = require('path');
const { PythonShell } = require('python-shell');

const currentDirectory = process.cwd();

exports.verifyUsingDocument = async (req, res, next) => {
    let options = {
        scriptPath: path.join(currentDirectory, '..', 'Signature-extraction', 'yolov8')
    };
    // python detect.py --source image7.jpg --weights 'best.pt' --save-txt --save-crop --hide-labels --hide-conf --classes 1 --line-thickness 2
    await PythonShell.run("predict.py", options, (err, res) => {
        if (err) console.log(err)
        if (res) console.log(res)
    });
    
    await res.send("Finished Processing");
    // try {
    //     const results = await PythonShell.run("predict.py", options);
    //     console.log("Python script executed successfully.");
    //     console.log("Python script output:", results[0]);

    //     console.log(req.body);
    //     console.log("Extract Signature");
    //     res.send("Hello World");
    // } catch (err) {
    //     console.error("Error occurred while running predict.py:", err);
    //     return res.status(500).send("Error occurred while processing the document.");
    // }
};
