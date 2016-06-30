//db.albums.count({ $and: [{released: {$gt: 1979}}, {released: {$lt: 1990}}]})
db.albums.find({ $and: [{released: {$gt: 1950}}, {released: {$lt: 1990}}]}).count()