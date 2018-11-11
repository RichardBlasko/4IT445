import db from '../../models/';

export const seznamVController = async (req, res) => {
  const vysledky = await db.Seznamvysledku.findAll({});
  res.json({ vysledky });
};

export const createSeznamVController =  async (req, res) => {

  const newVysledek = await db.Seznamvysledku.create(req.body);

  res.json({
    ok: true,
    newVysledek,
  });
};
