/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
function sortHorses(a , b ) {
    return a-b;
}

const n = readline();

if (n < 2) {
    
    return;
    
} else {
    
    let list = [];
    
    for (let i = 0; i < n; i++) {
        list.push(parseInt(readline()));
    }
    
    list.sort(sortHorses);
    
    let smallDiff = list[1] - list[0];
    
    for(var i = 2 ; i < n; i++ ) {
        
            let newDiff =  list[i] - list[ i - 1];
            
            if( newDiff < smallDiff ) {
                
                smallDiff  = newDiff;
                
            } 
    }
    
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    
    console.log(smallDiff);

}
