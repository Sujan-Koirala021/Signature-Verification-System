exports.extractSignature = async (req ,res ,next) => {
    // console.log(req.body);
    console.log(req.file);
    const imagePath = req.file.path;
    // console.log(req);
    console.log("Extract Signature")
    res.status(200).json({
        status: "success",
    })
};
