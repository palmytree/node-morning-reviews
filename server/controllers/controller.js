const users = require('../../users.json')

module.exports = {
	getUsers: (req, res) => {
		res.status(200).send(users)
	},
	getUser: (req, res) => {
        const {user_id}=req.params
        
	}
}
