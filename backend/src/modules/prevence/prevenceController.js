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

export const deletePrevenceController = async (req, res) => {

  const deletedVysledek = await db.Seznamvysledku.destroy({

    where: {
      "idPrevence": req.body.id
    }
})

  const deletedPrevence = await db.Prevence.destroy({

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


export const updatePrevenceController = async (req, res) => {
  const responses = await db.sequelize.transaction(transaction =>
    Promise.all(
      req.body.items.map(item =>
        db.Prevence.update(
          {
            nazevPrevence: item.nazevPrevence,
            duvodPrevence: item.duvodPrevence,
            popisPrevence: item.popisPrevence,
            pohlavi: item.pohlavi,
            obrazek: item.obrazek
          },
          { where: { id: item.id }, transaction }
        )
      )
    )
  );

  console.log("Done");
  res.status(200).json({ message: responses });
};
