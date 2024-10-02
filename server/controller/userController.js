let users = [
    {id: 1, name: "yr"},
    {id: 2, name: "yk"},
    {id: 3, name: "yt"},
]

export const getUsers = (req, res)=>{
    res.json(users)
}

export const getUser = (req, res)=>{
    const userId = parseInt(req.params.id)
    res.json(users.filter(user => user.id === userId))
    
}

export const postUser = (req, res)=>{
    const newUSER = {
        id: users.length,
        name: req.body
    }
    users.push(newUSER)

    res.status(201).json({message: "user created"})
}

export const putUser = (req, res)=>{
    //find user
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id !== id)
    if (!user) return res.status(404).json({message: 'user not found'})
    
    user.name = req.body.name 
    res.status(200).json({message: "user updated"})
}

export const deleteUser = (req, res)=>{
    const userCount  = users.length
    const id = parseInt(req.params.id)
    users = users.filter(user => user.id !== id)
    if (users.length === userCount) return res.status(404).json({message: 'user not found'})

    res.status(200).json({message: "deleted seccessfully"})

}