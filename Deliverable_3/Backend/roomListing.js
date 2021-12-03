const mongoose = require('mongoose')

const RoomListingSchema = new mongoose.Schema(
	{
		roomTitle: { type: String, required: true},
		location: { type: String, required: true },
		costPerNight: { type: Number, required: true },
		description: { type: String, required: true },
		image: { type: String}
	}
)

const model = mongoose.model('roomListing', RoomListingSchema)

module.exports = model