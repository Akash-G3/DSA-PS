function isValid(s) {
    const stack = [];
    const openBrackets = new Set(['(', '{', '[']);
    const matchingBrackets = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);

    for (const char of s) {
        if (openBrackets.has(char)) {
            stack.push(char);
        } else {
            if (stack.pop() !== matchingBrackets.get(char)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}