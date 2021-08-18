package Converter;

import java.util.*;

public class List_Arr {
    static Integer[] convertIntegerArr(List<Integer> list) {
        Integer[] arr = new Integer[list.size()];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = list.get(i);
        }
        return arr;
    }

    static String[] convertStringArr(List<String> list) {
        String[] arr = new String[list.size()];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = list.get(i);
        }
        return arr;
    }

    static Character[] convertCharacterArr(List<Character> list) {
        Character[] arr = new Character[list.size()];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = list.get(i);
        }
        return arr;
    }
}
