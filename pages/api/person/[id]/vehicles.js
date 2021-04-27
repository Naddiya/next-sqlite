export default function getAllVehiclesByPersonId(req, res) {
    res.json({byId: req.query.id, message: 'getAllVehiclesByPersonId'});
}