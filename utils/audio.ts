let audioCtx: AudioContext | null = null;

export const playBeep = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    // Create a singleton context
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    // Modern browsers require audio context to be resumed after user interaction
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    // 8-bit coin/blip sound
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, audioCtx.currentTime); 
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); 
    
    // volume envelope
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.1);
  } catch (e) {
    console.error("Audio play failed:", e);
  }
};
