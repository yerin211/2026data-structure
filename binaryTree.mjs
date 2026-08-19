class BinaryTree {
    constructor(data, leftTree = null, rightTree = null) {
        this.data = data;
        this.leftTree = leftTree;
        this.rightTree = rightTree;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getLeftSubTree() {
        return this.leftSubTree;
    }

    getRightSubTree() {
        return this.rightSubTree;
    }

    setLeftSubTree(tree) {
        this.leftSubTree = tree;
    }

    setRightSubTree(tree) {
        this.rightSubTree = tree;
    }

    preOrderTraversal(tree) {            //루트 -> 왼쪽 -> 오른쪽
        if (tree === null) return; //기저 조건
        
        console.log(tree.data);
        this.preOrderTraversal(tree.getLeftSubTree());
        this.preOrderTraversal(tree.getRightSubTree());
    }

    inOrderTrabersal(tree) {                 //중위 순회(inOrder) : 왼쪽 -> 루트 -> 오른쪽
        if (tree === null) return;
        this.inOrderTrabersal(tree.getLeftSubTree());
        console.log(tree.data);
        this.inOrderTrabersal(tree.getRightSubTree());
    }

    postOrderTraversal(tree) {
        if (tree === null) return;
        this.postOrderTraversal(tree.getLeftSubTree());
        this.postOrderTraversal(tree.getRightSubTree());
        console.log(tree.data);
    }

    removeLeftSubTree() {
        let deletingNode = this.getLeftSubTree();
        this.setLeftSubTree(null);
        return deletingNode;
    }

    removeRightSubTree() {
        let deletingNode = this.getRightSubTree();
        this.setRightSubTree(null);
        return deletingNode;
    }
}

export { BinaryTree };