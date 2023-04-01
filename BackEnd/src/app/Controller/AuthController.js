
const  {loginService, registerService} = require ('../../services/auth')

 const register = async (req, res) => {
    const {name , phone, email, password} = req.body
    try {
        if(!name || !phone || !email|| !password) return res.status(400).json({
            err: 1,
            masage: 'missing input',
        })
        const response = await registerService(req.body)
        return res.status(200).json({response})
        
    } catch (error) {
        return res.status(500).json({
            err: -1,
            mesage:'failed to register '+ error
        })
    }
}
 const login = async (req, res) => {
    const { phone, password } = req.body
    try {
        if (!phone || !password) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await loginService(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}
module.exports = {register,login};