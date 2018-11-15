module.exports = (sequelize, DataTypes) => {
  const Seznamvysledku = sequelize.define(
    'Seznamvysledku',
    {
      idPrevence: DataTypes.INTEGER,
      idDiagnoza: DataTypes.INTEGER,
      vekOd: DataTypes.INTEGER,
      vekDo: DataTypes.INTEGER,
      pohlavi: DataTypes.CHAR,
      periodicita: DataTypes.INTEGER,
      lecimSeS: DataTypes.BOOLEAN,
    },
    {}
  );
  return Seznamvysledku;
};
