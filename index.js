// Code your solutions in this file

function writeCards(friends, event){
    
    let friends1 = [];

    for(let i = 0; i < friends.length; i++){
        friends1.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`)
    }
    return friends1;
}

function countDown(i){
    
    while (i >= 0){
        console.log(i);
        i--;
    }
}