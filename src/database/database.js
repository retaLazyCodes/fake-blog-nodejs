import Sequelize from 'sequelize';


// export const sequelize = new Sequelize('blog_db', 'root', '',
//   {
//     host: 'localhost',
//     dialect: 'mysql'
//   });

export const sequelize = new Sequelize('myoF3uGTy1', 'myoF3uGTy1', 'f8AwZXPkz2',
  {
    host: 'remotemysql.com',
    dialect: 'mysql'
  });


sequelize.sync()
  .then(() => {
    console.log("Tablas sincronizadas")
  })