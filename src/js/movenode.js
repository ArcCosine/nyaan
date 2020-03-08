// move Nodes.
const moveNode = (activeNode, judgeNode) => {
    if (judgeNode) {
        activeNode.classList.remove("active");
        judgeNode.classList.add("active");
        window.scrollTo({
            top: judgeNode.offsetTop,
            behavior: "smooth"
        });
    }
};

export default moveNode;
