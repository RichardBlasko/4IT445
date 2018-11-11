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

export const deleteSeznamVController = async (req, res) => {
  const deletedVysledek = await db.Seznamvysledku.destroy({
    where: {
      "id": req.body.id
    }
}
  ).then(function (deletedRecord) {
            if(deletedRecord === 1){
                res.status(200).json({message:"Deleted successfully"});
            }
            else
            {
                res.status(404).json({message:"record not found"})
            }
        })
        .catch(function (error){
            res.status(500).json(error);
        });
};
