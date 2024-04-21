const knex = require('../knexmodels/knex');
const bcrypt = require('bcrypt');
const {users} = require('../models')

const register = async (req, res) => {
    const {firstName, lastName, userName, email, password} = req.body

    if (!userName || !password || !email) {
        return res.status(400).send({
            message: "Register failed, field must not be empty!"
        })
    }
    
 /*    const regist = await knex('users').insert({
        firstName: firstName,
        lastName:lastName,
        userName: userName,
        email: email,
        password: password
    })
 */

    //using sequelize
    const hashPaswword = bcrypt.hashSync(password, 8);
    console.log(password, hashPaswword);
    const regist = await users.create({
        firstName: firstName,
        lastName:lastName,
        userName: userName,
        email: email,
        password: password
    })

    return res.status(201).send({
        message: 'Create user success!'
    })
};

const allUsers = async (req, res) => {
    const all = await knex.select().from('users')
  
    return res.status(200).send({
      message: 'All user data retrievied',
      data: all
    })
};
  
module.exports = {register: register, allUsers: allUsers}
