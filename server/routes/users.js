import express from 'express'

const router = express.Router()

const users = [
    {id: 1, name: "yr"},
    {id: 2, name: "yk"},
    {id: 3, name: "yt"},
]

// app.use(express.static(path.join(__dirname, 'public')))

//get all users
router.get('/', (req, res)=>{
    res.json(users)
})

router.get('/:id', (req, res)=>{
    const userId = parseInt(req.params.id)
    res.json(users.filter(user => user.id === userId))
})

export default router