module.exports = (sequelize: any, DataTypes: any) => {
    const Book = sequelize.define('book', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        category: {
            type: DataTypes.ENUM("action", "comedy", "horror"),
            defaultValue: "comedy",
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        outdate: {
            type: DataTypes.DATE,
            
        }
    },
        {
            freezeTableName: true,
            timestamps: true,
        }
    )

    return Book;
}