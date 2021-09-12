class uberprice{

    #priceperKMcar=50;
    #priceperKMAuto=30;

    pricecalculation(vehicle,totalkm)
    { var charge;
        if(vehicle.toLowerCase() ==="auto")
        {
            charge = this.#priceperKMAuto*totalkm;
        } else if(vehicle.toLowerCase() ==="car")
        {
            charge = this.#priceperKMcar*totalkm;
        } else{
            charge="Enter valid details";
        }
        return charge ;
    }
}

var price= new uberprice();
console.log(price.pricecalculation("CAR",50));