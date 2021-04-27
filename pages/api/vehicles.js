
export default function getAllVehicles(req, res) {
    if(req.method !== 'GET') {
        res.status(500).json({message: 'sorry only GET requests accepted'})
    }
    res.json({hello: 'world', method: req.method});
};