console.log('running', process.env.DATABASE_URL)
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "dist/models/**/*.js"
   // "src/models/**/*.ts"
 ],
 "migrations": [
  //"src/migrations/**/*.ts"
  "dist/database/migrations/**/*.js"
],
 "cli":{
  "migrationsDir": [
    "src/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}
