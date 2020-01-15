def find_limit(arr):
    d = {}

    # [4, 6, 10, 15, 16] lim=21
    #             ^ => [i, d[lim-arr[i]]] => [3, 1]
    # {17: 0, 15: 1, 11: 2}

    # [1, 1, 2, 2, 3, 4, 5], lim=7
    #              ^ d[7-3]
    #

    if len(arr) == 0:
        return []
    for index, value in enumerate(arr):
        if value in d:
            return [index, d[value]]
        else:
            d[limit - value] = index
    return []
