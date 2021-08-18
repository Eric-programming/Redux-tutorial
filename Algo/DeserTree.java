package Algo;

import Class.TreeNode;

public class DeserTree {
    static final String X = "X";
    static String[] arr;
    static int index = 0;

    public static void main(String[] args) {
        var res = DeserTree.deserialize("1,2,X,X,3,4,5,X,X,X,X");
        System.out.println(res.val);
    }

    // 1,2,X,X,3,4,5,X,X,X,X
    // C,L,L,R,R,L,L,L,R,R,R
    public static TreeNode<Integer> deserialize(String data) {
        arr = data.split(",");
        TreeNode<Integer> res = dfs();
        return res;
    }

    private static TreeNode<Integer> dfs() {
        // base case
        if (arr[index].equals(X)) {
            index++;
            return null;
        }
        // deserialize the current value
        TreeNode<Integer> root = new TreeNode<>(Integer.parseInt(arr[index++]));
        // build our left subtree and return its root
        root.left = dfs();
        // build our right subtree and return its root
        root.right = dfs();
        return root;
    }
}
