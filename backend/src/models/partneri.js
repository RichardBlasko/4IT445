module.exports = (sequelize, DataTypes) => {
  const Partneri = sequelize.define(
    'Partneri',
    {
      nazevPartner: DataTypes.STRING,
      popisPartner: DataTypes.TEXT,
      odkazPartner: DataTypes.STRING,
      logoPartner: DataTypes.STRING,
      obrazokPartner: DataTypes.STRING,
      idDiagnoza: DataTypes.INTEGER,
    },
    {}
  );
  return Partneri;
};
