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
        name: "Muirfield ",
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
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Spots', {}, {});
  }
};