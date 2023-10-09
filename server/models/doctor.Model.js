module.exports = (connection, DataTypes) => {
    const Doctor = connection.define("Doctor", {
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        gender: {
            type: DataTypes.ENUM,
            values: ["male", "female"]
        },
        phone: {
            type: DataTypes.INTEGER,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        address: {
            type: DataTypes.STRING,
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        department: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })
    return Doctor

}