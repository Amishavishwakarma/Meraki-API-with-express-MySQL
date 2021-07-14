const axios = require("axios")
const fs = require("fs")
axios.get('http://api.navgurukul.org/courses').then(cource_response => {
    const responce_data = cource_response.data;
    console.log(responce_data)
    //  THIS IS TO CREATE JSON FILE
    fs.writeFile('API_MYSQL/jsonData.json', JSON.stringify(responce_data, null, 4), (err) => {
        if (err) throw err;
    })
})

const data = fs.readFileSync("API_MYSQL/jsonData.json", "utf8");
const parse_data = JSON.parse(data)

var values = []
for (var i = 0; i < parse_data.length; i++)
    values.push([parse_data[i].id, parse_data[i].name, parse_data[i].logo, parse_data[i].notes, parse_data[i].days_to_complete, parse_data[i].short_description, parse_data[i].type]);

const sql = 'INSERT INTO apidata (id,name,logo,notes,days_to_complete,short_description,type) VALUES ?'
myconnection.query(sql, [values], (err, result) => {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
})
