function factorial(n){
    //ie. 4x3x2x1
    if (n <= 1) {
        return 1;
    }
    else{
        for(let x = n-1; x>1; x--)
        {
            n = n*x;        
        }
    }
    return n; 
}
