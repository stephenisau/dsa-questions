import os

def read_directories(root):
    """Read files in a directory"""
    data = []
    for root, folders, files in os.walk(root):
        for file in files:
            if file.endswith(".txt"):
                filename = str(os.path.join(root, file))
                ip_addresses = read_text_file(filename)
                for ip in ip_addresses:
                    data.append(ip)
    return data   
                
def read_text_file(filename):
    """Extracts ip addresses from a text file"""
    IP_ADDRESSES = []
    with open(filename, "r") as f:
        for line in f:
            line = line.strip()
            words = line.split()
            for word in words:
                if is_valid_ip(word):
                    IP_ADDRESSES.append(word)
    return IP_ADDRESSES

                
def is_valid_ip(string):
    """Given input string, return if the string is a valid ip address.
    >>> ip="127.0.0.1"
    >>> is_valid_ip(ip)
    True
    >>> ip="1231.123.123.12332.3
    >>> is_valid_ip(ip)
    False
    """
    vals = string.split(".")
    if not len(vals) == 4:
        return False
    for idx, val in enumerate(vals):
        num = int(val)
        if not 0 <= num <= 255:
            return False
            
    return True
                         
    
def main():
    ROOT = "/root/data"
    data = read_directories(ROOT)
    print(data)
    for ip in data:
        print(ip)
                                            
                                            


if __name__ == "__main__":
    main()