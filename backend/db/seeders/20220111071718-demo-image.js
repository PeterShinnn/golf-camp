'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        url: "https://golf-pass.brightspotcdn.com/dims4/default/3e88833/2147483647/strip/true/crop/1440x929+0+15/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolf-pass-brightspot.s3.amazonaws.com%2Fe5%2F59%2F005a997ecce9c74854681086fb76%2F2083.jpg",
        spotId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://andaluciagolf.com/images/NEWS246/Augusta%20National%2012.jpg",
        spotId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2015/08/04/55c1221e4759c60c08234b38_pine-valley-gc-18.jpg.rend.hgtvcom.1280.853.suffix/1573512242882.jpeg",
        spotId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://golfaficionadomag.com/wp-content/uploads/2019/08/Royal-Dornoch-aerial.jpg",
        spotId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://cdn.deemples.com/wp-content/uploads/2020/04/Royal-Melbourne-Golf-Club.jpg",
        spotId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://golf.com/wp-content/uploads/2018/06/member.jpg",
        spotId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://media-cdn.tripadvisor.com/media/photo-s/02/8a/b7/c1/the-swilcan-bridge-on.jpg",
        spotId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://www.golfchannel.com/sites/default/files/2020/06/12/muirfield_village_1920_14th_hole.jpg",
        spotId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://jamieonsport.files.wordpress.com/2013/06/merion-golf-club.jpg",
        spotId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://golf.com/wp-content/uploads/2016/11/2016-US-Open-Oakmont.jpg",
        spotId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://www.pebblebeach.com/content/uploads/Pebble-Beach-Golf-Links94-1-900x600.jpg",
        spotId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://golf.com/wp-content/uploads/2020/10/national-golf-links-of-america.jpg",
        spotId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2020/09/Winged%20Foot%20West%20Dom%20Furore%202020%20U.S.%20Open.jpg",
        spotId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://pbs.twimg.com/media/ED5uSxEX4AAS-NZ?format=jpg&name=large",
        spotId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://golf.com/wp-content/uploads/2019/11/cape-kidnappers.jpg",
        spotId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://coloradoavidgolfer.com/wp-content/uploads/2018/05/Awarii_Dunes_620x372.jpg",
        spotId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://www.golfcoursearchitecture.net/images/Kingston-Heath_Credit-Gary-Lisbon_940x443.jpg",
        spotId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://catalogue.novascotia.com/ManagedMedia/22370.jpg",
        spotId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://i.pinimg.com/originals/c0/af/39/c0af39f645849c79de684c96655b133c.jpg",
        spotId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://golf-pass.brightspotcdn.com/dims4/default/d008898/2147483647/strip/true/crop/3649x2179+0+126/resize/1440x860!/format/jpg/quality/90/?url=https%3A%2F%2Fgolf-pass-brightspot.s3.amazonaws.com%2Fce%2Fa1%2Fda83c49193310e8e2960a4cfd657%2Fp.php",
        spotId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://todaysgolfer-images.bauersecure.com/pagefiles/1021323/1752x1168/111_sunningdale_old.jpg%3Fmode=pad",
        spotId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://www.insidegolf.com.au/wp-content/uploads/Cape-Wickham-17th-Hole-Lighthouse.jpg",
        spotId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/273576999.jpg?k=c774cf2d8c2290e719e07da5bc268c83d1a938bd72b250e622bfa3e26e410076&o=&hp=1",
        spotId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://images.yourgolftravel.com/pb/bg-mobile_1833.jpg",
        spotId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: "https://www.top100golfcourses.com/img/courses/royal-portrush-dunluce_0189b7b2-e5d5-40df-92ad-b95da0ed25f8.jpg",
        spotId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Images', {}, {});
  }
};
