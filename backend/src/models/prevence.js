module.exports = (sequelize, DataTypes) => {
  const Prevence = sequelize.define(
    'Prevence',
    {
      nazevPrevence: DataTypes.STRING,
      duvodPrevence: DataTypes.STRING,
      popisPrevence: DataTypes.STRING,
      obrazek: DataTypes.STRING,
    },
    {}
  );
  return Prevence;
};
