const bcrypt = require("bcrypt");

const password = "12345";

bcrypt.genSalt(10).then((salt) => {
  bcrypt.hash(password, salt).then((hash) => {
    console.log(hash);
  });
});

bcrypt.compare(password, hash, (err, result) => {
  console.log(result); // true ou false
});
