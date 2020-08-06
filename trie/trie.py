class TrieNode:
    def __init__(self):
        self.children = {}
        self.isWord = False

    def __repr__(self):
        print(f"current TrieNode: {self.children}")


class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        curr = self.root
        for ch in word:
            node = curr.children.get(ch, TrieNode())
            curr.children[ch] = node
            curr = node

        curr.isWord = True

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        curr = self.root
        for ch in word:
            node = curr.children.get(ch)
            if not node:
                return False
            curr = node
        return curr.isWord

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        curr = self.root
        for ch in prefix:
            node = curr.children.get(ch)
            if not node:
                return False
            curr = node

        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
