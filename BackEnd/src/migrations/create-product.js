"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
  
    await queryInterface.createTable("Products", {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      qty: {
        type: Sequelize.STRING,
      },
      catagoryId: {
        type: Sequelize.STRING,
      },
      imagesId: {
        type: Sequelize.STRING,
      },
      metakey: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },

      price: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price_sale: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
    .then{
      
    };
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
