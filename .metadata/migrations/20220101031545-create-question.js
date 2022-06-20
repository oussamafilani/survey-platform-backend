'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('question', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            label: {
                type: Sequelize.STRING,
            },
            quizId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'quiz',
                    key: 'id',
                },
                allowNull: true,
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            deleted: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('question');
    },
};
