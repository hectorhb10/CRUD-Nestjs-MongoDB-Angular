import { Document } from "mongoose";

export interface Product extends Document{
    readonly name: String;
    readonly gender: String;
    readonly description: String;
    readonly seasons: Number;
    readonly episodes: Number;
    readonly imageURL: String;
}