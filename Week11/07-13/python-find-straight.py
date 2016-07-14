# //////////////////////////////////////////////////////
# // find if there is a straight given 7 cards        //
# //////////////////////////////////////////////////////
# function isStraight(cards) {
#   cards.sort(function(a, b) {
#     return a - b;
#   });
#   var streak = 1;
#   for (var i = 1; i < cards.length; i++) {
#     var lastCard = cards[i - 1];
#     var currCard = cards[i];
#     if (currCard - lastCard === 1) {
#       streak++;
#     } else if (currCard === lastCard) {
#       //do nothing
#     } else {
#       streak = 1;
#     }
#     if (streak === 5) {
#       return true;
#     }
#   }
#   return false;
# }
#
# console.log(isStraight([1,2,3,4,5])); //expect true
# console.log(isStraight([1,7,3,4,5])); //expect false
# console.log(isStraight([1,2,2,2,3,4,5])); //expect true

# in Python:
def is_straight(cards):
    sorted_cards = sorted(cards)
    streak = 1
    for i in range(1, len(sorted_cards)):
        last_card = sorted_cards[i - 1]
        curr_card = sorted_cards[i]
        if curr_card - last_card == 1:
            streak += 1
        elif curr_card == last_card:
            pass
        else:
            streak = 1
        if streak == 5:
            return True
    return False

print is_straight([1,2,3,4,5]) #expect true
print is_straight([1,2,2,2,3,4,5]) #expect true
print is_straight([1,7,3,4,5]) #expect false
