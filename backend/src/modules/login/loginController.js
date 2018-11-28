import db from '../../models/';

export const loginController = async (req, res) => {
  const users = await db.Users.findAll({});
  res.json({ users });
};
