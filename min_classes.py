import math

max_students = 30
min_classes = 2


def min_classes(students):
    classes = []
    dict_of_classes = {}
    if students <= max_students:
        num_students_in_class = math.floor(students / min_classes)
        num_classes = min_classes
    else:
        num_classes = math.ceil(students / max_students)
        num_students_in_class = math.floor(students / num_classes)

    for numb in range(num_classes):
        classes[numb] = num_students_in_class

# didn't finish










