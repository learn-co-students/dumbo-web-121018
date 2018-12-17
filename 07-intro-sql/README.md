# Intro to SQL

What is SQL stand for?
- Structured Query Language

What is SQL for?
- talk to databases
- retrieving information: ex. company like amazon keeping their products in a db

What is persistence?
- The data your using in a program is stored outside of your program so it doesn't just disappear at the end

Why save stuff somewhere?
- to get it later
ex. instagram

What kind of operations are there in SQL?
- Create databases
- Insert more information into a Database
- Select information that you want
- Delete information
- Sort by a certain property (ex. GROUP BY)
- Count by a certain property
- Update information

CRUD

Create
- INSERT (a row)

Read
- SELECT (a row or rows)
(sorting, counting, etc.)

Update
- UPDATE (a row or rows)

Delete/Destroy
- DELETE (a row or rows)















1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
SELECT * FROM artists;
SELECT * FROM artists LIMIT 10;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT * FROM artists WHERE name = "Black Sabbath";
SELECT * FROM artists WHERE name LIKE "Black Sabbath";
SELECT * FROM artists WHERE name LIKE "Black%";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (
  id INTEGER PRIMARY KEY autoincrement,
  name TEXT
);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER;
ALTER TABLE fans ADD COLUMN favorite_icecream INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql
INSERT INTO fans (name, artist_id) VALUES ("KevyWevy", 169);
```

6. Update "KevyWevy" to the name "Kevin"

```sql
UPDATE fans
SET name = "Kevin"
WHERE name = "KevyWevy";
```

<!-- 6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

   ```sql

   ``` -->

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
SELECT * FROM fans WHERE artist_id <> 169;
SELECT * FROM fans WHERE artist_id != 169;
```

8. Write the SQL to display an artists name next to their album title
artist_name     | album_title
----------------------------------
black sabbath   | album one
black sabbath   | album two
black sabbath   | album three

```sql
SELECT artists.Name, albums.title
FROM albums
JOIN artists ON albums.ArtistId = artists.ArtistId
LIMIT 10;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql
SELECT
  artists.Name as "artists name",
  albums.Title as "album title",
  COUNT(tracks.Name) as "track count"
FROM albums
JOIN artists ON artists.ArtistId = albums.ArtistId
JOIN tracks ON tracks.AlbumId = albums.AlbumId
GROUP BY albums.Title;
```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
