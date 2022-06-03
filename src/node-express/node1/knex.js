const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "db_user",
    password: "db_password",
    database: "db_name",
  },
});

const data = {
  name: "José",
  wage: 750.25,
};

knex
  .insert(data)
  .into("employees")
  .then((data) => {
    console.log(`Dados inseridos: ${data}`);
  })
  .catch((err) => {
    console.log(`ERRO: ${err}`);
  });

knex
  .select("*")
  .table("employees")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

knex
  .select(["name", "wage"])
  .where({ id: 1 })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

knex
  .raw("SELECT * FROM employees")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

knex
  .where({ id: 2 })
  .delete()
  .table("employees")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

knex
  .where({ id: 2 })
  .update({ wage: 500, name: "Jonas" })
  .table("employees")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

knex
  .select("*")
  .orderBy("name", "asc")
  .table("employees")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

knex
  .select("employees.name as Employee, projects.name as Project")
  .table("employees")
  .innerJoin("projects", "projects.id", "employees.fk_project")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
