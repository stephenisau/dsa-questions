import string

class Solution:
    def __init__(self):
        self.alphabet = string.ascii_uppercase
        self.letters = {val: idx + 1 for idx, val in enumerate(self.alphabet)}
        self.count = 0

    def titleToNumber(self, s: str) -> int:
        for i in range(len(s)):
            curr = s[len(s) - 1 - i]
            self.count += self.letters[curr] * (26 ** i)
        return self.count