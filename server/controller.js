module.exports = {
    saveHouses: (req,res) => {
        const db = req.app.get('db')
        const {inputs} = req.body
    
    db.save_houses(inputs)
    .then(responseData => res.status(200).send(data))
    .catch(err => {
        res.status(500).send({errorMessage: `We're going down!`})
    })},
    sendHouses: (req,res) => {
        const db = req.app.get('db')

        db.send_Houses()
        .then(responseData => {
            let house = [
                responseData.property,
                responseData.address,
                responseData.city,
                responseData.state,
                responseData.zip
            ]
            res.status(200).send(house)
        })
        .catch(err => {
            res.status(500).send({errorMessage: `no go`})
        })
    }
}