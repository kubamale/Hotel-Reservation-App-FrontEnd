import { AmenitiesModel } from "./amenities";

export interface HotelModel{
    id: number;
    country:string;
    city:string;
    postalCode:string;
    street:string;
    streetNumber:string;
    phoneNumber:string;
    email:string;
    name:string;
    description:string;
    picURL:string[];
    amenities:AmenitiesModel[];
    userId: number;
}