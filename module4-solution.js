var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for ( var i = 0 ;i < names.length ; i++ ){
    var str = names[i];
    var s = str.indexOf("J");
    let sam;
    
   
    if ( s == 0) {
        sam = "Goodbye "
       
    } else {
       sam = "Hello "
    }
    var g = sam + names[i];
    console.log(g);
    
   document.getElementById("pr").innerHTML += g + "<br>";
  
}
