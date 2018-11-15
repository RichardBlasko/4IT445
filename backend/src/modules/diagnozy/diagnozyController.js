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


export const updateDiagnozyController = async (req, res) => {
  let responses = [];
  await asyncForEach(req.body.items, async (item) => {
  //req.body.items.forEach(function (item) {
  const diagnozy =  db.Diagnozy.update(
    { nazevDiagnoza: item.nazevDiagnoza,
      popisDiagnoza: item.popisDiagnoza
     },
    { where: { id: item.id } }
  ).then(function(result){
    responses.push("1");
    console.log(responses); //returns array OK
    })
})
    console.log('Done');
    res.status(200).json({message:responses}) //null
}

//req.body.items.forEach(function (item) {
/*
const diagnozy = await db.Diagnozy.update(
  { nazevDiagnoza: item.nazevDiagnoza,
    popisDiagnoza: item.popisDiagnoza
   },
  { where: { id: req.body.id } }
)
  .then(result =>
    res.status(200).json({message:"Updated successfully"})
  )
  .catch(error =>
    res.status(500).json(error)
  )
*/

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
