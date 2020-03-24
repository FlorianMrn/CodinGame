**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse

const temps = readline();

if (temps) {
    
    let tempsArr = temps.split(' ');
    
    let min = tempsArr[0];
    
    for (let i = 1; i < tempsArr.length; i++) {
        
        if ( Math.abs(min) > Math.abs(tempsArr[i]) ) {
                
                min = tempsArr[i];    
                
        } else if(Math.abs(min) == Math.abs(tempsArr[i]) && min < tempsArr[i]){
            
            min = tempsArr[i];
            }

    }
    
    console.log(min);

} else {
    
console.log(0);

}
