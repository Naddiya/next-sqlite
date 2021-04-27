export default function getVehicleById(req, res) {
    res.json({byId: req.query.id, message: 'getVehicleById'});
}