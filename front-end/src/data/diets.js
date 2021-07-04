// For 100 grams

const diets = [
    {
        food: 'Roti (Chapati)',
        energy: 297,
    },
    {
        food: 'Rice (Brown)',
        energy: 353.7,
    },
    {
        food: 'Rice Parboiled',
        energy: 351.5,
    },
    {
        food: 'Rice Raw milled',
        energy: 356.3,
    },
    {
        food: 'Wheat whole',
        energy: 321.9,
    },
    {
        food: 'Wheat flour',
        energy: 320.2,
    },
    {
        food: 'Bulgar wheat',
        energy: 341.7,
    },
    {
        food: 'Refined flour',
        energy: 351.8,
    },
    {
        food: 'Ragi',
        energy: 320.7,
    },
    {
        food: 'Rice flakes',
        energy: 353.7,
    },
    {
        food: 'Wheat semolina',
        energy: 333.6,
    },
    {
        food: 'Wheat vermicelli',
        energy: 332.6,
    },
    {
        food: 'Barley',
        energy: 315.7,
    },
    {
        food: 'Bajra',
        energy: 347.9,
    },
    {
        food: 'Jowar',
        energy: 334.1,
    },
    {
        food: 'Quinoa',
        energy: 328.3,
    },
    {
        food: 'Amaranth seed, Black',
        energy: 356.1,
    },
    {
        food: 'Bengal gram, dal',
        energy: 329.1,
    },
    {
        food: 'Bengal gram, whole',
        energy: 287,
    },
    {
        food: 'Black gram whole',
        energy: 291.3,
    },
    {
        food: 'Cow pea, brown',
        energy: 320.2,
    },
    {
        food: 'Cow pea, white',
        energy: 320.2,
    },
    {
        food: 'Green gram dal',
        energy: 325.7,
    },
    {
        food: 'Green gram, whole',
        energy: 293.7,
    },
    {
        food: 'Horse gram, whole',
        energy: 329.5,
    },
    {
        food: 'Lentil dal',
        energy: 322.4,
    },
    {
        food: 'Peas, dry',
        energy: 303.2,
    },
    {
        food: 'Rajma, red',
        energy: 299.2,
    },
    {
        food: 'Red gram, dal',
        energy: 330.7,
    },
    {
        food: 'Red gram, whole',
        energy: 273.9,
    },
    {
        food: 'Soya bean, brown',
        energy: 381.4,
    },
    {
        food: 'Amaranth leaves',
        energy: 30.5,
    },
    {
        food: 'Beet greens',
        energy: 34.6,
    },
    {
        food: 'Brussels sprouts',
        energy: 44.2,
    },
    {
        food: 'Cabbage Chinese',
        energy: 17.9,
    },
    {
        food: 'Cabbage, green',
        energy: 21.5,
    },
    {
        food: 'Cauliflower leaves',
        energy: 35.4,
    },
    {
        food: 'Colocasia leaves, green',
        energy: 43.4,
    },
    {
        food: 'Drumstick leaves',
        energy: 67.3,
    },
    {
        food: 'Fenugreek leaves',
        energy: 34.4,
    },
    {
        food: 'Lettuce',
        energy: 21.7,
    },
    {
        food: 'Mustard leaves',
        energy: 30.3,
    },
    {
        food: 'Parsley',
        energy: 72.8,
    },
    {
        food: 'Radish leaves',
        energy: 26.05,
    },
    {
        food: 'Spinach',
        energy: 24.3,
    },
    {
        food: 'Ash gourd',
        energy: 17.4,
    },
    {
        food: 'Bamboo shoot, tender',
        energy: 16.2,
    },
    {
        food: 'Bitter gourd',
        energy: 20.7,
    },
    {
        food: 'Bottle gourd',
        energy: 10.9,
    },
    {
        food: 'Brinjal',
        energy: 25.3,
    },
    {
        food: 'Broad beans',
        energy: 29.3,
    },
    {
        food: 'Capsicum',
        energy: 16.2,
    },
    {
        food: 'Cauliflower',
        energy: 22.9,
    },
    {
        food: 'Celery stalk',
        energy: 16.4,
    },
    {
        food: 'Cho-Cho-Marrow',
        energy: 18.8,
    },
    {
        food: 'Cluster beans',
        energy: 40.1,
    },
    {
        food: 'Cucumber',
        energy: 19.5,
    },
    {
        food: 'French beans',
        energy: 24.3,
    },
    {
        food: 'Knol-Khol',
        energy: 16,
    },
    {
        food: 'Kovai',
        energy: 19.1,
    },
    {
        food: 'Ladies finger',
        energy: 27.4,
    },
    {
        food: 'Parwar',
        energy: 24.1,
    },
    {
        food: 'Peas,fresh',
        energy: 81.2,
    },
    {
        food: 'Plantain stem',
        energy: 39.4,
    },
    {
        food: 'Pumpkin',
        energy: 23.1,
    },
    {
        food: 'Ridge gourd',
        energy: 13.1,
    },
    {
        food: 'Snake gourd',
        energy: 12.4,
    },
    {
        food: 'Tomato',
        energy: 20.7,
    },
    {
        food: 'Zucchini, green',
        energy: 20,
    },
    {
        food: 'Beetroot',
        energy: 35.6,
    },
    {
        food: 'Carrot',
        energy: 33.2,
    },
    {
        food: 'Potato brown',
        energy: 69.7,
    },
    {
        food: 'Radish,white',
        energy: 32.2,
    },
    {
        food: 'Sweet potato,brown',
        energy: 108.9,
    },
    {
        food: 'Tapioca',
        energy: 79.8,
    },
    {
        food: 'Yam',
        energy: 84.3,
    },
    {
        food: 'Apple',
        energy: 62.3,
    },
    {
        food: 'Apricot, dried',
        energy: 31.5,
    },
    {
        food: 'Avocado',
        energy: 144.3,
    },
    {
        food: 'Banana',
        energy: 110.6,
    },
    {
        food: 'Blackberry fruit',
        energy: 54.2,
    },
    {
        food: 'Cherries red',
        energy: 59.7,
    },
    {
        food: 'Blackcurrants',
        energy: 54.2,
    },
    {
        food: 'Custard apple',
        energy: 98.9,
    },
    {
        food: 'Dates, dry',
        energy: 320.2,
    },
    {
        food: 'Fig',
        energy: 81.5,
    },
    {
        food: 'Grapes',
        energy: 60.7,
    },
    {
        food: 'Guava',
        energy: 32.2,
    },
    {
        food: 'Jack fruit',
        energy: 72.1,
    },
    {
        food: 'Sweet lime',
        energy: 27.2,
    },
    {
        food: 'Litchi',
        energy: 53.7,
    },
    {
        food: 'Mango',
        energy: 41.8,
    },
    {
        food: 'Musk melon',
        energy: 23.1,
    },
    {
        food: 'Orange',
        energy: 37.2,
    },
    {
        food: 'Papaya',
        energy: 23.9,
    },
    {
        food: 'Peach',
        energy: 40.1,
    },
    {
        food: 'Pear',
        energy: 37.5,
    },
    {
        food: 'Pineapple',
        energy: 43,
    },
    {
        food: 'Plum',
        energy: 56.8,
    },
    {
        food: 'Pomegranate',
        energy: 54.7,
    },
    {
        food: 'Raisins, black',
        energy: 305.6,
    },
    {
        food: 'Sapota',
        energy: 73.3,
    },
    {
        food: 'Strawberry',
        energy: 24.6,
    },
    {
        food: 'Watermelon',
        energy: 20.3,
    },
    {
        food: 'Wood apple',
        energy: 78.1,
    },
    {
        food: 'Green chillies',
        energy: 45.6,
    },
    {
        food: 'Coriander seeds',
        energy: 268.8,
    },
    {
        food: 'Curry leaves',
        energy: 63.5,
    },
    {
        food: 'Garlic',
        energy: 123.8,
    },
    {
        food: 'Ginger, fresh',
        energy: 54.9,
    },
    {
        food: 'Mint leaves',
        energy: 37,
    },
    {
        food: 'Onion',
        energy: 48,
    },
    {
        food: 'Asafoetida',
        energy: 331.5,
    },
    {
        food: 'Cardamom, green',
        energy: 255,
    },
    {
        food: 'Red chillies',
        energy: 236.6,
    },
    {
        food: 'Cloves',
        energy: 186.6,
    },
    {
        food: 'Cumin seeds',
        energy: 304.4,
    },
    {
        food: 'Black cumin (Kalonji)',
        energy: 345,
    },
    {
        food: 'Fenugreek seeds',
        energy: 234.9,
    },
    {
        food: 'Nutmeg',
        energy: 463.6,
    },
    {
        food: 'Basil seeds',
        energy: 22,
    },
    {
        food: 'Anise seeds',
        energy: 153.3,
    },
    {
        food: 'Pepper, black',
        energy: 217.4,
    },
    {
        food: 'Poppy seeds',
        energy: 422.5,
    },
    {
        food: 'Turmeric powder',
        energy: 280.5,
    },
    {
        food: 'Almond',
        energy: 609.2,
    },
    {
        food: 'Arecanut dried',
        energy: 350.6,
    },
    {
        food: 'Cashew nut',
        energy: 582.6,
    },
    {
        food: 'Coconut dry',
        energy: 624,
    },
    {
        food: 'Coconut fresh',
        energy: 408.9,
    },
    {
        food: 'Gingelly seeds',
        energy: 507.6,
    },
    {
        food: 'Ground nut',
        energy: 520,
    },
    {
        food: 'Linseeds',
        energy: 443.8,
    },
    {
        food: 'Pine seed',
        energy: 594.1,
    },
    {
        food: 'Pistachio nuts',
        energy: 539.4,
    },
    {
        food: 'Sunflower seeds',
        energy: 586.2,
    },
    {
        food: 'Walnut',
        energy: 671,
    },
    {
        food: 'Flax seeds',
        energy: 534,
    },
    {
        food: 'Chia seeds',
        energy: 486,
    },
    {
        food: 'Jaggery cane',
        energy: 353.7,
    },
    {
        food: 'Sugarcane, juice',
        energy: 57.8,
    },
    {
        food: 'Milk, whole, buffalo',
        energy: 107.3,
    },
    {
        food: 'Milk, whole, cow',
        energy: 72.8,
    },
    {
        food: 'Paneer',
        energy: 257.8,
    },
    {
        food: 'Khoa',
        energy: 315.9,
    },
    {
        food: 'Soy milk',
        energy: 54,
    },
    {
        food: 'Tofu',
        energy: 76,
    },
    {
        food: 'Egg, whole, raw',
        energy: 134.7,
    },
    {
        food: 'Egg white, raw',
        energy: 44.6,
    },
    {
        food: 'Egg, yolk, raw',
        energy: 296.8,
    },
    {
        food: 'Chicken, leg, skinless',
        energy: 383.6,
    },
    {
        food: 'Chicken, thigh, skinless',
        energy: 199.8,
    },
    {
        food: 'Chicken, breast, skinless',
        energy: 168.2,
    },
    {
        food: 'Chicken, liver',
        energy: 123.8,
    },
    {
        food: 'Goat',
        energy: 188,
    },
    {
        food: 'Sheep, shoulder',
        energy: 200.7,
    },
    {
        food: 'Sheep, chops',
        energy: 118.5,
    },
    {
        food: 'Pork, shoulder',
        energy: 237.3,
    },
    {
        food: 'Pork, chops',
        energy: 178.7,
    },
    {
        food: 'Cat fish',
        energy: 108.9,
    },
    {
        food: 'Mackerel',
        energy: 101,
    },
    {
        food: 'Matha',
        energy: 92.9,
    },
    {
        food: 'Pomfret',
        energy: 123,
    },
    {
        food: 'Salmon',
        energy: 172.3,
    },
    {
        food: 'Sardine',
        energy: 152.2,
    },
    {
        food: 'Shark',
        energy: 95.1,
    },
    {
        food: 'Silver fish',
        energy: 132.6,
    },
    {
        food: 'Catla',
        energy: 94.1,
    },
    {
        food: 'Tuna',
        energy: 112.3,
    },
    {
        food: 'Crab',
        energy: 81.9,
    },
    {
        food: 'Lobster',
        energy: 89.6,
    },
    {
        food: 'Oyster',
        energy: 60.2,
    },
    {
        food: 'Tiger prawns',
        energy: 65.2,
    },
    {
        food: 'Clam',
        energy: 58,
    },
    {
        food: 'Squid',
        energy: 80,
    },
    {
        food: 'Ghee',
        energy: 920,
    },
    {
        food: 'Butter',
        energy: 717,
    },
    {
        food: 'Oil',
        energy: 900,
    },
    {
        food: 'Cheese',
        energy: 264.5,
    },
    {
        food: 'Coconut water',
        energy: 15.2,
    },
];

export default diets;
