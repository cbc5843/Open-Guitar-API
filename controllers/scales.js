//Get all a scales
exports.getScales = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all scales'});
}
//Get single scale
exports.getScale = (req, res, next) => {
    res.status(200).json({ success: true, msg: `get scale ${req.params.id}`});
}
//Create scale
exports.createScale = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new scale'});
}
//Update scale
exports.updateScale = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update scale ${req.params.id}`});
}
//Delete scale
exports.deleteScale = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete scale ${req.params.id}`});
}