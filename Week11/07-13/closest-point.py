from scipy.spatial import distance

def n_closest_points(points, n, origin):
    min_dist = distance.euclidean(points[0], origin)
    closest_point = 'none'

    for point in points:
        if distance.euclidean(point, origin) < min_dist:
            min_dist = distance.euclidean(point, origin)
            closest_point = point
    return closest_point

points = [(5, 10), (1, 4), (30, 100)] # points can also have a z value
n = 1
origin = (5, 2)

print n_closest_points(points, n, origin)


# a = (1,2,3)
# b = (4,5,6)
# dst = distance.euclidean(a,b)
# print dst
