function main() {
    let r = readLine();
    const PI = Math.PI;
    var area = PI*r*r;
    var perimeter = 2*PI*r;
    
    // Print the area of the circle:
        console.log(area);

    // Print the perimeter of the circle:
        console.log(perimeter);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
