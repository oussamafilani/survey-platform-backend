'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('question_option', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            label: {
                type: Sequelize.STRING,
            },
            right_answer: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            questionId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'question',
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
        await queryInterface.dropTable('question_option');
    },
};
