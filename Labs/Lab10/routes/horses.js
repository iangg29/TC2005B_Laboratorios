const express = require("express");
const router = express.Router();

let horses = [
    {
        "id": 1,
        "name": "Alan",
        "age": 21
    },
    {
        "id": 2,
        "name": "Billy",
        "age": 27
    },
    {
        "id": 3,
        "name": "Ian",
        "age": 19
    }
];

router.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        data: horses
    })
});

router.get('/:id', (req, res) => {
    return res.status(200).json({
        success: true,
        data: horses.find(horse => horse.id === parseInt(req.params.id))
    });
});

router.post('/', (req, res) => {
    let newHorse = req.body;
    horses.push(newHorse);
    return res.status(200).json({
        success: true,
        data: newHorse
    });
});

module.exports = router;