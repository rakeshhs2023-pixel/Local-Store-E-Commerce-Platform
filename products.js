// Product data - Nike and Puma shoe catalog
const products = [
    // Running
    {
        id: 1,
        name: "Nike Air Zoom Runner",
        category: "Running",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        description: "Nike running shoes with responsive foam cushioning and breathable mesh support.",
        rating: 4.8,
        reviews: 228
    },
    {
        id: 2,
        name: "Nike Revolution Sprint",
        category: "Running",
        price: 94.99,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
        description: "Lightweight Nike running shoes built for daily miles and smooth transitions.",
        rating: 4.6,
        reviews: 181
    },
    {
        id: 3,
        name: "Nike Pegasus Flow",
        category: "Running",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&h=500&fit=crop",
        description: "Nike performance runners with extra heel comfort and springy energy return.",
        rating: 4.9,
        reviews: 264
    },
    {
        id: 4,
        name: "Puma Velocity Nitro",
        category: "Running",
        price: 109.99,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
        description: "Puma running shoes with lightweight support and stable grip for road training.",
        rating: 4.7,
        reviews: 197
    },
    {
        id: 5,
        name: "Puma Fast-R Pace",
        category: "Running",
        price: 134.99,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
        description: "High-performance Puma runners made for pace sessions and long-distance comfort.",
        rating: 4.8,
        reviews: 209
    },
    {
        id: 6,
        name: "Puma Ignite Mesh",
        category: "Running",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&h=500&fit=crop",
        description: "Breathable Puma running shoes with cushioned midsoles and flexible toe-off.",
        rating: 4.5,
        reviews: 166
    },
    {
        id: 7,
        name: "Nike Infinity Move",
        category: "Running",
        price: 124.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
        description: "Nike running shoes designed for comfort-focused training and stable landings.",
        rating: 4.7,
        reviews: 215
    },
    {
        id: 8,
        name: "Puma Daily Runner",
        category: "Running",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&h=500&fit=crop",
        description: "Versatile Puma daily trainers with soft foam and a clean athletic profile.",
        rating: 4.4,
        reviews: 149
    },

    // Casual
    {
        id: 9,
        name: "Nike Court Vision Low",
        category: "Casual",
        price: 84.99,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop",
        description: "Classic Nike casual shoes inspired by court style with easy all-day comfort.",
        rating: 4.6,
        reviews: 241
    },
    {
        id: 10,
        name: "Nike Everyday Street",
        category: "Casual",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?w=500&h=500&fit=crop",
        description: "Nike casual lace-ups with clean lines, cushioned interiors, and street-ready wear.",
        rating: 4.5,
        reviews: 172
    },
    {
        id: 11,
        name: "Nike Flex Walk",
        category: "Casual",
        price: 74.99,
        image: "https://images.unsplash.com/photo-1517260911205-8a3b66e3dfb1?w=500&h=500&fit=crop",
        description: "Flexible Nike casual shoes made for comfortable everyday walking and travel.",
        rating: 4.4,
        reviews: 164
    },
    {
        id: 12,
        name: "Puma Smash Classic",
        category: "Casual",
        price: 76.99,
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&h=500&fit=crop",
        description: "Puma casual shoes with soft padding, low-top shape, and timeless styling.",
        rating: 4.5,
        reviews: 188
    },
    {
        id: 13,
        name: "Puma Club 5V5",
        category: "Casual",
        price: 81.99,
        image: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=500&h=500&fit=crop",
        description: "Sporty Puma casual sneakers with durable side panels and cushioned comfort.",
        rating: 4.6,
        reviews: 202
    },
    {
        id: 14,
        name: "Puma Urban Ease",
        category: "Casual",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop",
        description: "Simple Puma casual shoes built for daily wear, errands, and easy styling.",
        rating: 4.3,
        reviews: 137
    },
    {
        id: 15,
        name: "Nike City Court Blue",
        category: "Casual",
        price: 86.99,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&h=500&fit=crop",
        description: "Nike court-inspired casual shoes with clean color blocking and supportive soles.",
        rating: 4.6,
        reviews: 194
    },
    {
        id: 16,
        name: "Puma SoftRide Daily",
        category: "Casual",
        price: 72.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
        description: "Puma casual shoes with SoftRide comfort and a relaxed sporty finish.",
        rating: 4.4,
        reviews: 158
    },

    // Basketball
    {
        id: 17,
        name: "Nike Air Flight Court",
        category: "Basketball",
        price: 139.99,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&h=500&fit=crop",
        description: "Nike basketball shoes with high-top support, responsive cushioning, and strong traction.",
        rating: 4.8,
        reviews: 286
    },
    {
        id: 18,
        name: "Nike Dunk Edge Pro",
        category: "Basketball",
        price: 144.99,
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&h=500&fit=crop",
        description: "Performance Nike basketball shoes tuned for sharp cuts and explosive takeoffs.",
        rating: 4.9,
        reviews: 271
    },
    {
        id: 19,
        name: "Nike Court Elevate Max",
        category: "Basketball",
        price: 134.99,
        image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&h=500&fit=crop",
        description: "Nike basketball shoes with impact protection and durable indoor-outdoor grip.",
        rating: 4.7,
        reviews: 233
    },
    {
        id: 20,
        name: "Puma Playmaker High",
        category: "Basketball",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&h=500&fit=crop",
        description: "Puma basketball shoes made for quick movement, strong ankle support, and control.",
        rating: 4.6,
        reviews: 214
    },
    {
        id: 21,
        name: "Puma Hoops Drive",
        category: "Basketball",
        price: 124.99,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
        description: "Puma court shoes with balanced cushioning and a stable feel on hard landings.",
        rating: 4.5,
        reviews: 188
    },
    {
        id: 22,
        name: "Puma Fastbreak Nitro",
        category: "Basketball",
        price: 136.99,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
        description: "Dynamic Puma basketball shoes with high-energy foam and multi-directional traction.",
        rating: 4.7,
        reviews: 226
    },
    {
        id: 23,
        name: "Nike Court Command",
        category: "Basketball",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&h=500&fit=crop",
        description: "Nike court shoes with locked-in fit, stable midsole, and game-ready grip.",
        rating: 4.8,
        reviews: 245
    },
    {
        id: 24,
        name: "Puma Slam Vision",
        category: "Basketball",
        price: 131.99,
        image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&h=500&fit=crop",
        description: "Puma basketball shoes designed for comfort, speed, and all-around court movement.",
        rating: 4.6,
        reviews: 204
    },

    // Formal
    {
        id: 25,
        name: "Nike Leather Office One",
        category: "Formal",
        price: 109.99,
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&h=500&fit=crop",
        description: "Nike formal leather shoes with polished finish and a comfortable insole.",
        rating: 4.5,
        reviews: 132
    },
    {
        id: 26,
        name: "Nike Business Derby",
        category: "Formal",
        price: 114.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop",
        description: "Smart Nike derby shoes suitable for office wear and formal meetings.",
        rating: 4.6,
        reviews: 119
    },
    {
        id: 27,
        name: "Puma Leather Select",
        category: "Formal",
        price: 104.99,
        image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop",
        description: "Refined Puma formal shoes with premium upper finish and all-day comfort.",
        rating: 4.4,
        reviews: 108
    },
    {
        id: 28,
        name: "Puma Evening Gloss",
        category: "Formal",
        price: 118.99,
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&h=500&fit=crop",
        description: "Gloss-finish Puma formal shoes ideal for events, dinners, and occasion wear.",
        rating: 4.5,
        reviews: 97
    },
    {
        id: 29,
        name: "Nike Boardroom Classic",
        category: "Formal",
        price: 112.99,
        image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=500&h=500&fit=crop",
        description: "Classic formal Nike shoes with elegant structure and soft underfoot support.",
        rating: 4.6,
        reviews: 126
    },
    {
        id: 30,
        name: "Puma Office Lace",
        category: "Formal",
        price: 101.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop",
        description: "Puma lace-up formal shoes with a clean silhouette and supportive inner lining.",
        rating: 4.3,
        reviews: 89
    },

    // Sneakers
    {
        id: 31,
        name: "Nike Air Force Street",
        category: "Sneakers",
        price: 124.99,
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&h=500&fit=crop",
        description: "Nike sneakers with a premium streetwear look, cushioned sole, and bold profile.",
        rating: 4.9,
        reviews: 322
    },
    {
        id: 32,
        name: "Nike Retro Flex",
        category: "Sneakers",
        price: 98.99,
        image: "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?w=500&h=500&fit=crop",
        description: "Retro-inspired Nike sneakers with soft foam comfort and everyday wearability.",
        rating: 4.7,
        reviews: 248
    },
    {
        id: 33,
        name: "Nike Street Nova",
        category: "Sneakers",
        price: 104.99,
        image: "https://images.unsplash.com/photo-1517260911205-8a3b66e3dfb1?w=500&h=500&fit=crop",
        description: "Chunky Nike sneakers with layered panels and a standout urban style.",
        rating: 4.8,
        reviews: 276
    },
    {
        id: 34,
        name: "Nike Court Blue One",
        category: "Sneakers",
        price: 96.99,
        image: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=500&h=500&fit=crop",
        description: "Nike sneakers with crisp color contrast and comfortable day-long cushioning.",
        rating: 4.6,
        reviews: 219
    },
    {
        id: 35,
        name: "Puma RS-X Motion",
        category: "Sneakers",
        price: 109.99,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop",
        description: "Puma sneakers with bold shape, soft support, and modern streetwear energy.",
        rating: 4.7,
        reviews: 234
    },
    {
        id: 36,
        name: "Puma Rider Play",
        category: "Sneakers",
        price: 92.99,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&h=500&fit=crop",
        description: "Puma sneakers with retro running inspiration and relaxed everyday comfort.",
        rating: 4.5,
        reviews: 185
    },
    {
        id: 37,
        name: "Puma Court Layer",
        category: "Sneakers",
        price: 88.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
        description: "Puma lifestyle sneakers with layered design, soft lining, and flexible soles.",
        rating: 4.4,
        reviews: 174
    },
    {
        id: 38,
        name: "Puma Street Classic",
        category: "Sneakers",
        price: 94.99,
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&h=500&fit=crop",
        description: "Puma sneakers with sleek low-top construction and easy daily styling.",
        rating: 4.6,
        reviews: 196
    },
    {
        id: 39,
        name: "Nike Everyday Air",
        category: "Sneakers",
        price: 101.99,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
        description: "Nike sneakers with cushioned comfort and a lightweight upper for daily use.",
        rating: 4.7,
        reviews: 211
    },
    {
        id: 40,
        name: "Puma Future Wave",
        category: "Sneakers",
        price: 106.99,
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&h=500&fit=crop",
        description: "Puma sneakers with futuristic paneling, plush comfort, and clean blue accents.",
        rating: 4.8,
        reviews: 227
    }
];
