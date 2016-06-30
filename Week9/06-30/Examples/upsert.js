db.albums.update(
{ album: "My Foolish Heart: Live at Montreux"},
{
    "album" : "My Foolish Heart: Live at Montreux",
    "artist" : "Keith Jarrett",
    "released" : 2001,
    "duration" : 108,
    "styles" : [ 
        "Bop"
    ]
},
{ upsert: true})