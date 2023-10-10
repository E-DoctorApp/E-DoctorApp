module.exports = (connection, DataTypes) => {
    const Doctor = connection.define("Doctor", {
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        cin: {
            type: DataTypes.INTEGER,
            validate: {
                max: 8,
                min: 8
            }
        },
        avatarUrl: {
            type: DataTypes.TEXT
        },
        papers: {
            type: DataTypes.JSON,
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
            type: DataTypes.ENUM,
            values: ["Neurologist", "Dermatology", "Gynecologist", "Generalist", "Radiology", "Orthopedics", "Dentistry", "Surgery"]
        },
        password: {
            type: DataTypes.STRING
        }
    })
    return Doctor

}