/** @format */

const Joi = require("joi");

// Validation middleware for creating an store
const validateStore = (req, res, next) => {
	const schema = Joi.object({
		name: Joi.string().trim().required(),
		contact_email: Joi.string().trim().email(),
		phone_number: Joi.string().trim(),
		address: Joi.string().trim(),
	});

	const { error } = schema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

// Validation middleware for creating a pet
const validatePet = (req, res, next) => {
	const schema = Joi.object({
		id: Joi.number().integer(),
		name: Joi.string().trim().required(),
		type: Joi.string().trim().required(),
		age: Joi.number().integer().min(0).allow(null),
		weight: Joi.number().precision(2).allow(null),
		entry_date: Joi.date(),
		description: Joi.string().trim(),
		breed: Joi.string().trim(),
		is_available: Joi.boolean(),
		price: Joi.number().precision(2).required(),
		store_id: Joi.number().integer().required(),
		image_url: Joi.string().uri(),
	});

	const { error } = schema.validate(req.body);
	if (error) {
		res.status(400).json({ error: error.details[0].message });
	} else {
		next();
	}
};

module.exports = {
	validateStore,
	validatePet,
};
