function solution(new_id) {
    let changeId = new_id.toLowerCase().match(/[a-z\d\-\_\.]/g);
    if(changeId !== null) {
        changeId = changeId.join('');
        changeId = changeId.replace(/\.{2,}/g, '.');
        changeId = changeId.replace(/^\./, '');
        changeId = changeId.replace(/\.$/, '');
    };
    if(changeId === '') changeId += 'a';
    if(changeId === null) changeId = 'a';
    if(changeId.length >= 16) changeId = changeId.slice(0, 15);
    if(changeId[changeId.length-1] === '.') changeId = changeId.slice(0, -1);
    while(changeId === null || changeId.length < 3) changeId += changeId[changeId.length-1]
    
    return changeId;
}