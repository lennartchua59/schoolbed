





// connect to db
var furnitureDB = {
    getFurnitureByCat: function (catid,callback) {
    var dbConn = db.getConnection()
    dbConn.connect((err)=>{ // using arrow functions as callback
        if(err){
            // return err to callbacker, result
            return callbacker, null)
        }else{
            // run sql query
            var sql ='select * from furniture where cat_id=?'
            dbConn.query()

            // return result
            }

    })
}