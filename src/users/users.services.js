//? File´s imports
const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
  const data = usersControllers.findAllUsers()
  res.status(200).json(data)
} 

const getAllUsersById = (req, res) => {

  const id = req.params.id
  const data = usersControllers.findAllUsersById(id)

  if(data){
    //? Caso Exitoso
    res.status(200).json(data)
  } else {
    //! error
    res.status(404).json({message: 'Invalid ID'})
  }
  
}

const postNewUsers = (req, res) => {

  const {first_name, last_name, email, password, birthday} = req.body

  if(first_name){
      //? Caso Exitoso
      const data = usersControllers.createNewUser({first_name, last_name, email, password, birthday})
      res.status(201).json(data)
  } else {
    //! error
    res.status(400).json({ 
            message: 'Invalid Data', 
            fields: { 
                first_name: 'string', 
                last_name: 'string', 
                email: 'string', 
                password: 'string',  
                birthday: 'date'
            },
        })
    }
};

module.exports = {
  getAllUsers,
  getAllUsersById,
  postNewUsers,
}