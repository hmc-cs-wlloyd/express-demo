const { addUser, getUser, updateUser, deleteUser } = require("../db/user");

putUserProvider = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.date_of_birth) {
    res
      .status(400)
      .send("Bad Request: name, email, and date_of_birth are required fields");
    return;
  }
  user = await addUser(req.body.name, req.body.email, req.body.date_of_birth);
  res.json(user);
};

getUserProvider = async (req, res) => {
  user = await getUser(req.params.userID);
  if (!user) {
    res.status(404).send("Not Found");
    return;
  }
  res.json(user);
};

postUserProvider = async (req, res) => {
  currentUser = await getUser(req.params.userID);
  if (!currentUser) {
    res.status(404).send("Not Found");
    return;
  }
  updatedUser = await updateUser(
    req.params.userID,
    req.body.name ?? currentUser.name,
    req.body.email ?? currentUser.email,
    req.body.date_of_birth ?? currentUser.date_of_birth
  );
  if (!updatedUser) {
    res.status(404).send("Not Found");
    return;
  }
  res.json(updatedUser);
};

deleteUserProvider = async (req, res) => {
  userID = await deleteUser(req.params.userID);
  if (!userID) {
    res.status(404).send("Not Found");
    return;
  }
  res.json(userID);
};

module.exports = {
  putUserProvider,
  getUserProvider,
  postUserProvider,
  deleteUserProvider,
};
