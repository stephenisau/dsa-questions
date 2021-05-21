def toStr(n, base):
    """Converts an integer number to its string representation

    Args:
        n (int): integer reprsenting the number to convert to a string
        base (int): base representation of the string we'd like to convert to
    """
    convertString = "0123456789ABCDEF"
    if n < base:
        return convertString[n]
    else:
        return toStr(n // base, base) + convertString[n % base]

if __name__ == '__main__':
    n = 769
    assert toStr(n, 10) == str(n)
    n = 2
    assert toStr(n, 2) == "10"
    n = 255
    assert toStr(n, 2) == "11111111"
    assert toStr(256, 2) == "100000000"
