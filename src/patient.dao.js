import patientSchema from "./patient.model.js";
import connection from "./config/db.js";

patientSchema.statics = {
    get(query) {
        return this.find(query);
    },
    create(data) {
        const patientData = new this(data);
        return patientData.save();
    },
    update(id, dataUpdate) {
        return this.findByIdAndUpdate(id, { $set: dataUpdate });
    },
    delete(id) {
        return this.findByIdAndDelete(id);
    }
};

const patientModel = connection.model("Patient", patientSchema, "patient");

export default patientModel;