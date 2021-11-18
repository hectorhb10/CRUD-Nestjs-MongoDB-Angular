import { Schema } from 'mongoose';

export const producSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    seasons: { type: Number, required: true },
    episodes: { type: Number, required: true },
    imageURL: { type: String, require: true }
});