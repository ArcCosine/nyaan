export const Kitty = function(){
    // Copy form the Horn Player.

    const audioSrc = 'kitty.mp3';
    const audioCtx = new window.AudioContext();
    const self = this;
    let source;
    let buffer;

    const loadSound = (callback) => {

        // AudioContext must be resumed after the document received a user gesture to enable audio playback.
        audioCtx.resume();

        if (!!buffer === true) {
            // If the buffer is already loaded, use that.
            callback(buffer);
            return;
        }

        fetch(audioSrc).then((response)=>{
            return response.arrayBuffer();
        }).then((buffer)=>{
            audioCtx.decodeAudioData(buffer, (decodedBuffer)=>{
                callback(decodedBuffer);
            });
        });

    };


    this.start = (opts) => {
        const shouldLoop = opts.loop; // always loop if from an event.

        loadSound((tmpBuffer) =>{
            source = audioCtx.createBufferSource();

            source.connect(audioCtx.destination);

            source.buffer = tmpBuffer;

            source.onended = function() {
                self.stop();
            };

            source.start(0);
            source.loop = shouldLoop;
            //source.loopStart = 0.24;
            //source.loopEnd = 0.34;
        });
    };

    this.stop = () =>{
        if (!!source === true) {
            source.loop = false;
        }

        //this.onstopped();
    };

    //this.onstopped = function() {};

    const init = () => {
        loadSound((decodedBuffer) =>{
            buffer = decodedBuffer;
        });
    };

    init();
};
