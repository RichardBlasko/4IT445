module.exports = (sequelize, DataTypes) => {
  const Prevence = sequelize.define(
    'Prevence',
    {
      nazevPrevence: DataTypes.STRING,
      duvodPrevence: DataTypes.TEXT,
      popisPrevence: DataTypes.TEXT,
      pohlavi: DataTypes.CHAR,
      obrazek: DataTypes.STRING,
    },
    {}
  );
  return Prevence;
};
