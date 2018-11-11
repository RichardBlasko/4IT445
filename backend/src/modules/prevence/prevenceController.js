import db from '../../models/';

export const prevenceController = async (req, res) => {
  const prevence = await db.Prevence.findAll({});
  res.json({ prevence });
};

export const createPrevenceController =  async (req, res) => {

  const newPrevence = await db.Prevence.create(req.body);

  res.json({
    ok: true,
    newPrevence,
  });
};
