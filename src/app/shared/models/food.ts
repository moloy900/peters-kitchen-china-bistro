export class Foods{
    [x: string]: any;
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean=false;
    star:number=0;
    tag?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
}