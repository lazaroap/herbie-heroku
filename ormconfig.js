console.log('running', process.env.DATABASE_URL)
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    "dist/models/**/*.ts"
   // "src/models/**/*.ts"
 ],
 "migrations": [
  //"src/migrations/**/*.ts"
  "src/migrations/**/*.ts"
],
 "cli":{
  "migrationsDir": [
    "src/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}
