# Project

- This website is a clone of hepsiburada. The project uses express.js on the backend and mysql as the database.
- Must run 'npm install' to install dependencies and correctly run "index.js".

## Search Function

- Simply use the searchbar on the nav bar. Input "laptop" and press enter to try it out!

# Data Model

- See the db.sql file for the sql queries for database.

### product
- id            :int
- title         :string
- price         :string
- category      :string
- image         :string
- brand         :string
- location      :string

### description
- id            :int
- product_id    :int
- title         :string
- info          :string
