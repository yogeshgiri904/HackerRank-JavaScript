function vowelsAndConsonants(s){
    var x = s.split("");
    for(var data in x)
    {
        if(x[data]=="a"||x[data]=="e"||x[data]=="i"||x[data]=="o"||x[data]=="u")
        {
            console.log(x[data])
        }
    }
    for(var data of x)
    {
        if(data!="a"&&data!="e"&&data!="i"&&data!="o"&&data!="u")
        {
            console.log(data)
        }
    }
}