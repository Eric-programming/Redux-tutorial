package Class;

public class DoublyNode<T> {
    public T val;

    public DoublyNode(T val) {
        this.val = val;
    }

    public DoublyNode<T> prev = null;
    public DoublyNode<T> next = null;
}
