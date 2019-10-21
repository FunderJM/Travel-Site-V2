export class flights {
    flightId
    departLoc
    arrivalLoc
    departTime
    arrivalTime
    travelTime
    layovers
    price

    constructor(flightId=0, departLoc='', arrivalLoc='', departTime='', arrivalTime='', travelTime=0, layovers=0, price=''){
        this.flightId = flightId;
        this.departLoc = departLoc;
        this.arrivalLoc = arrivalLoc;
        this.departTime = departTime;
        this.arrivalTime = arrivalTime;
        this.travelTime = travelTime;
        this.layovers = layovers;
        this.price = price;
    }
}