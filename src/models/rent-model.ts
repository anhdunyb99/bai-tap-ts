module.exports = (sequelize: any, DataTypes: any) => {
    const RentBook = sequelize.define('rents', {
        books: {
            type: DataTypes.STRING,
            /* allowNull : false, */
        },
        users: {
            type: DataTypes.STRING,
            /* allowNull : false, */
        },
        start_time: {
            type: DataTypes.DATE,
            /* allowNull : false, */
        },
        end_time: {
            type: DataTypes.DATE,
            /* allowNull : false, */
        }
    },
        {
            freezeTableName: true,
            timestamps: true,
        }
    )

    return RentBook;
}