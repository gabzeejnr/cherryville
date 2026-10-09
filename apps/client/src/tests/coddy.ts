const set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const set2 = new Set([1, 3, 5, 7, 10]);

function isSubset(child: Set<any>, parent: Set<any>) {
    return [...child].every(s => parent.has(s));
}

function isSuperset(parent: Set<any>, child: Set<any>) {
    return isSubset(child, parent);
}
function isEqual(set1: Set<any>, set2: Set<any>) {
    return (set1.size === set2.size
        && isSuperset(set1, set2)
    )
}

console.log(isSuperset(set1, set2));

function analyzeFriendGroups(group1: any[], group2: any[]) {
    let set1 = new Set(group1);
    let set2 = new Set(group2);
    let isSubsetFunc = isSubset;


    let mutualFriends = 0;
    let exclusiveToFirst = 0;
    let exclusiveToSecond = 0;
    for (const set of set1) if (set2.has(set)) mutualFriends++;
    for (const set of set1) if (!set2.has(set)) exclusiveToFirst++;
    for (const set of set2) if (!set1.has(set)) exclusiveToSecond++;
    const set = isSubsetFunc(set1, set2) === true || isSubsetFunc(set2, set1) === true;

    return {
        mutualFriends,
        exclusiveToFirst,
        exclusiveToSecond,
        potentialConnections: exclusiveToFirst * exclusiveToSecond,
        isSubset: set
    }
}
