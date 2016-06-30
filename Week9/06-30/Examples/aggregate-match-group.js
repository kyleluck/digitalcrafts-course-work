db.zipcodes.aggregate( 
    { $match: { city: 'ATLANTA', state: 'GA'} },
    { $group: {_id: '$city', total: { $sum: 1 } } }
)