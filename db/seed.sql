\c petpalacehub 

INSERT INTO
    PetStores (
        name,
        contact_email,
        phone_number,
        address
    )
VALUES (
        'Paws & Whiskers Pet Shop',
        'info@pawsandwhiskers.com',
        '+1-123-456-7890',
        '1234 Oak Street, Cityville, USA'
    ), (
        'Furry Friends Emporium',
        'hello@furryfriendsemporium.com',
        '+1-234-567-8901',
        '567 Maple Avenue, Townsville, USA'
    ), (
        'Pet Haven Boutique',
        'contact@pethavenboutique.com',
        '+1-345-678-9012',
        '789 Pine Street, Villagetown, USA'
    ), (
        'Pawsome Pets Corner',
        'customerservice@pawsomepetscorner.com',
        '+1-456-789-0123',
        '101 Cedar Lane, Petburg, USA'
    ), (
        'Whisker World Pet Store',
        'info@whiskerworldpetstore.com',
        '+1-567-890-1234',
        '202 Birch Avenue, Petropolis, USA'
    );

INSERT INTO
    Pets (
        name,
        type,
        age,
        weight,
        description,
        breed,
        price,
        store_id,
        image_url
    )
VALUES (
        'Fido',
        'Dog',
        3,
        10.5,
        'Fido is a friendly and playful Labrador Retriever.',
        'Labrador Retriever',
        550.00,
        1,
        'https://drive.google.com/uc?id=1FNRvzozevje9K261izx3VfXrwtGMrza3'
    ), (
        'Whiskers',
        'Cat',
        2,
        4.2,
        'Whiskers is a curious and affectionate Siamese Cat.',
        'Siamese Cat',
        300.00,
        2,
        'https://drive.google.com/uc?id=1v3QlCXZV1i_K-Hsiio2h6MZioHVDJSky'
    ), (
        'Buddy',
        'Dog',
        5,
        12.3,
        'Buddy is a loyal and intelligent Golden Retriever.',
        'Golden Retriever',
        700.00,
        3,
        'https://drive.google.com/uc?id=1Trn7tb3hMIKZlvvU7xDsjsuUQJDuL50V'
    ), (
        'Simba',
        'Cat',
        1,
        3.6,
        'Simba is an energetic and adventurous Bengal Cat.',
        'Bengal Cat',
        250.00,
        4,
        'https://drive.google.com/uc?id=11pB9h7MtkN4lmWd9FEQrWPGBhldpZJ1D'
    ), (
        'Charlie',
        'Dog',
        4,
        11.1,
        'Charlie is a brave and protective German Shepherd Dog.',
        'German Shepherd Dog',
        600.00,
        5,
        'https://drive.google.com/uc?id=1NrKLl1dDGwk5aaECzCq4ZMFzqMcvdTvD'
    ), (
        'Luna',
        'Cat',
        6,
        4.0,
        'Luna is a gentle and elegant Persian Cat.',
        'Persian Cat',
        350.00,
        1,
        'https://drive.google.com/uc?id=1a6SbNIa9XDw2Mv3ba2kaBt81Hw-MD7rC'
    ), (
        'Max',
        'Dog',
        7,
        15.0,
        'Max is a friendly and loyal Bulldog.',
        'Bulldog',
        800.00,
        2,
        'https://drive.google.com/uc?id=18Nz7fX4KSfDZPUnEwryr9HPVmvOjC8Cg'
    ), (
        'Bella',
        'Cat',
        8,
        3.5,
        'Bella is a curious and playful Sphynx Cat.',
        'Sphynx Cat',
        400.00,
        3,
        'https://drive.google.com/uc?id=1WC1AJqekSUVScL7GFzSd68b-PaMt9lO6'
    ), (
        'Lucy',
        'Dog',
        9,
        13.0,
        'Lucy is an intelligent and obedient Poodle.',
        'Poodle',
        750.00,
        4,
        'https://drive.google.com/uc?id=10c-TRs1zXQ37UhVaWVyph9o7S0lJ-ldW'
    ), (
        'Daisy',
        'Cat',
        10,
        4.5,
        'Daisy is a friendly and sociable Maine Coon.',
        'Maine Coon',
        300.00,
        5,
        'https://drive.google.com/uc?id=1-rLTd8sgd3GqRuGFWCuSlo6lFR0umQM3'
    ), (
        'Rocky',
        'Dog',
        11,
        14.0,
        'Rocky is a loyal and protective Rottweiler.',
        'Rottweiler',
        650.00,
        1,
        'https://drive.google.com/uc?id=1RMRyyq_CWKVeIzdnwfuO5rMCeQpIt8q3'
    ), (
        'Milo',
        'Cat',
        12,
        3.0,
        'Milo is a gentle and affectionate Scottish Fold.',
        'Scottish Fold',
        350.00,
        2,
        'https://drive.google.com/uc?id=1vhDBrJy9SY57FTpS-lPEIJBAJ7OC6YkU'
    ), (
        'Jack',
        'Dog',
        13,
        12.5,
        'Jack is an energetic and friendly Siberian Husky.',
        'Siberian Husky',
        700.00,
        3,
        'https://drive.google.com/uc?id=1PyPg942y3PN-b0284UT9cHZ6sATYqpLm'
    ), (
        'Sadie',
        'Cat',
        14,
        4.0,
        'Sadie is a gentle and affectionate British Shorthair.',
        'British Shorthair',
        250.00,
        4,
        'https://drive.google.com/uc?id=1o68WY9WK4V5PmwMhoYlC92pLsjpy8cLD'
    ), (
        'Toby',
        'Dog',
        15,
        11.0,
        'Toby is a friendly and loyal Boxer.',
        'Boxer',
        600.00,
        5,
        'https://drive.google.com/uc?id=1B35ZcfvpIVWMHjgBTvaZ8891Uc1x28WP'
    ), (
        'Chloe',
        'Cat',
        16,
        3.5,
        'Chloe is a gentle and affectionate Ragdoll.',
        'Ragdoll',
        350.00,
        1,
        'https://drive.google.com/uc?id=1VAGGISwCD8HmQK2NWAX3heXPSN1JRzIb'
    ), (
        'Bailey',
        'Dog',
        17,
        13.5,
        'Bailey is a loyal and protective Doberman Pinscher.',
        'Doberman Pinscher',
        750.00,
        2,
        'https://drive.google.com/uc?id=18PTyf3-fvBJ2ga12X7A3I3X-Dsm8cZZc'
    ), (
        'Lola',
        'Cat',
        18,
        4.5,
        'Lola is an energetic and curious Abyssinian Cat.',
        'Abyssinian Cat',
        400.00,
        3,
        'https://drive.google.com/uc?id=1_W-8mshyzuxefsJjb6U5zkNPUoXXbMdP'
    ), (
        'Oliver',
        'Dog',
        19,
        12.0,
        'Oliver is a friendly and loyal Dachshund.',
        'Dachshund',
        600.00,
        4,
        'https://drive.google.com/uc?id=1Dy9F4dwWB5XLEnfeJkHi73NVaZFCW8UZ'
    ), (
        'Shadow',
        'Cat',
        20,
        3.0,
        'Shadow is a curious and playful Devon Rex Cat.',
        'Devon Rex Cat ',
        300.00,
        5,
        'https://drive.google.com/uc?id=1sAGjnnrdq4yv90vP5CQqv15tKDHae57c'
    );