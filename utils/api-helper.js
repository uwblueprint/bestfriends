// general api helper here for now

const fetch = require("node-fetch")
const FormData = require("form-data")
const fs = require('fs')

API_URI = "127.0.0.1:5000"
FILE_NAME = "../onboarding1.jpg"

async function postPhotoVerify(photoData) {
	const formData = new FormData()
	photoData = fs.createReadStream(FILE_NAME)
	formData.append('file', photoData)

	let res = await fetch(`http://${API_URI}/verify/`, {
        method: 'POST',
        body: formData
      }).then(res => res.json())

	return res
}
