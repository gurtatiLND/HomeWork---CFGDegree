# write function that takes in an input and checks to see if it’s an isogram.
# The function should return True or False.

def check_isogram(string):
    space = " "
    hyph = "-"
    new_string = string.lower()
    for letter in new_string:
        if new_string.count(letter) > 1:
            return False
        elif new_string.count(space) > 1 or new_string.count(hyph) > 1:
            return True
    return True

str = "isogram" # true
str2 = "uncopyrightable" # true
str3 = "ambidextrously" # true

print(check_isogram(str))