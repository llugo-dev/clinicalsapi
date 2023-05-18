import patientController from "./patient.controller.js";
import clinicalsControllers from "./clinicals.controller.js";

const routes = function (router) { 
    router.get("/patients", patientController.getAll);
    router.post("/patients", patientController.create);
    router.put("/patients/:id", patientController.update);
    router.delete("/patients/:id", patientController.deletePatient);

    router.get("/clinicals", clinicalsControllers.getAll);
    router.get("/clinicals/:patientId", clinicalsControllers.get);
    router.post("/clinicals", clinicalsControllers.create);
};

export default routes;
