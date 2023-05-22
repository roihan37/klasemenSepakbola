'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Clubs',[{
      logo : "https://1.bp.blogspot.com/-TyOZVGuEHfY/YFbqtxpHdpI/AAAAAAAACC0/E7w-ei7pMdYEh09bApfnxBXiImFRFCNSQCNcBGAsYHQ/s320/Persib%2BBandung.png",
      name : "Persib",
      city : "Bandung",
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      logo : "https://upload.wikimedia.org/wikipedia/id/9/94/Persija_Jakarta_logo.png",
      name : "Persija",
      city : "Jakarta",
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      logo : "https://e7.pngegg.com/pngimages/794/708/png-clipart-persebaya-surabaya-bhayangkara-fc-liga-1-persegres-gresik-united-persela-lamongan-bonek-logo-indonesia.png",
      name : "Persibaya",
      city : "Surabaya",
      createdAt : new Date(),
      updatedAt : new Date()
     },{
      logo : "https://upload.wikimedia.org/wikipedia/id/0/06/Logo_Arema_Malang.png",
      name : "Arema",
      city : "Malang",
      createdAt : new Date(),
      updatedAt : new Date()
     }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Clubs', null, {})
  }
};
