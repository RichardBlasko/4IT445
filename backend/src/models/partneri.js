module.exports = (sequelize, DataTypes) => {
  const Partneri = sequelize.define(
    'Partneri',
    {
      nazevPartner: DataTypes.STRING,
      popisPartner: DataTypes.TEXT,
      kontaktPartner: DataTypes.STRING,
      logoPartner: DataTypes.STRING,
      idDiagnoza: DataTypes.INTEGER
    },
    {}
  );
  return Partneri;
};
