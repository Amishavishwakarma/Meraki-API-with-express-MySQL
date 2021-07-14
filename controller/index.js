const myconnection = require("../model/mysql-connection")

exports.get = (req, res) => {
    myconnection.query("select * from apidata", (err, result) => {
        if (err) {
            res.status(400).send(err)
        }
        else {
            res.status(201).send(result)
        }
    })
}

exports.post = (req, res) => {
    const user = {
        id: req.body.id,
        name: req.body.name,
        logo: req.body.logo,
        notes: req.body.notes,
        days_to_complete: req.body.days_to_complete,
        short_description: req.body.short_description,
        type: req.body.type
    }
    let values = []

    for (i in user) {
        values.push(user[i])
    }

    let sql = 'INSERT INTO apidata (id,name,logo,notes,days_to_complete,short_description,type) VALUES ?'
    myconnection.query(sql, [[values]], (err, result) => {
        if (result != 0) {
            res.status(201).send(result)
        }
        else {
            res.status(400).send(err)
        }
    })

}

exports.put = (req, res) => {
    let id = req.params.id
    let name = req.body.name

    var sql = `UPDATE apidata SET name = '${name}' WHERE id= '${id}'`;
    myconnection.query(sql, (err, result) => {
        if (result != 0) {
            res.status(201).send(result)
        }
        else {
            res.status(400).send(err)
        }
    });
}

exports.delete = (req, res) => {
    let id = req.params.id
    var sql = `DELETE FROM apidata WHERE id = '${id}'`;
    myconnection.query(sql, function (err, result) {
        if (result != 0) {
            res.status(201).send(result)
        }
        else {
            res.status(400).send(err)
        }
    });
}
