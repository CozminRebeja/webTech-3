let usersData = {
  users: [
    {
      id: 1,
      name: 'SpongeBob',
      surname: 'SquarePants',
      age: 28,
      photo: 'photo1.jpg',
      cover: 'cover1.jpg',
    },
    {
      id: 2,
      name: 'Squidward',
      surname: 'Tentacles',
      age: 41,
      photo: 'photo2.jpg',
      cover: 'cover2.jpg',
    },
    {
      id: 3,
      name: 'Patrick',
      surname: 'Star',
      age: 29,
      photo: 'photo3.jpg',
      cover: 'cover3.jpg',
    },
  ],
};

function getUsers(searchQuery = '') {
  if (searchQuery) {
    return usersData.users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.surname.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  return usersData.users;
}

function getUser(id) {
  return usersData.users.find((user) => user.id === id);
}

module.exports = {
  getUsers,
  getUser,
  usersData,
};
