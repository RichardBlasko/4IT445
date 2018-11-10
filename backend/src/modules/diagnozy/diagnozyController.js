import db from '../../models/';

export const diagnozyController = async (req, res) => {
  const diagnozy = await db.Diagnozy.findAll({});
  res.json({ diagnozy });
};

export const createDiagnozyController =
  async (req, res) => {

  const newDiagnoza = await db.Diagnozy.create(req.body);

  res.json({
    ok: true,
    newDiagnoza,
  });
};
