/**
 * Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.
 * For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
 *
 * @param {LinkedList} listA list
 * @param {LinkedList} listB list
 */
function listsIntersection(listA, listB) {
    let aNode = listA.head,
        bNode = listB.head;

    for (let i = 0; i < Math.min(listA.length, listB.length); i++) {
        if (aNode.value === bNode.value) {
            return aNode.value;
        }

        aNode = aNode && aNode.next;
        bNode = bNode && bNode.next;
    }

    return null;
}

module.exports = {
    listsIntersection
};