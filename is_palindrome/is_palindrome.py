def isPalindrome(self, s):
    """
    :type s: str
    :rtype: bool
    """
    string = ""
    for i in range(len(s)):
        if (ord(s[i]) >= 48 and ord(s[i]) <= 57): # [0-9]
            string += str(s[i])
        curr = s[i].lower()
        if (ord(curr) >= 65 and ord(curr) <= 90) or (ord(curr) >= 97 and ord(curr) <= 122):
            string += curr
    for i in range(len(string)):
        if string[i] != string[len(string) - 1 - i]:
            return False
        
    return True