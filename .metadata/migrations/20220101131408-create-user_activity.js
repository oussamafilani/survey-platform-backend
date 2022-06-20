'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user_activity', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            answers: {
                type: Sequelize.JSONB,
                defaultValue: {},
            },
            info: {
                type: Sequelize.JSONB,
                defaultValue: {},
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
                allowNull: true,
            },
            activityId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'activity',
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
        await queryInterface.dropTable('user_activity');
    },
};
