const {PythonShell} = require('python-shell')

exports.extractSignature = async (req ,res ,next) => {
    let options = {
        scriptPath: "C:\\Users\\Dell\\Desktop\\Minor-Project\\Signature-extraction\\yolov5",
        args: [
            "--weights",
            "best.pt",
            "--source",
            "image7.jpg",
            "--save-crop"
        ]
    };
    // python detect.py --source image7.jpg --weights 'best.pt' --save-txt --save-crop --hide-labels --hide-conf --classes 1 --line-thickness 2
    PythonShell.run("detect.py", options, (err, res) => {
        if (err) console.log(err)
        if (res) console.log(res)
    });
    // console.log(req.body);
    console.log(req.file);
    const imagePath = req.file.path;
    // console.log(req);
    console.log("Extract Signature")
    res.status(200).json({
        status: "success",
    })
};
