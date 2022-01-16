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

    getPG(moviesarr)
{

   let ret= moviesarr.filter(movie1=>movie1.rating === 'PG');
       
 return ret;
}

    
}
const moviesar = [ { title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG' }, { title: 'Casino', studio: 'Eon', rating: 'PG'}, { title: 'Royale', studio: '20th Century fox  film', rating: 'AT' }, { title: 'CasiRoyale',studio: 'Quincy', rating: 'PG' }, { title: 'CasRoyale',studio: 'Quincy', rating: 'PG' } ];
const Casino = new movie("Casino Royale","Eon Productions","PG");

console.log(Casino.getPG(moviesar));
console.log(Casino);







