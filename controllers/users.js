const { response } = require('express');

const getUsers = (req, res = response) => {
  res.json({
    msg: 'get API'
  })
};

const postUser = (req, res = response) => {
  res.status(201).json({
    msg: 'post API'
  })
};

const updateUser = (req, res = response) => {
  res.json({
    msg: 'put API'
  })
};

const deleteUser = (req, res = response) => {
  res.json({
    msg: 'delete API'
  })
};

module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser
}