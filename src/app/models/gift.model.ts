import { Donor } from "./donor.model";

export class Gift{
    id:number=0
    name:string="";
    donor:Donor=new Donor();
    cost!:number;
    description!:string;
    image!:string;
    tickets:number[]=[];
}