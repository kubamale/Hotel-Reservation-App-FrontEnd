import { AmenitiesModel } from "./amenities";
import { RatingsModel } from "./ratings";

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
    ratings: RatingsModel[];
}