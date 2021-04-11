function reverseString(s) {
    try{
        const str = s.split("").reverse().join("");
                    console.log(str);
    }
    catch{
        console.log("s.split is not a function");
        console.log(s);
    } 
}
