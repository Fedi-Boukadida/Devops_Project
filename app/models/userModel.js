
let users = [];
let idCounter = 1;

exports.getAll = () => users;

exports.create = (userData) => {
  const user = { id: idCounter++, ...userData };
  users.push(user);
  return user;
};
