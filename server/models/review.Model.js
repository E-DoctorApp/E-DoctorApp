module.exports = (connection, DataTypes) => {
    const Review = connection.define("Review", {
        rate: {
            type: DataTypes.INTEGER
        },
        content: {
            type: DataTypes.STRING
        },
    })
    return Review
}