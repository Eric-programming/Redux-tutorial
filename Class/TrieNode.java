package Class;

import java.util.*;

public class TrieNode<T> {
    public Map<T, TrieNode<T>> children = new HashMap<>();
    public boolean isWord = false;
}
