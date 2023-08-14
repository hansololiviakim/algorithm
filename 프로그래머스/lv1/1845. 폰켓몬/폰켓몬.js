const solution = (nums) => {
    const divide = nums.length / 2
    const unique = [...new Set([...nums])].length
    return unique < divide ? unique : divide;
}