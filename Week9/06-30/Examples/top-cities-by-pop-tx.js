/*
## Populations by City

1. use aggregate to calculate the total population for each city (you have to use city/state combination). You can use a combination for the _id of the $group: { city: '$city', state: '$state' }
2. sort the results by population, higest first
3. limit the results to just the first 3 results. What are the top 3 cities in population?
4. What are the top 3 cities in population in Texas?
*/

db.zipcodes.aggregate(
    { $match: { state: 'TX' } },
    { $group: { _id: '$city', total: { $sum: '$pop' } } },
    { $sort: { total: -1 } },
    { $limit: 3 }
)