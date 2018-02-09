var db = require('../../lib/dbConfig');

var bookModal = {
    getAllBook: function () {
        return new Promise(function (resolve, reject) {
            db.all('SELECT * from book ORDER BY id DESC', function (err, rows, fields) {
                if (err) reject(err);
                resolve(rows, fields);
            });
        });
    },
    bookDetail: function (bookId) {
        return new Promise(function (resolve, reject) {
            db.all('SELECT * FROM book WHERE id="' + bookId + '"', function (err, rows, fields) {
                if (err) reject(err);
                resolve(rows);
            });
        });
    },

    AddNewBook: function (bookData, callback) {
        return new Promise(function (resolve, reject) {
            db.run('INSERT INTO book (bookname, authorname, version, description, price) VALUES(?,?,?,?,?) ', [bookData.bookname, bookData.authorname, bookData.version, bookData.description, bookData.price], function(err){
                if(err) reject(err);
                console.log(this.lastID);
                resolve({affectedRows: this.changes, insertId:this.lastID});
            });
        });
    },

    UpdateBook: function (bookData, bookId) {
        return new Promise(function (resolve, reject) {
            db.run('UPDATE book SET bookname=?, authorname=?, version=?, description=?, price=? WHERE id=? ', [bookData.bookname, bookData.authorname, bookData.version, bookData.description, bookData.price, bookId], function(err){
                if(err) reject(err);
                resolve({affectedRows: this.changes, updateId:bookId});
            });
        });
    },

    DeleteBook: function (bookId) {
        return new Promise(function (resolve, reject) {
            db.run('DELETE FROM book  WHERE id="'+bookId+'" ', [], function(err, rows){
                if(err) reject(err);
                resolve({affectedRows: this.changes, deletedId:bookId});
            });
        });
    }

}

module.exports = bookModal;