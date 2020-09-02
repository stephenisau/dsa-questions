def get_candidates(board, row, col):
    candidates = []

    for num in range(1, 10):
        collision = False
        for i in range(len(board)):
            if (board[row][i] == num) or (board[i][col] == num):
                collision = True
                break
        
        if not collision:
            candidates.append(num)
    return candidates


def sudoku_solve(board):
    row = -1
    col = -1
    candidates = None

    for ROW in range(len(board)):
        for COL in range(len(board[ROW])):
            if (board[ROW][COL] == '.'):
                new_candidates = get_candidates(board, ROW, COL)
                if not candidates or len(new_candidates) < len(candidates):
                    candidates = new_candidates
                    row = ROW
                    col = COL
    
    if candidates == None:
        return True

    for num in candidates:
        board[row][col] = num
        if sudoku_solve(board):
            return True
        
        board[row][col] = '.'

    return False