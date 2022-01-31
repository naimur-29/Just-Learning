# # Program to display the Fibonacci sequence up to n-th term

# nterms = int(input("How many terms? "))

# # first two terms
# n1, n2 = 0, 1
# count = 0

# # check if the number of terms is valid
# if nterms <= 0:
#    print("Please enter a positive integer")
# # if there is only one term, return n1
# elif nterms == 1:
#    print("Fibonacci sequence upto",nterms,":")
#    print(n1)
# # generate fibonacci sequence
# else:
#    print("Fibonacci sequence:")
#    while count < nterms:
#        print(n1)
#        nth = n1 + n2
#        # update values
#        n1 = n2
#        n2 = nth
#        count += 1




# ## Fibonacci Sequance till serial:
# i = 0
# while i == i:
#    serial = int(input("\nEnter the serial for Fibonacci Sequance:\n"))
#    n1, n2 = 0, 1
#    count = 2

#    if serial <= 0:
#       serial = int(input("\nEnter the serial for Fibonacci Sequance:\n"))
#    else:
#       print(n1, end=" ")
#       print(n2, end=" ")

#       while i == i:
#          n3 = n1 + n2

#          if count >= serial:
#             break
#          else:
#             print(n3, end=" ")
#             count += 1
#          n1 = n2
#          n2 = n3

#       switch = input("\nRun again?\n")
#       if switch.lower() == "yes":
#          pass
#       else:
#          break



## Fibonacci Sequance till limit:
i = 0
while i == i:
   limit = int(input("\nEnter the limit for Fibonacci Sequance:\n"))
   n1, n2 = 0, 1

   if limit <= 0:
      limit = int(input("\nEnter the limit for Fibonacci Sequance:\n"))
   else:
      print(n1, end=" ")
      print(n2, end=" ")

      while i == i:
         n3 = n1 + n2

         if n3 >= limit:
            break
         else:
            print(n3, end=" ")
         n1 = n2
         n2 = n3

      switch = input("\nRun again?\n")
      if switch.lower() == "yes":
         pass
      else:
         break