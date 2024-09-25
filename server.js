const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));

let ouraData;

console.log("hi hi server started");
getDataFromOura();
app.get('/data', (req, res) => {

    res.json(ouraData);

});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));


function getDataFromOura(){

    // pretty dates
    let date1 = "2024-08-1"
    let date2 = "2024-08-5"

    // ugly dates (auto generated from pretty dates)
    let uglyDate1 = new Date(date1).toISOString()
    let uglyDate2 = new Date(date2).toISOString()
    let apiURL = 'https://api.ouraring.com/v2/usercollection/heartrate?start_datetime='+uglyDate1+'&end_datetime='+uglyDate2
    console.log("apiURL", apiURL)
    
    var myHeaders = new Headers(); 
    myHeaders.append('Authorization', 'Bearer X4I3VDIN5VQCRFXG537LL55HGDVON4VP'); 
    var requestOptions = { 
        method: 'GET', 
        headers: myHeaders, 
    }
    fetch(apiURL, requestOptions) 
        .then(response => response.text()) 
        .then(result => {
            // console.log(result)
            console.log("got data")
            ouraData = result;
        }) 
        .catch(error => console.log('error', error));
    
}