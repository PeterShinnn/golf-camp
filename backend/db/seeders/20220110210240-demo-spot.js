'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        name: "Royal County Down G.C.",
        address: "36 Golf Links Rd",
        city: " Newcastle BT33 0AN",
        state: "",
        country: "United Kingdom",
        lat: 54.2179,
        lng: 5.8832,
        price: 439.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Augusta National G.C.",
        address: "2604 Washington Rd",
        city: "Augusta",
        state: "GA",
        country: "United States",
        lat: 33.5021,
        lng: 82.0226,
        price: 299.99,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pine Valley (N.J.) G.C.",
        address: "1 E Atlantic Ave",
        city: "Pine Valley",
        state: "NJ",
        country: "United States",
        lat: 39.784484,
        lng: -74.970466,
        price: 199.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Royal Dornoch G.C.",
        address: "Royal Dornoch Club Golf, Golf Rd",
        city: "Dornoch IV25 3LW",
        state: "",
        country: "United Kingdom",
        lat: 57.8790,
        lng: 4.0237,
        price: 99.99,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Royal Melbourne G.C.",
        address: "Cheltenham Rd",
        city: "Black Rock VIC 3193",
        state: "",
        country: "Australia",
        lat: 37.9694,
        lng: 145.0304,
        price: 199.99,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shinnecock Hills G.C.",
        address: "200 Tuckahoe Rd",
        city: " Southampton",
        state: "NY",
        country: "United States",
        lat: 40.8940,
        lng: 72.4397,
        price: 229.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Old Course (St. Andrews Link)",
        address: "W Sands Rd",
        city: "St Andrews KY16 9XL",
        state: "",
        country: "United Kingdom",
        lat: 56.3438,
        lng: 2.8031,
        price: 269.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Muirfield",
        address: "Duncur Rd",
        city: "Muirfield",
        state: "Gullane EH31 2EG",
        country: "United Kingdom",
        lat: 56.0418,
        lng: 2.8208,
        price: 149.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Merion G.C. (East)",
        address: "450 Ardmore Ave",
        city: "Ardmore",
        state: "PA",
        country: "United States",
        lat: 39.9993295,
        lng: -75.3115598,
        price: 99.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Oakmont Country Club",
        address: "1233 Hulton Rd",
        city: "Oakmont",
        state: "PA",
        country: "United States",
        lat: 40.5259,
        lng: 79.8269,
        price: 329.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pebble Beach G. Links",
        address: "1700 17 Mile Dr",
        city: "Pebble Beach",
        state: "CA",
        country: "United States",
        lat: 36.5697,
        lng: 121.9498,
        price: 249.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "National Golf Links of America",
        address: "149 Sebonac Inlet Rd",
        city: "Southampton",
        state: "NY",
        country: "United States",
        lat: 40.9137,
        lng: 72.4536,
        price: 0,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Winged Foot G.C. (West)",
        address: "851 Fenimore Rd",
        city: "Mamaroneck",
        state: "NY",
        country: "United States",
        lat: 40.9577,
        lng: 73.7535,
        price: 99.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fishers Island Club",
        address: "20449 E Main Rd",
        city: "Fishers Island",
        state: "NY",
        country: "United States",
        lat: 41.2800,
        lng: 71.9476,
        price: 129.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cape Kidnappers Golf Course",
        address: "446 Clifton Road",
        city: "Te Awanga 4180",
        state: "",
        country: "New Zealand",
        lat: 39.6536,
        lng: 177.0408,
        price: 149.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sand Hills G.C.",
        address: "36410 Sand Hills Rd",
        city: "Mullen",
        state: "NE",
        country: "United States",
        lat: 41.8553,
        lng: 101.0928,
        price: 99.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kingston Heath G.C.",
        address: "Kingston Rd",
        city: "Cheltenham VIC 3192",
        state: "",
        country: "Australia",
        lat: 37.9558,
        lng: 145.0858,
        price: 199.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cabot Cliffs",
        address: "39 Whitman Way",
        city: "Inverness, NS B0E 1N0",
        state: "",
        country: "Canada",
        lat: 46.2526,
        lng: 61.2831,
        price: 89.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hirono Golf Club",
        address: "???673-0541 Hyogo",
        city: "Miki, Shijimicho Hirono",
        state: "",
        country: "Japan",
        lat: 34.7704,
        lng: 135.0217,
        price: 99.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trump Turnberry",
        address: "Turnberry",
        city: "Ayrshire KA26 9LT",
        state: "",
        country: "United Kingdom",
        lat: 55.3141,
        lng: 4.8289,
        price: 249.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sunningdale Golf Club",
        address: "Ridgemount Rd",
        city: "Ascot SL5 9RR",
        state: "",
        country: "United Kingdom",
        lat: 51.3888,
        lng: 0.6313,
        price: 99.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cape Wickham Golf Links",
        address: "Cape Wickham Rd",
        city: "Wickham TAS 7256",
        state: "",
        country: "Australia",
        lat: 39.5962,
        lng: 143.9344,
        price: 109.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Portmarnock Golf Club",
        address: "Golf Links Rd, Portmarnock,  Co.",
        city: "Dublin",
        state: "",
        country: "Ireland",
        lat: 53.4072,
        lng: 6.1238,
        price: 129.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Carnoustie Golf Links",
        address: "Links House, Links Parade",
        city: "Carnoustie DD7 7JE",
        state: "",
        country: "United Kingdom",
        lat: 56.4964,
        lng: 2.7162,
        price: 149.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Royal Portrush Golf Club",
        address: "Dunluce Rd",
        city: " Portrush BT56 8JQ",
        state: "",
        country: "United Kingdom",
        lat: 55.1997,
        lng: 6.6354,
        price: 149.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Spots', {}, {});
  }
};
