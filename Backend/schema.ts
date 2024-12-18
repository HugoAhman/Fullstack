import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    experience: { type: String, required: true }
});

export const jobs = mongoose.model('Jobs', jobsSchema);
