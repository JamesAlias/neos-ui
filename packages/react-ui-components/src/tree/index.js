import {themr} from 'react-css-themr';
import identifiers from './../identifiers.js';
import treeStyle from './tree.css';
import nodeStyle from './node.css';
import Tree from './tree.js';
import Node, {
    Header,
    Contents
} from './tree.js';

const ThemedTree = themr(identifiers.tree, treeStyle)(Tree);
const ThemedTreeNode = themr(identifiers.treeNode, nodeStyle)(Node);
const ThemedTreeNodeHeader = themr(identifiers.treeNodeHeader, nodeStyle)(Header);
const ThemedTreeNodeContents = themr(identifiers.treeNodeContents, nodeStyle)(Contents);

//
// Dependency injection
//
import injectProps from './../_lib/injectProps.js';
import Icon from './../icon/index';

const FinalTreeComponent = injectProps({
    NodeComponent: ThemedTreeNode
})(ThemedTree);
FinalTreeComponent.Node = ThemedTreeNode;
FinalTreeComponent.Node.Header = injectProps({
    IconComponent: Icon
})(ThemedTreeNodeHeader);
FinalTreeComponent.Node.Contents = ThemedTreeNodeContents;

export default FinalTreeComponent;
