def get_intersecting_item(l1, l2):
  return [x for x in l1 if x in l2]

print(get_intersecting_item([1,2,3,4],[6,7,3,9]))