export class Mobile {
    mobileId :number;
    mobilename:string;
    mobileCost:number;

    printMobile() {
        console.log(this.mobileCost);
        console.log(this.mobileId);
        console.log(this.mobilename);
    }
}