var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run("CREATE TABLE history (time TEXT, title TEXT)");
});

db.close();
export default{
  insertHistory(time, title){
    var stmt = db.prepare("INSERT INTO lorem VALUES (?, ?)");
    // for (var i = 0; i < 10; i++) {
    //     stmt.run("Ipsum " + i);
    // }
    stmt.run({time, title});
    stmt.finalize();
  
    db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
        console.log(row.id + ": " + row.info);
    });
  },
  getHistory(){
    var res = []
    db.once("SELECT * FROM history", (err, row)=>{
      var tmp = {time: row.time, title: row.title};
      res.push(tmp);
    })
    return res;
  },
  deleteHistory(){

  },
}