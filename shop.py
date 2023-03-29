shop = {
    'table': 34,
    'chair': 84,
    'sofa': 120
}
products = list(shop.keys())

print('Nice to meet you!\nWhat would you like to buy in our shop?')
print(shop)


def add_money(now_money, extra_money):
    if type(extra_money) is not int:
        raise ValueError("You need insert only numbers.")

    now_money += extra_money
    return now_money


def afford_or_not(answer, CustomError=None):
    word = str(answer)
    if word not in products and word != 'exit':
        raise ValueError("Sorry, this is an invalid input.")

    if word in products:
        cust_money = 100
        if word == 'table' or word == 'chair':
            print(f"Here's your {word}!\nThank you for your purchase! Bye!")
        elif word == 'sofa':
            result = cust_money
            max_attempt = 1
            while max_attempt <= 3:
                ask_cust_2 = int(input("Sorry, you don't have enough money. How much money would you like to add? "))
                result = add_money(result, ask_cust_2)
                if result >= shop[word]:
                    print(f"Here's your {word}!\nThank you for your purchase! Bye!")
                    break
                else:
                    max_attempt += 1
            else:
                raise CustomError("CustomerError - Maximum 3 attempts for purchase.")
    elif word == 'exit':
        print('Thank you for being with us! Bye!')
    return


try:

    ask_ques = input('Please, write the name of the item or "exit": ')
    afford_or_not(ask_ques)

except ValueError:
    print('ValueError - input provided is not valid.')

except (Exception,):
    print("Customer Error - Maximum 3 attempts for purchase.")
