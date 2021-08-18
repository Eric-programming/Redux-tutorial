package Class;

public class ListNode<T> {
    public ListNode(T val) {
        this.val = val;
    }

    public T val;
    public ListNode<T> next = null;
}
