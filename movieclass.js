class movie{
    constructor(title,studio,rating){

        if(rating===''||rating===null|| rating===undefined){

            this.rating = 'PG';
        }else{
            this.rating = rating;
        }
        this.title = title;
        this.studio = studio;
    }
    
}

const Casino = new movie("Casino Royale","Eon Productions","PG");
console.log(Casino);

