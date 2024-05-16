const express = require('express');
const router = express.Router();


let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  // res.send(JSON.stringify({users}, null, 4));
  res.send(users);
});

function getDateString(date) {
  [dd, mm, yyyy] = date.split("-");
  return new Date(yyyy+"/"+mm+"/"+dd);
}
// GET users sorted by birth date (DOB)
router.get("/sort", (req, res) => {
  let sortedUser = users.sort((a,b) => {
    let d1 = getDateString(a.DOB);
    let d2 = getDateString(b.DOB);
    return d1-d2;
  });

  res.send(sortedUser);
})

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  const param = req.params.email;
  let filtered_user = users.filter((user) => user.email === param);
  res.send(filtered_user);
});

// GET by specific Last Name request: Retrieve user(s) using last name
router.get("/lastName/:lastName", (req, res) => {
  const param = req.params.lastName;
  let filtered_users = users.filter((user) => user.lastName === param);
  res.send(filtered_users);
})

// POST request: Create a new user
router.post("/", (req, res) => {
  users.push({
    "firstName": req.query.firstName, "lastName": req.query.lastName,
    "email": req.query.email, "DOB": req.query.DOB
  });
  res.send(`The user ${req.query.firstName} ${req.query.lastName} has been added to the list`)
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let filtered_users = users.filter((user) => user.email === email);

  if (filtered_users.length > 0) {
    let filtered_user = filtered_users[0];
    let dob = req.query.DOB;
    if (dob) {
      console.log(dob);
      filtered_user.DOB = dob;
    }

    let firstname = req.query.firstName;
    if (firstname) {
      console.log(firstname);
      filtered_user.firstName = firstname;
    }

    let lastname = req.query.lastName;
    if (lastname) {
      console.log(lastname);
      filtered_user.lastName = lastname;
    }

    users = users.filter((user) => user.email != email);
    users.push(filtered_user);
    res.send(`User with the email  ${email} updated.`);
  } else {
    res.send("Unable to find user!");
  }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter((user) => user.email != email);
  res.send(`User with the email  ${email} deleted.`);
});

module.exports = router;
