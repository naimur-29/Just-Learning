import math

time = int(input("Enter the time in seconds: "))

hours = math.floor (time/3600)
mins = math.floor ((time - (hours*3600))/60)
secs = math.floor ((time - (hours*3600) - (mins*60)))

print( str(hours) +"h "+ str(mins) +"m " + str(secs) + "s")