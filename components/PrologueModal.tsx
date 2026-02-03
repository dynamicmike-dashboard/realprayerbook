import React from 'react';

interface PrologueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrologueModal: React.FC<PrologueModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-brand-obsidian/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl bg-brand-obsidian border border-brand-gold/20 rounded-3xl p-8 md:p-12 shadow-[0_0_100px_rgba(212,175,55,0.2)] max-h-[90vh] overflow-y-auto custom-scrollbar">
        <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-brand-gold transition-colors">
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        
        <div className="flex flex-col items-center text-center mb-10">
          <span className="material-symbols-outlined text-brand-gold text-4xl mb-4">auto_stories</span>
          <h2 className="text-4xl font-regal text-white">Real Prayer</h2>
          <p className="text-brand-gold font-black tracking-[0.3em] uppercase text-xs mt-2">The Prologue</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed space-y-6">
          <p>
            <span className="text-brand-gold font-regal text-4xl float-left mr-2 mt-[-10px]">T</span>
            his is not a religious text, nor is it a soft comfort blanket; it is a 'living transmission' designed to work functionally when everything else has failed. 
            Born from the fires of 'Earth School' and decades of guiding leaders through crisis, this book strips away the 'middlemen' of modern spirituality to restore your direct, unmediated connection to Source.
          </p>
          <p>
            You will stop begging and start aligning, learning to use prayer not as a superstition, but as a 'mechanical reality' and precise instruction that an intelligent system actually obeys. 
            If you are ready to bypass the noise and command your reality with 'unshakable coherence,' this is your manual for graduating from life’s hardest tests.
          </p>
          
          <h4 className="text-brand-gold font-regal text-xl mt-8 mb-4">Command Your Reality</h4>
          <p>
            Most people fail at prayer because they speak from fear. They approach the divine as beggars, signaling lack and fragmentation to the unified field. 
            <strong>Real Prayer</strong> teaches you to bypass this "stabilized interference" and enter direct communion with Source.
          </p>

          <p>
            Through the laws of <em>Earth School</em>, you will learn that crises are not punishments but "graduation events"—pressure tests designed 
            to expand your capacity for power. By regulating your nervous system and clearing the "parasitic overlays" of false gurus, you reclaim your 
            divine authority.
          </p>

          <p className="italic text-white/60 text-center py-4 border-y border-white/10 my-8">
            "Stop begging for miracles. Learn the science of alignment, and watch reality reorganize itself around your command."
          </p>
        </div>

        <div className="mt-12 text-center">
            <button onClick={onClose} className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-brand-obsidian transition-colors uppercase tracking-widest text-sm">
                Close Archive
            </button>
        </div>
      </div>
    </div>
  );
};

export default PrologueModal;
