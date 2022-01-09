blocks = [
    {
        'gym': False,
        'school': True,
        'store': False
    },
    {
        'gym': True,
        'school': False,
        'store': False
    },
    {
        'gym': True,
        'school': True,
        'store': False
    },
    {
        'gym': False,
        'school': True,
        'store': False
    },
    {
        'gym': False,
        'school': True,
        'store': True
    }
]

user = ('gym', 'school', 'store')

minGymDist = 999
minSchoolDist = 999
minStoreDist = 999
gymDist =[]
schoolDist = []
storeDist = []

for i in range(len(blocks)):
    gym_count = 0
    school_count = 0
    store_count = 0
    for j in range(i, len(blocks)):
        if blocks[j]['gym'] == False:
            gym_count += 1
        else:
            break
        if blocks[j]['school'] == False:
            school_count += 1
        else:
            break
        if blocks[j]['store'] == False:
            store_count += 1
        else:
            break
    gymDist.append(gym_count)
    schoolDist.append(school_count)
    storeDist.append(store_count)

print(gymDist)
print(schoolDist)
print(storeDist)