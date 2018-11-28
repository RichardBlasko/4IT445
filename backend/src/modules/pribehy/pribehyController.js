import db from '../../models/';


export const pribehyController = async (req, res) => {
  const pribehy = await db.Pribehy.findAll({});
  res.json({ pribehy });
};

export const createPribehyController = async (req, res) => {

  const newPribeh = await db.Pribehy.create(req.body);

  res.json({
    ok: true,
    newPribeh,
  });
};

export const deletePribehyController = async (req, res) => {


  const deletedPribeh = await db.Pribehy.destroy({

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

export const updatePribehyController = async (req, res) => {
  const responses = await db.sequelize.transaction(transaction =>
    Promise.all(
      req.body.items.map(item =>
        db.Pribehy.update(
          {
            autorPribeh: item.autorPribeh,
            autorVek: item.autorVek,
            textPribeh: item.textPribeh,
            idDiagnozy: item.idDiagnozy
          },
          { where: { id: item.id }, transaction }
        )
      )
    )
  );

  console.log("Done");
  res.status(200).json({ message: responses });
};
