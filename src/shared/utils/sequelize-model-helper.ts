import { DataTypes } from 'sequelize';

export const auditColumns = {
    createdAt: {
        type: DataTypes.DATE,
    },
    createdBy: {
        type: DataTypes.UUID,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    updatedBy: {
        type: DataTypes.UUID,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
    },
};
