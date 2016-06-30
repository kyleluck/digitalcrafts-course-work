db.zipcodes.aggregate(
    { $group: { _id: '$state', total: { $sum: '$pop' } } },
    { $sort: { total: -1 } }
)