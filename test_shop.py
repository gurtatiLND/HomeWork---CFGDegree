from unittest import TestCase, main
from shop import add_money, afford_or_not, ask_ques, products

class TestShopFunctions(TestCase):

    def test_sum_money(self):
        result = add_money(100, 25)
        expected = 125
        self.assertEqual(result, expected)

    def test_check_exit(self):
        result = afford_or_not('exit', CustomError=None)
        expected = print("Thank you for being with us! Bye!")
        self.assertEqual(result, expected)

    def test_isIn(self):
        self.assertIn(ask_ques, products)



if __name__ == "__main__":
     main()
