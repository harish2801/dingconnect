module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define("Bookings", {
    fromMob: {
      type: DataTypes.STRING,
    },
    fromAddr: {
      type: DataTypes.STRING,
    },
    fromEmail: {
      type: DataTypes.STRING,
    },
    fromPincode: {
      type: DataTypes.STRING,
    },
    fromCust: {
      type: DataTypes.STRING,
    },
    toMob: {
      type: DataTypes.STRING,
    },
    toAddr: {
      type: DataTypes.STRING,
    },
    toEmail: {
      type: DataTypes.STRING,
    },
    toPincode: {
      type: DataTypes.STRING,
    },
    toCust: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    qty: {
      type: DataTypes.STRING,
    },
    shipType: {
      type: DataTypes.STRING,
    },
    awbnumber: {
      type: DataTypes.STRING,
    },
    courierName: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.STRING,
    },
  });
  return Bookings;
};
