## Binary Search Trees

# Make a copy of bst.py and work with that. In in a BTreeNode class is defined which represents a node in a binary search tree. Two functions have also been defined for you:
#
# * bst_insert(tree_node, new_node) - inserts a new node into the tree will keeping the tree in an order state
# * bst_pre_order_traversal(tree_node) - performs a pre-order traversal of the tree to print out all the nodes of the tree
#
# 1. Write a bst_lookup(tree_node, target) function that searches for a node within the tree which matches the target. Assume the target is an ordered type and can be compared using < or > (both numbers and strings will work).
# 2. Write a bst_in_order_traversal(tree_node) function that traverses the tree in the right order, such that if you use the traversal to print the elements the tree, for example, you would print the elements in ascending order.
# 3. Write a bst_min(tree_node) function that returns the smallest node of the tree (the one all the way to the left).

### Bonus Problems
# 4. Write a bst_find_gt(tree_node, data) function which returns a list of nodes whose value is greater that data.
# 5. Write a bst_delete(tree_node, target) function to delete the target node from the tree.
# 6. Write a bst_n_min(tree_node, n) function that returns the smallest n nodes of the tree.


import random

# A class representing a binary tree node
# it contains 3 attributes: data, left, right
class BTreeNode(object):
    def __init__(self, data):
        # the data that's associated with this node
        # this will be a number in this example
        # but can also be a string or any other data type
        # that can be ordered
        self.data = data
        # the left child node of this node
        self.left = None
        # the right child node of this nod
        self.right = None

    # __repr__ returns a string representation
    # of this binary tree node, it will look like, for example:
    # BTreeNode(4)
    def __repr__(self):
        return "BTreeNode(%r)" % self.data

# 3 routines for working with binary search trees below:
# 1. bst_lookup
# 2. bst_insert
# 4. bst_traverse

# Insert a new_node into the tree (or subtree) starting at node
# Parameters:
# * node - the root node of the tree (or subtree) to insert into
# * new_node - the new node to insert into the tree (or subtree)
def bst_insert(node, new_node):
    if node.data > new_node.data:
        if node.left is None:
            node.left = new_node
        else:
            bst_insert(node.left, new_node)
    else:
        if node.right is None:
            node.right = new_node
        else:
            bst_insert(node.right, new_node)

# Traverse the tree, call supplied function for each node in the tree
# Parameters:
# * node - the root node of the tree (or subtree) to traverse
# * fn - the function to call for each node. fn will take 2 parameters:
#     1. the current node
#     2. the tree level as a number
# * level (optional) - the current tree level in the traversal
def bst_pre_order_traverse(node, fn, level=0):
    if node is None:
        return
    fn(node, level)
    bst_pre_order_traverse(node.left, fn, level + 1)
    bst_pre_order_traverse(node.right, fn, level + 1)

root_node = BTreeNode(59)
numbers = [57, 13, 65, 6, 44, 29, 21, 82, 96, 95, 71]
for i in numbers:
    bst_insert(root_node, BTreeNode(i))

def printit(node, level):
    print node.data

bst_pre_order_traverse(root_node, printit)

# 1. Write a bst_lookup(tree_node, target) function that searches for a node within the tree which matches the target. Assume the target is an ordered type and can be compared using < or > (both numbers and strings will work).
def bst_lookup(tree_node, target):
    if tree_node.data == target:
        #print "matching node is: %r" % tree_node
        return tree_node
    elif tree_node.left and target < tree_node.data:
        return bst_lookup(tree_node.left, target)
    elif tree_node.right and target > tree_node.data:
        return bst_lookup(tree_node.right, target)

print "---------------------------"
print "Searching for target 95 from %r" % root_node
print bst_lookup(root_node, 95)

# 2. Write a bst_in_order_traversal(tree_node) function that traverses the tree in the right order, such that if you use the traversal to print the elements the tree, for example, you would print the elements in ascending order.
def bst_in_order_traversal(tree_node):
    if tree_node.left:
        bst_in_order_traversal(tree_node.left)
    elif tree_node.right:
        bst_in_order_traversal(tree_node.right)
    print tree_node.data

print "---------------------------"
print "Traversing BST in order from %r" % root_node
bst_in_order_traversal(root_node)

# 3. Write a bst_min(tree_node) function that returns the smallest node of the tree (the one all the way to the left).
def bst_min(tree_node):
    if tree_node.left:
        return bst_min(tree_node.left)
    else:
        return tree_node

print "---------------------------"
print "Finding min node from %r" % root_node
print bst_min(root_node)

# 4. Write a bst_find_gt(tree_node, data) function which returns a list of nodes whose value is greater that data.
def bst_find_gt(tree_node, data, list = []):
    if tree_node.data > data:
        list.append(tree_node)
    if tree_node.right:
        bst_find_gt(tree_node.right, data, list)
    if tree_node.left:
        bst_find_gt(tree_node.left, data, list)
        
    # if tree_node.right.data > data:
    #     list.append(tree_node.right)
    #     bst_find_gt(tree_node.right, data, list)
    #     if tree_node.right.left.data > data:
    #         list.append(tree_node.right.left)
    #         bst_find_gt(tree_node.right.left, data, list)
    #     else:
    #         print data

print "---------------------------"
print "Finding nodes larger than BTreeNode(65)"
bst_find_gt(root_node, 65)

# 5. Write a bst_delete(tree_node, target) function to delete the target node from the tree.
# def bst_delete(tree_node, target):
#     if tree_node.data == target:
#         #search and delete
#     if tree_node.left.data == target:
#         #search and delete
#     elif tree_node.right.data == target:
#         #search and delete


# 6. Write a bst_n_min(tree_node, n) function that returns the smallest n nodes of the tree.
#def bst_n_min(tree_node, n):
