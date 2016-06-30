db.zipcodes.aggregate( 
    { $match: { city: 'ATLANTA', state: 'GA'}}
)