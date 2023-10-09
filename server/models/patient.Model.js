module.exports = (connection, DataTypes) => {
    const Patient = connection.define("Patient", {
        name:{
            type:DataTypes.STRING
        },
        age:{
            type:DataTypes.INTEGER
        },
        gender:{
            type:DataTypes.ENUM,
            values:["male","female"]
        },
        phone:{
            type:DataTypes.INTEGER,
            unique:true
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            validate:{
                isEmail:true
            }
        },
        address:{
            type:DataTypes.STRING,
        },
        isBlocked:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },
        password:{
            type:DataTypes.STRING
        }
    })
    return Patient

}