// Code your solutions in this file
function writeCards(peopleName, eventName) {
  const thankYou = []
  for (let i = 0; i < peopleName.length; i++) {
    thankYou.push(`Thank you, ${peopleName[i]}, for the wonderful ${eventName} gift!`);
    
  }

  return thankYou;
}

function countDown(count) {
 // the initialization moves OUTSIDE the body of the loop!
  while (count >= 0 ) {
    console.log(count--);
     // the iteration moves INSIDE the body of the loop!
  }
}