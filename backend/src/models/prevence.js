module.exports = (sequelize, DataTypes) => {
  const Prevence = sequelize.define(
    'Prevence',
    {
      nazevPrevence: DataTypes.STRING,
      duvodPrevence: DataTypes.TEXT,
      popisPrevence: DataTypes.TEXT,
      obrazek: DataTypes.STRING,
    },
    {}
  );
  return Prevence;
};
