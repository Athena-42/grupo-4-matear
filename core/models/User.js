

const fs = require('fs')

const User = {
    fileName: './data/userDataBase.json',
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    generateId: function() {
        let allusers = this.findAll();
        let lastUser = allusers.pop();
        if(lastUser){
        return lastUser.id + 1
        }
        return 1;
    },

    findAll: function() {
        return this.getData();
    },

    findByPk: function(id) {
        let allusers = this.findAll();
        let userFound = allusers.find(oneUser => oneUser.id === id);
        return userFound
    },

    findByField: function(field, text) {
        let allusers = this.findAll();
        let userFound = allusers.find(oneUser => oneUser[field] === text);
        return userFound
    },

    create: function (userData) {
        let allusers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allusers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allusers, null, ' '));
        return true;
    },

    delete: function(id) {
        let allusers = this.findAll();
        let finaleUser = allusers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finaleUser, null, ' '));
        return true;
    },

}

module.exports = User