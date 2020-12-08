import React, { useEffect, useState } from 'react';

export const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        setPlaying(!playing);
        audio.currentTime = 0;
    };
    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [playing]);

    return toggle;
}

