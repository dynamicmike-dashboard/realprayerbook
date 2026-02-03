import React, { useState } from 'react';

interface LeadCaptureProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: { name: string; phone: string }) => void;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate capture and move to next step
    onSuccess({ name, phone });
    setStep(2);
  };

  const handleClose = () => {
    setStep(1); // Reset on close
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose}></div>
      <div className="relative w-full max-w-md bg-brand-obsidian border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
        <button onClick={handleClose} className="absolute top-4 right-4 text-white/50 hover:text-white z-10">
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <h3 className="text-2xl font-regal text-brand-gold mb-2 text-center">Dispatch Details</h3>
        <p className="text-white/80 text-center italic mb-6">"Divine Wisdom coming your way here"</p>
        
        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                required
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Phone Number</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                required
                placeholder="Enter your phone"
              />
            </div>
            <button type="submit" className="w-full bg-brand-gold text-brand-obsidian font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Continue
            </button>
          </form>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="size-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-gold/20">
              <span className="material-symbols-outlined text-brand-gold text-4xl">secure</span>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-xl text-white font-regal">Ready for Dispatch</h4>
              <p className="text-white/60 text-sm">Proceed to our secure payment gateway to finalize your order.</p>
            </div>

            <a 
              href="#" // Placeholder for Stripe Link
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-brand-gold text-brand-obsidian font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-colors shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3"
            >
              <span>Proceed to Secure Checkout</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
            
            <p className="text-xs text-white/30 uppercase tracking-widest">Secured by Stripe</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadCapture;
