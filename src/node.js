class Node {
	constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    
    this.parent = null;
    this.left = null;
    this.right = null;
	}

	appendChild(node) {
    let currentNode = this;
    
    const addNode = function() {
      if (node.data < currentNode.data) {
        
        if (currentNode.left === null) {
          currentNode.left = node;
          /**/
          currentNode.left.parent = currentNode;
          /**/
          return;
        } else {
          currentNode = currentNode.left;
          return addNode();
        }
        
      } else {
        
        if (currentNode.right === null) {
          currentNode.right = node;
          /**/
          currentNode.right.parent = currentNode;
          /**/
          return;
        } else {
          currentNode = currentNode.right;
          return addNode();
        }
        
      }
    };
    return addNode();
	}

	removeChild(node) {
    let currentNode = this;
    
    const deleteNode = function() {
      if (node.data < currentNode.data) {
        
        if (currentNode.left === null) {
          throw true;
        }
        
        if (node.data === currentNode.left.data) {
          currentNode.left.parent = null;
          currentNode.left = null;
          return;
        } else {
          currentNode = currentNode.left;
          return deleteNode();
        }
        
      } else {
        
        if (currentNode.right === null) {
          throw true;
        }
        
        if (node.data === currentNode.right.data) {
          currentNode.right.parent = null;
          currentNode.right = null;
          return;
        } else {
          currentNode = currentNode.right;
          return deleteNode();
        }
        
      }
    };
    return deleteNode();
	}

	remove() {

	}

	swapWithParent() {
		let currentNode = this;
    
    if (currentNode.parent === null) return;
    
    if (currentNode.parent.parent !== null) {
      
      const parent = currentNode.parent.parent;
      const child = currentNode.parent;
      
      parent.left = null;
      parent.right = null;
      
      child.parent = null;
      child.left = null;
      child.right = null;
      
      currentNode.parent = null;
      
      currentNode.appendChild(child);
      parent.appendChild(currentNode);
      
    } else if (currentNode.parent !== null) {
      
      const parent = currentNode.parent;
      const curLeft = currentNode.left;
      const curRight = currentNode.right;
      
      currentNode.parent = null;
      currentNode.left = null;
      currentNode.right = null;
      
      currentNode.appendChild(parent);
      
      parent.left = null;
      parent.right = null;
      
      if ( curLeft !== null) currentNode.appendChild(curLeft);
        
      if (curRight !== null) currentNode.appendChild(curRight);
      
    } else {
      currentNode.appendChild(currentNode.parent);
      currentNode.parent = null;
    }
    
	}
}

module.exports = Node;
