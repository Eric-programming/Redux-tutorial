package Algo;

import Class.TrieNode;

class Trie {
    private TrieNode<Character> root;

    /** Initialize your data structure here. */
    public Trie() {
        root = new TrieNode<Character>();
    }

    /** Inserts a word into the trie. */
    public void insert(String word) {
        TrieNode<Character> curNode = root;
        char[] arr = word.toCharArray();
        for (char curChar : arr) {
            if (curNode.children.containsKey(curChar) == false) {
                curNode.children.put(curChar, new TrieNode<Character>());
            }
            curNode = curNode.children.get(curChar);
        }
        curNode.isWord = true;
    }

    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        TrieNode<Character> curNode = root;
        char[] arr = word.toCharArray();
        for (char curChar : arr) {
            if (curNode.children.containsKey(curChar) == false) {
                return false;
            }
            curNode = curNode.children.get(curChar);
        }
        return curNode.isWord;
    }

    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     */
    public boolean startsWith(String prefix) {
        TrieNode<Character> curNode = root;
        char[] arr = prefix.toCharArray();
        for (char curChar : arr) {
            if (curNode.children.containsKey(curChar) == false) {
                return false;
            }
            curNode = curNode.children.get(curChar);
        }
        return true;
    }
}