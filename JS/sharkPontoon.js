/*   https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

*/


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let sharkTime = sharkDistance / sharkSpeed;
    const myTime = pontoonDistance/ youSpeed;

    if (dolphin) {
        sharkTime *= 2;
    }

    if (myTime< sharkTime) {
    return 'Alive!';
    } else {
        return 'Shark Bait!'
    }

}



    console.log(shark(12, 50, 4, 8, true), "Alive!");
    console.log(shark(7, 55, 4, 16, true), "Alive!");
    console.log(shark(24, 0, 4, 8, true), "Shark Bait!");



/* Pavizdys kaip uzrasyti trumpiau:

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
   return pontoonDistance/ youSpeed < sharkDistance / sharkSpeed *(dolphin ? 2 : 1) ? 'Alive!' : 'Shark Bait!'
    
*/



    /* trecias spendinio pavizdys
    
    function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}
    */
    