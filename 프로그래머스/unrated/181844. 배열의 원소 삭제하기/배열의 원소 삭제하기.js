const solution = (arr, delete_list) => {
    delete_list.map(e => arr.indexOf(e) !== -1 ? arr.splice(arr.indexOf(e), 1) : '');
    return arr;
}