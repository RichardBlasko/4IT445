import db from '../../models/';

export const diagnozyController = async (req, res) => {
  const diagnozy = await db.Diagnozy.findAll({});
  res.json({ diagnozy });
};

export const createDiagnozyController = async (req, res) => {

  const newDiagnoza = await db.Diagnozy.create(req.body);

  res.json({
    ok: true,
    newDiagnoza,
  });
};

export const deleteDiagnozyController = async (req, res) => {

  const deletedVysledek = await db.Seznamvysledku.destroy({

    where: {
      "idDiagnoza": req.body.id
    }
})

  const deletedDiagnoza = await db.Diagnozy.destroy({

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
