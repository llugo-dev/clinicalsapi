import mongoose from "mongoose";
import properties from "./properties.js";

const connection = mongoose.createConnection(properties.DB, {maxPoolSize: 10});

export default connection;