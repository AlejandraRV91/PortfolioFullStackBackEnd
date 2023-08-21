/** @format */

const db = require("../db/dbConfig");

/**
 * Get a list of all pet stores.
 * @returns {Promise<Array>} List of pet store records.
 */
const getStores = async () => {
	try {
		return await db.manyOrNone("SELECT * FROM PetStores;");
	} catch (error) {
		console.error("Error fetching stores:", error);
		return [];
	}
};

/**
 * Create a new pet store record.
 * @param {string} name - Store's name.
 * @param {string} contact_email - Store's contact email.
 * @param {string} phone_number - Store's phone number.
 * @param {string} address - Store's address.
 * @returns {Promise<Object>} Created pet store record.
 */
const createStore = async (name, contact_email, phone_number, address) => {
	try {
		return await db.oneOrNone(
			"INSERT INTO PetStores (name, contact_email, phone_number, address) VALUES ($1, $2, $3, $4) RETURNING *;",
			[name, contact_email, phone_number, address]
		);
	} catch (error) {
		console.error("Error creating store:", error);
		throw error;
	}
};

/**
 * Get a list of all pets.
 * @returns {Promise<Array>} List of pet records.
 */
const getPets = async () => {
	try {
		return await db.manyOrNone(
			"SELECT id, name, is_available, type, breed, price, image_url FROM Pets;"
		);
	} catch (error) {
		console.error("Error fetching pets:", error);
		return [];
	}
};

/**
 * Get a pet by id.
 * @returns {Promise<Object>} pet searched.
 */
const getPetByID = async (id) => {
	try {
		return await db.oneOrNone("SELECT * FROM Pets WHERE id=$1;", [id]);
	} catch (error) {
		console.error("Error fetching pet:", error);
		return [];
	}
};

/**
 * Get a store by id.
 * @returns {Promise<Object>} pet searched.
 */
const getStoreByID = async (id) => {
	try {
		return await db.oneOrNone("SELECT * FROM PetStores WHERE id=$1;", [id]);
	} catch (error) {
		console.error("Error fetching store:", error);
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
 * @param {number} price - Pet's price.
 * @param {number} store_id - ID of the pet's store.
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
	price,
	store_id,
	image_url,
	description
) => {
	try {
		return await db.oneOrNone(
			"INSERT INTO Pets (name, type, age, weight, breed, price, store_id, image_url, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;",
			[
				name,
				type,
				age,
				weight,
				breed,
				price,
				store_id,
				image_url,
				description,
			]
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
 * @param {number} price - Pet's price.
 * @param {number} store_id - ID of the pet's store.
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
	price,
	is_available,
	store_id,
	image_url,
	description
) => {
	try {
		return await db.oneOrNone(
			"UPDATE Pets SET name = $2, type = $3, age = $4, weight = $5, breed = $6, price = $7, store_id = $8, image_url = $9, description = $10,is_available=$11 WHERE id = $1 RETURNING *;",
			[
				id,
				name,
				type,
				age,
				weight,
				breed,
				price,
				store_id,
				image_url,
				description,
				is_available,
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
 * @throws {Error} If there is an error while fetching unique pet breeds.
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
 * @throws {Error} If there is an error while fetching unique pet types.
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
	getStores,
	createStore,
	getPets,
	createPet,
	updatePet,
	deletePet,
	getUniqueBreeds,
	getUniqueTypes,
	getPetByID,
	getStoreByID,
};
