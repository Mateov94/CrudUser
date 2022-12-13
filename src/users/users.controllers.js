const usersDB = []
let id = 1
//*  {
//*    id: 1,
//*    first_name: 'Mateo',
//*    last_name: 'Castaño',
//*    email: 'mateocv94@gmai.com',
//*    password: '123456',
//*    birthday: '1994/02/22'
//*  }

const findAllUsers = () => {
  return usersDB
}

const findAllUsersById = (id) => {
  const filteredUsers = usersDB.find(users => users.id == id)
  return filteredUsers
}

const createNewUser = (obj) => {
  const newUsers = {
    id: id++, 
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday
  }
  usersDB.push(newUsers)
  return newUsers
}

module.exports = {
  findAllUsers,
  findAllUsersById,
  createNewUser,
}