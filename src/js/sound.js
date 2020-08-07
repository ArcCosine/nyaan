const Sound = function() {
    // Copy form the Horn Player.
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const self = this;
    let source;
    let buffer;

    const loadSound = async callback => {
        // AudioContext must be resumed after the document received a user gesture to enable audio playback.
        audioCtx.resume();

        if (!!buffer === true) {
            // If the buffer is already loaded, use that.
            callback(buffer);
            return;
        }

        const response = await fetch("kitty.mp3")
        const resBuffer = await response.arrayBuffer()
        audioCtx.decodeAudioData(resBuffer, decodedBuffer => {
            callback(decodedBuffer);
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
