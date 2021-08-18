package Class;

import java.util.*;

public class NaryNode<T> {
    public NaryNode(T val) {
        this.val = val;
    }

    public T val;
    public List<NaryNode<T>> children = new LinkedList<>();
}
