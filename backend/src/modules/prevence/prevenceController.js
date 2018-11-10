import db from '../../models/';

export const prevenceController = async (req, res) => {
  const prevence = await db.Prevence.findAll({});
  res.json({ prevence });
};
