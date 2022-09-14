// function movie(movieName,Hero,Status){
//     this.movieName=movieName;
//     this.Hero=Hero;
// //     this.Status=Status;
// //     this.get=function(){
// //         console.log('in this movie hero is '+" " +this.Hero)
// //     }
// //     this.mahi=function(){
// //         console.log(' u rmovie name is '+ " " +this.movieName)
// //     }

// // }
// // let user1=new movie('RRR','ntr ram charan','Block Buster');
// // let user2 =new movie('svp','Mahesh','hit');
// // // console.log(user1,user2);
// // // user2["mobile"]=45657687675643;
// // // console.log(user2)
// // user2.mahi ()



// function stateCapitals(state, capital,fplace){
//     this.state=state;
//     this.capital=capital;
//     this.fplace=fplace
// }
// let names=new stateCapitals('telangana','Hyderabad','hyderabad');
// let names2=new stateCapitals('Jammu',"khashmir",'ladhak');
// let names3=new stateCapitals('karnataka','bangaloor','bangaaloor');
// // console.log(names);
// // console.log(names.capital);
// // console.log(names2);
// // console.log(names['state'])
// // console.log(names3);
// for (key in names3){
//     console.log(key+ ":" +names[key])
// }


function parents(fatherName,MotherName, Spouse,Sister,Brother){
    this.fatherName=fatherName;
    this.MotherName=MotherName;
    this.Spouse=Spouse;
    this.Sister=Sister;
    this.Brother=Brother;

}
parents.prototype.members=22;
let family=new parents('John','nancy','victoriya','philians','naruchi');
let family1=new parents('Satyam','Anupma','nayanshhi','yudevi','chanti');
let family2=new parents('Devanse','cristina','samantha','nagma','nagaraj');

//key value pairs
// for (key in family){
//     console.log(key+":" +family2[key]);
// }
console.log('my father name is '+family['fatherName'] +  "     "+'my motherName is '+family['MotherName'])
console.log(family['members']);