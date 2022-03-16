// fetch("http://localhost:3000/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch("http://localhost:300/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// //   synthetic sugar
// async function getAllUsers() {
//   const res = await fetch("http://localhost:3000/users");
//   const data = await res.json();
//   console.log(data);
// }
// getAllUsers();

//   synthetic sugar
async function getUser(userId) {
  const res = await fetch(`http://localhost:3000/users/${userId}`);
  const data = await res.json();
  console.log(data);
}
getUser(1);
getUser(50);
getUser(39);

const data = {
  email: "hello@mine.com",
  firstName: "Herro",
  gender: "Female",
  lastName: "Marvin",
  username: "MarvinHerro",
};

async function createUser(userInfo) {
  const res = await fetch(`http://localhost:3000/users`, {
    method: "post",
    body: JSON.stringify(userInfo),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
}
// createUser(data);
async function updateUser(userId, userInfo) {
  const res = await fetch(`http://localhost:3000/users/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(userInfo),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
}
updateUser(1, { firstName: "Esi" });

async function deleteUser(UserId) {
  const res = await fetch(`http://localhost:3000/users/${UserId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
}
deleteUser(2);
