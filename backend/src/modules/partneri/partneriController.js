import db from '../../models/';


export const partneriController = async (req, res) => {
  const partneri = await db.Partneri.findAll({});
  res.json({ partneri });
};

export const createPartneriController = async (req, res) => {

  const newPartner = await db.Partneri.create(req.body);

  res.json({
    ok: true,
    newPartner,
  });
};

export const deletePartneriController = async (req, res) => {

  const deletedPartner = await db.Partneri.destroy({

    where: {
      "id": req.body.id
    }
  })
  .then(function (deletedRecord) {
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

export const updatePartneriController = async (req, res) => {
  const responses = await db.sequelize.transaction(transaction =>
    Promise.all(
      req.body.items.map(item =>
        db.Partneri.update(
          {
            nazevPartner: DataTypes.STRING,
            popisPartner: DataTypes.TEXT,
            odkazPartner: DataTypes.STRING,
            logoPartner: DataTypes.STRING,
            obrazokPartner: DataTypes.STRING,
            idDiagnoza: DataTypes.INTEGER,
          },
          { where: { id: item.id }, transaction }
        )
      )
    )
  );

  console.log("Done");
  res.status(200).json({ message: responses });
};
