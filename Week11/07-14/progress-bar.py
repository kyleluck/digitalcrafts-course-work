import sys
total = 10000000
point = total / 100
increment = total / 20
for i in xrange(total):
    if(i % (5 * point) == 0):
        sys.stdout.write("\r[" + "=" * (i / increment) +  " " * ((total - i)/ increment) + "]" +  str(i / point) + "%")
        sys.stdout.flush()
