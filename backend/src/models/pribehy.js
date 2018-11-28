module.exports = (sequelize, DataTypes) => {
  const Pribehy = sequelize.define(
    'Pribehy',
    {
      autorPribeh: DataTypes.STRING,
      autorVek: DataTypes.INTEGER,
      textPribeh: DataTypes.TEXT,
      idDiagnozy: DataTypes.INTEGER
    },
    {}
  );
  return Pribehy;
};
