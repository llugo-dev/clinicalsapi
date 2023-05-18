import clinicalsSchema from "./clinicals.model.js";
import connection from "./config/db.js";

clinicalsSchema.statics = {
    get(query) {
        return this.find(query);
    },
    create(data) {
        const clinicalsData = new this(data);
        return clinicalsData.save();
    },
    update(id, dataUpdate) {
        return this.findByIdAndUpdate(id, { $set: dataUpdate });
    },
    delete(id) {
        return this.findByIdAndDelete(id);
    }
};

const clinicalsModel = connection.model("Clinicals", clinicalsSchema, "clinicals");

export default clinicalsModel;