/** @format */

const express = require("express");
const router = express.Router();
const {
	getOwners,
	createOwner,
	getPets,
	createPet,
	updatePet,
	deletePet,
	getUniqueBreeds,
	getUniqueTypes,
} = require("../queries/mainQueries");

const {
	validateOwner,
	validatePet,
} = require("../validations/mainValidations");

// Route to get a list of owners
router.get("/owners", async (req, res) => {
	try {
		const owners = await getOwners();
		res.json(owners);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching owners.",
		});
	}
});

// Route to create a new owner
router.post("/owners", validateOwner, async (req, res) => {
	const { name, contact_email, phone_number, address } = req.body;
	try {
		const newOwner = await createOwner(
			name,
			contact_email,
			phone_number,
			address
		);
		res.json(newOwner);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while creating an owner.",
		});
	}
});

// Route to get a list of pets
router.get("/", async (req, res) => {
	try {
		const pets = await getPets();
		res.json(pets);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching pets.",
		});
	}
});

// Route to create a new pet
router.post("/", validatePet, async (req, res) => {
	const { name, type, age, weight, breed, owner_id, image_url, description } =
		req.body;
	try {
		const newPet = await createPet(
			name,
			type,
			age,
			weight,
			breed,
			owner_id,
			image_url,
			description
		);
		res.json(newPet);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while creating a pet.",
		});
	}
});

// Route to update a pet
router.put("/:id", validatePet, async (req, res) => {
	const petId = parseInt(req.params.id);
	const { name, type, age, weight, breed, owner_id, image_url, description } =
		req.body;
	try {
		const updatedPet = await updatePet(
			petId,
			name,
			type,
			age,
			weight,
			breed,
			owner_id,
			image_url,
			description
		);
		res.json(updatedPet);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while updating the pet.",
		});
	}
});

// Route to delete a pet
router.delete("/:id", async (req, res) => {
	const petId = parseInt(req.params.id);
	try {
		const deletedPet = await deletePet(petId);
		if (deletedPet) {
			res.json({ message: "Pet deleted successfully." });
		} else {
			res.status(404).json({ error: "Pet not found." });
		}
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while deleting the pet.",
		});
	}
});

// Route to get unique pet breeds
router.get("/breeds", async (req, res) => {
	try {
		const breeds = await getUniqueBreeds();
		res.json(breeds);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching unique pet breeds.",
		});
	}
});

// Route to get unique pet types
router.get("/types", async (req, res) => {
	try {
		const types = await getUniqueTypes();
		res.json(types);
	} catch (error) {
		res.status(500).json({
			error: "An error occurred while fetching unique pet types.",
		});
	}
});

module.exports = router;
