let ouradata;
console.log('hi')
fetch("/data").then(res=>res.json()).then(gotdata)

function gotdata(data){
    console.log("GOT DATA", data)
    ouradata = data;
}
function setup(){

}

function draw(){
    if(ouradata){




    }
}