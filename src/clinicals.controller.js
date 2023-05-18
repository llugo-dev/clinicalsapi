import dao from "./clinicals.dao.js";
import mongodb from "mongodb";


function getAll(req, res) {
    dao.get({})
        .then(clinicals => {
            res.send(clinicals);
        })
        .catch(console.log);
}

function get(req, res) { 
    dao.get({patient: new mongodb.ObjectId(req.params.patientId)})
        .then(clinicals => {
            res.send(clinicals);
        })
        .catch(console.log);
};

function create(req, res) { 
    dao.create(req.body)
        .then(result => {
            res.send(result);
        })
        .catch(console.log);
};

export default { getAll, get, create };


