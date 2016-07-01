# Migrate the Wiki to MongoDB

You are going to migrate the wiki from using the file system to store the page contents to using MongoDB to store them instead.

BONUS: Do this without looking a the detailed instructions below.
BONUS 2: Make logins work with user documents stored in the MongoDB - you can store passwords in the DB, this is not recommended, but you'll do it for now. Bonus bonus: make user sign ups work as well.

## Make a Page model

1. Install mongoose for your wiki project.
2. Make a Page mongoose model. It will only have two fields: _id and content. Both of these are required. _id should be a string and will store the name of the page - we will opt out of using MongoDB's auto-generated IDs.

## Make the Swap

1. For the /:pageName route, swap out the code that reads the file from the file system. Swap in code that uses Page.findById() to fetch the page document, and use that document's content property to render the page. In contrast to the fs.readFile module or fs.access, with Mongoose, the non-existence of a document does not result in an error. Therefore, to check for the existence of the document, just check the variable itself for existence:

    if (!page) {
      // page doesn't exist
    } else {
      // page exists
    }

2. For the /:pageName/edit route, same thing as above.
3. For the /:pageName/save route, you will use an update command to the Page model with the upsert option to save the page whether the page already exists or not.
4. Test and debug the Wiki! Something will likely have gone wrong. Clear your head, read the error messages, use the scientific method, compare your code with example code, narrow down the cause and effect chain.
