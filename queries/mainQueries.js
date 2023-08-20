/** @format */

const db = require("../db/dbConfig");

/**
 * Get a list of all owners.
 * @returns {Promise<Array>} List of owner records.
 */
const getOwners = async () => {
	try {
		return await db.manyOrNone("SELECT * FROM Owners;");
	} catch (error) {
		console.error("Error fetching owners:", error);
		return [];
	}
};

/**
 * Create a new owner record.
 * @param {string} name - Owner's name.
 * @param {string} contact_email - Owner's contact email.
 * @param {string} phone_number - Owner's phone number.
 * @param {string} address - Owner's address.
 * @returns {Promise<Object>} Created owner record.
 */
const createOwner = async (name, contact_email, phone_number, address) => {
	try {
		return await db.oneOrNone(
			"INSERT INTO Owners (name, contact_email, phone_number, address) VALUES ($1, $2, $3, $4) RETURNING *;",
			[name, contact_email, phone_number, address]
		);
	} catch (error) {
		console.error("Error creating owner:", error);
		throw error;
	}
};

/**
 * Get a list of all pets.
 * @returns {Promise<Array>} List of pet records.
 */
const getPets = async () => {
	try {
		return await db.manyOrNone("SELECT * FROM Pets;");
	} catch (error) {
		console.error("Error fetching pets:", error);
		return [];
	}
};

/**
 * Create a new pet record.
 * @param {string} name - Pet's name.
 * @param {string} type - Pet's type.
 * @param {number} age - Pet's age.
 * @param {number} weight - Pet's weight.
 * @param {string} breed - Pet's breed.
 * @param {number} owner_id - ID of the pet's owner.
 * @param {string} image_url - URL of the pet's image.
 * @param {string} description - Pet's description.
 * @returns {Promise<Object>} Created pet record.
 */
const createPet = async (
	name,
	type,
	age,
	weight,
	breed,
	owner_id,
	image_url,
	description
) => {
	try {
		return await db.oneOrNone(
			"INSERT INTO Pets (name, type, age, weight, breed, owner_id, image_url, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;",
			[name, type, age, weight, breed, owner_id, image_url, description]
		);
	} catch (error) {
		console.error("Error creating pet:", error);
		throw error;
	}
};

/**
 * Update a pet record.
 * @param {number} id - ID of the pet to update.
 * @param {string} name - Pet's name.
 * @param {string} type - Pet's type.
 * @param {number} age - Pet's age.
 * @param {number} weight - Pet's weight.
 * @param {string} breed - Pet's breed.
 * @param {number} owner_id - ID of the pet's owner.
 * @param {string} image_url - URL of the pet's image.
 * @param {string} description - Pet's description.
 * @returns {Promise<Object>} Updated pet record.
 */
const updatePet = async (
	id,
	name,
	type,
	age,
	weight,
	breed,
	owner_id,
	image_url,
	description
) => {
	try {
		return await db.oneOrNone(
			"UPDATE Pets SET name = $2, type = $3, age = $4, weight = $5, breed = $6, owner_id = $7, image_url = $8, description = $9 WHERE id = $1 RETURNING *;",
			[
				id,
				name,
				type,
				age,
				weight,
				breed,
				owner_id,
				image_url,
				description,
			]
		);
	} catch (error) {
		console.error("Error updating pet:", error);
		throw error;
	}
};

/**
 * Delete a pet record.
 * @param {number} id - ID of the pet to delete.
 * @returns {Promise<Object>} Deleted pet record, or null if not found.
 */
const deletePet = async (id) => {
	try {
		return await db.oneOrNone(
			"DELETE FROM Pets WHERE id = $1 RETURNING *;",
			[id]
		);
	} catch (error) {
		console.error("Error deleting pet:", error);
		throw error;
	}
};

/**
 * Get a list of unique pet breeds.
 * @returns {Promise<Array>} List of unique pet breeds.
 */
const getUniqueBreeds = async () => {
	try {
		const result = await db.manyOrNone("SELECT DISTINCT breed FROM Pets;");
		return result.map((row) => row.breed);
	} catch (error) {
		console.error("Error fetching unique breeds:", error);
		return [];
	}
};

/**
 * Get a list of unique pet types.
 * @returns {Promise<Array>} List of unique pet types.
 */
const getUniqueTypes = async () => {
	try {
		const result = await db.manyOrNone("SELECT DISTINCT type FROM Pets;");
		return result.map((row) => row.type);
	} catch (error) {
		console.error("Error fetching unique types:", error);
		return [];
	}
};

module.exports = {
	getOwners,
	createOwner,
	getPets,
	createPet,
	updatePet,
	deletePet,
	getUniqueBreeds,
	getUniqueTypes,
};
