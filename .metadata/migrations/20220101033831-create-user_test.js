'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user_test', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            complited: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            score: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            info: {
                type: Sequelize.JSONB,
                defaultValue: {},
            },
            begin: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            end: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            testId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'test',
                    key: 'id',
                },
                allowNull: true,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'user',
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
        await queryInterface.dropTable('user_test');
    },
};
