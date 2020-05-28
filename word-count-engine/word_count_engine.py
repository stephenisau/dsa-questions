def word_count_engine(document):
    word_map = {}
    word_list = [word.strip() for word in document.split(' ')]
    max_count = 0

    for word in word_list:

        # preliminary text-cleaning, strip whitespace, normalize characters to lowercase
        w = word.lower()
        chars = []
        for ch in w:
            if (ch >= 'a' and ch <= 'z'):
                chars.append(ch)
        
        cleaned_word = "".join(chars)


        # Update our frequency object and the max count accordingly
        count = 0
        if (cleaned_word in word_map):
            count = word_map[cleaned_word] 
            count += 1
        else:
            count = 1
    
        if (count > max_count):
            max_count = count
        
        word_map[cleaned_word] = count
    # word_map = {'practice': 3, 'makes': 1, 'perfect': 2, 'youll': 1, 'only': 1, 'get': 1, 'by': 1, 'just': 1}
    
    # Create our buckets with max_length set to the max count of words
    # Looks like [[None], [None], [None], ...]
    counter_list = [None for i in range(max_count + 1)]

    for word, count in word_map.items():
        # pull out the count and the current count from the array
        curr_count = count
        word_counter_list = counter_list[curr_count]

        # if the value is None, set the value to an empty array
        if (word_counter_list == None):
            word_counter_list = []

        # push the word to the word counter list
        word_counter_list.append(word)
        counter_list[curr_count] = word_counter_list
    # our counter_list looks like this now: [None, ['word', 'hello'], ['bye']]

    output = []
    for i in range(len(counter_list) - 1, 0, -1):
        # pull out the sub-array
        word_list = counter_list[i]

        if (word_list is not None):
            for word in word_list:
                output.append([word, word_map[word]])
    return output


            

def main():
    document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
    solution = [ ["practice", "3"], ["perfect", "2"],\
          ["makes", "1"], ["youll", "1"], ["only", "1"], \
          ["get", "1"], ["by", "1"], ["just", "1"] ]
    answer = word_count_engine(document)

if __name__ == "__main__":
    main()

