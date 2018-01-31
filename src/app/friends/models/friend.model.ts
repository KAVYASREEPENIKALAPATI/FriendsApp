export class Friend{
    Name:string;
    Age:number;
    Phone:string;
    Address:string="";
    HasFB:boolean=false;
    constructor(name,age,phone,adrs?,fb?){
        this.Name=name;
        this.Age=age;
        this.Phone=phone;
        if(adrs){
            this.Address=adrs;
        }
        if(fb!=null){
            this.HasFB=fb;
        }
    }
}