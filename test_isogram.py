# write comprehensive unit tests for the function you wrote.
# For each test case add a comment stating why you chose that case.

import unittest
from isogram import check_isogram


class TestIsogramFunction(unittest.TestCase):

    # capital and small letters should be treated as the same
    def test_upper_letters(self):
        result = check_isogram(string="Abacd")
        expected = False
        self.assertEqual(result, expected)

    # spaces and hyphens could be in the sentence
    def test_spaces_in_isogram(self):
        result = check_isogram(string="Ab c dE ")
        expected = True
        self.assertEqual(result, expected)

    # check if numbers count as characters
    def test_if_number(self):
        result = check_isogram(string="fghjk4op45")
        expected = False
        self.assertEqual(result, expected)


if __name__ == "__main__":
    check_isogram()
