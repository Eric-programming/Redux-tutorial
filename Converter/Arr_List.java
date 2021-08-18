package Converter;

import java.util.*;

public class Arr_List<T> {
    static <T> List<T> convert(T[] arr) {
        return Arrays.asList(arr);
    }
}
