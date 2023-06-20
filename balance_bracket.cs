using System;
using System.Collections.Generic;

public class BalancedBracket
{
    public static string CheckBalancedBracket(string input)
    {
        Stack<char> stack = new Stack<char>();

        foreach (char c in input)
        {
            if (IsOpeningBracket(c))
            {
                stack.Push(c);
            }
            else if (IsClosingBracket(c))
            {
                if (stack.Count == 0 || !IsMatchingBracket(stack.Pop(), c))
                {
                    return "NO";
                }
            }
        }

        return stack.Count == 0 ? "YES" : "NO";
    }

    private static bool IsOpeningBracket(char c)
    {
        return c == '(' || c == '{' || c == '[';
    }

    private static bool IsClosingBracket(char c)
    {
        return c == ')' || c == '}' || c == ']';
    }

    private static bool IsMatchingBracket(char opening, char closing)
    {
        return (opening == '(' && closing == ')') ||
               (opening == '{' && closing == '}') ||
               (opening == '[' && closing == ']');
    }

    public static void Main(string[] args)
    {
        string input = "{(([])[])[]}";
        string result = CheckBalancedBracket(input);
        
        Console.WriteLine(result);
    }
}