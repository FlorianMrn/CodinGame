/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

var tX = initialTx;
var tY = initialTy;
var dir = "";
    
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    if (tX > lightX && tY > lightY) {
        
        tX --;
        tY --;
        dir = 'NW';
    
    } else if (tX > lightX && tY < lightY) {
        
        tX --;
        tY ++;
        dir = 'SW';
        
    } else if (tX < lightX && tY < lightY) {
        
        tX ++;
        tY ++;
        dir = 'SE';
        
        
    } else if (tX < lightX && tY > lightY) {
    
        tX ++;
        tY --;
        dir = 'NE';
        
    } else if (tX > lightX ) {
        tX --;
        dir ='W';
    
    } else if (tX < lightX ) {
        tX ++;
        dir ='E';
    
    } else if (tY > lightY) {
        tY --;
        dir ='N';
    
    } else if (tY < lightY) {
        tY ++;
        dir ='S';
    
    } 
    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(dir);
}
