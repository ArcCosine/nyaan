exports.handler = (event, context, callback) => {
    let renderImage = "https://nyaan.work/basecat.png";
    if ("url" in event.queryStringParameters !== false) {
        const url = event.queryStringParameters.url;
        if (url.length > 0) {
            const bytes = new Uint8Array(
                url.match(/.{1,2}/g).map((v) => parseInt(v, 16))
            );
            renderImage = new TextDecoder().decode(bytes);
        }
    }

    return callback(null, {
        statusCode: 200,
        body: renderImage,
    });
};
