const getImageUrl = () =>{
    let imageUrl = "";
    const imghash = location.href.match(/#!\/([^&]+)\/([^&]+)/);
    if (imghash) {
        const bytes = new Uint8Array(
        imghash[2].match(/.{1,2}/g).map(v => parseInt(v, 16))
    );
        imageUrl = new TextDecoder().decode(bytes);
    }
    return imageUrl
}

export default getImageUrl;
