const getLang = () =>{
    const match = location.href.match(/#!\/(.+)?\//);
    return match ? match[1] : "ja";
};

export default getLang;
