export default function getPersonById(req, res) {
    res.json({byId: req.query.id, message: 'getPersonById'});
}