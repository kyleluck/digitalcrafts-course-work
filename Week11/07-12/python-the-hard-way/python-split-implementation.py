# //////////////////////////////////////////////////////
# // recreate split() method                          //
# //////////////////////////////////////////////////////
#
# function splitString(input, delim) {
#   var result = [];
#   var startInd = 0;
#   var endInd = input.indexOf(delim);
#   while (endInd !== -1) {
#     var part = input.substring(startInd, endInd);
#     result.push(part);
#     startInd = endInd + delim.length;
#     endInd = input.indexOf(delim, startInd);
#   }
#   var finalPart = input.substring(startInd);
#   result.push(finalPart);
#   return result;
# }
#
# console.log(splitString('JaaaScript', 'aa'));

def splitString(string, delim):
    "Implement string split function in Python"
    result = []
    startInd = 0
    endInd = string.index(delim)
    print "endInd is: ", endInd

    while True:
        part = string[:endInd]
        print "part is: ", part
        result.append(part)
        print "result is: ", result
        startInd = endInd + 1 #len(delim)
        print "startInd is now: ", startInd
        string = string[startInd:]
        print "string is now: ", string
        if delim not in string:
            result.append(string)
            break
        endInd = string.index(delim)
        print "endInd is now: ", endInd
    return result

aList = "JavaScript"
answer = splitString("JavaScript", "a")
print answer
