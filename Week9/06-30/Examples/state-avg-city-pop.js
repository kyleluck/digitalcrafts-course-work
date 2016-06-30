db.zipcodes.aggregate(
    { $group: { _id: '$state', avg: { $avg: '$pop' } } },
    { $sort: { avg: -1 } },
    { $limit: 3 }
)