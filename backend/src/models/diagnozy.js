module.exports = (sequelize, DataTypes) => {
  const Diagnozy = sequelize.define(
    'Diagnozy',
    {
      nazevDiagnoza: DataTypes.STRING,
      popisDiagnoza: DataTypes.TEXT,
    },
    {}
  );
  return Diagnozy;
};
