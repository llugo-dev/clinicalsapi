import dao from "./patient.dao.js";

function getAll(req, res) { 
    dao.get({})
        .then(patients => {
            res.send(patients);
        })
        .catch(console.log);
};

function create(req, res) { 
    const patient = req.body;
    dao.create(patient)
        .then(result => {
            res.send(result);
        })
        .catch(console.log);
};

function update(req, res) { 
    
    const patient = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age
    };

    dao.update(req.params.id, patient)
        .then(result => {
            res.send(result);
        })
        .catch(console.log);
};

function deletePatient(req, res) { 
    dao.delete(req.params.id)
        .then(result => {
            res.send(result);
        })
        .catch(console.log);
};

export default {
    getAll,
    create,
    update,
    deletePatient
};

