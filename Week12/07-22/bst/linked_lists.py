## Linked Lists

# Given this LLNode definition:
#
# class LLNode(object):
#     def __init__(self, data):
#         self.data = data
#         self.next = None
#
# And some setup code to create a linked list, for example:
#
# one = LLNode(1)
# two = LLNode(2)
# one.next = two
# three = LLNode(3)
# two.next = three
# four = LLNode(4)
# three.next = four
#
# 1. Write a function ll_lookup(node, target) that returns a LLNode whose data equals target. For example, given the above setup, ll_lookup(one, 3) should return the LLNode associated with 3, while ll_lookup(one, 5) should return None, and ll_lookup(three, 1) should return None.

class LLNode(object):
    def __init__(self, data):
        self.data = data
        self.next = None

    def __repr__(self):
        return "LLNode(%r)" % self.data

one = LLNode(1)
two = LLNode(2)
one.next = two
three = LLNode(3)
two.next = three
four = LLNode(4)
three.next = four

def ll_lookup(node, target):
    if node:
        if node.data == target:
            return node
        elif node:
            return ll_lookup(node.next, target)

print "result for ll_lookup(one, 3) is %r" % ll_lookup(one, 3)
print "result for ll_lookup(three, 1) is %r" % ll_lookup(three, 1)
print "result for ll_lookup(one, 5) is %r" % ll_lookup(one, 5)
print "result for ll_lookup(two, 4) is %r" % ll_lookup(two, 4)
