const Sound = function() {
    // Copy form the Horn Player.

    const audioSrc = "kitty.mp3";
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const self = this;
    let source;
    let buffer;

    const loadSound = callback => {
        // AudioContext must be resumed after the document received a user gesture to enable audio playback.
        audioCtx.resume();

        if (!!buffer === true) {
            // If the buffer is already loaded, use that.
            callback(buffer);
            return;
        }

        fetch(audioSrc)
            .then(response => {
                return response.arrayBuffer();
            })
            .then(buffer => {
                audioCtx.decodeAudioData(buffer, decodedBuffer => {
                    callback(decodedBuffer);
                });
            });
    };

    this.start = () => {
        return new Promise((resolve, reject) => {
            loadSound(tmpBuffer => {
                source = audioCtx.createBufferSource();
                source.connect(audioCtx.destination);
                source.buffer = tmpBuffer;
                source.addEventListener(
                    "ended",
                    () => {
                        self.stop();
                        resolve();
                    },
                    false
                );
                source.start(0);
                source.loop = false;
            });
        });
    };

    this.stop = () => {
        if (!!source === true) {
            source.loop = false;
        }
    };

    // entry point
    loadSound(decodedBuffer => {
        buffer = decodedBuffer;
    });
};

export default Sound;
