import db from '../../models/';


export const diagnozyController = async (req, res) => {
  const diagnozy = await db.Diagnozy.findAll({});
  res.json({ diagnozy });
};


export const oneDiagnozyController = async (req, res) => {
  const {id} = req.params
  console.log(id)
  const diagnozy = await db.Diagnozy.findByPk(id);
  res.json({diagnozy});
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

export const updateDiagnozyController = async (req, res) => {
  const responses = await db.sequelize.transaction(transaction =>
    Promise.all(
      req.body.items.map(item =>
        db.Diagnozy.update(
          {
            nazevDiagnoza: item.nazevDiagnoza,
            popisDiagnoza: item.popisDiagnoza
          },
          { where: { id: item.id }, transaction }
        )
      )
    )
  );

  console.log("Done");
  res.status(200).json({ message: responses });
};
