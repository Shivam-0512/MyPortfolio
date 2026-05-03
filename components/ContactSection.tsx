import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { PixelButton } from './PixelButton';
import { PixelContainer } from './PixelContainer';

export const ContactSection = () => {
  const [questAccepted, setQuestAccepted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xkgzezlv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    background: '#0a0f1e',
    border: '2px solid #1e293b',
    color: '#e2e8f0',
    width: '100%',
    padding: '10px 14px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.85rem',
    outline: 'none',
    transition: 'border-color 0.15s',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: '"Press Start 2P", monospace',
    fontSize: '0.52rem',
    color: '#6366f1',
    display: 'block',
    marginBottom: 6,
    letterSpacing: '0.08em',
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="pixel-section-header">
          AVAILABLE QUESTS
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Quest board ── */}
          <div className="flex flex-col gap-6">

            {/* Main quest card */}
            <PixelContainer>
              <div className="flex items-center gap-2 mb-4">
                <span style={{ fontSize: '1.2rem' }}>⚔</span>
                <span
                  className="font-pixel"
                  style={{ fontSize: '0.65rem', color: '#facc15', letterSpacing: '0.08em' }}
                >
                  NEW QUEST AVAILABLE!
                </span>
              </div>

              <div className="space-y-2 mb-5" style={{ borderLeft: '2px solid #4338ca', paddingLeft: 12 }}>
                {[
                  { label: 'OBJECTIVE',   val: 'Send a message to Shivam' },
                  { label: 'REWARD',      val: 'Collaboration Opportunity' },
                  { label: 'DIFFICULTY',  val: '★☆☆☆☆ (Very Easy)' },
                  { label: 'TIME LIMIT',  val: '~24 Hours Response' },
                ].map(r => (
                  <div key={r.label} className="flex gap-2">
                    <span className="font-pixel flex-shrink-0" style={{ fontSize: '0.5rem', color: '#6366f1', minWidth: 80 }}>
                      {r.label}
                    </span>
                    <span className="font-pixel" style={{ fontSize: '0.5rem', color: '#94a3b8' }}>:</span>
                    <span className="font-pixel" style={{ fontSize: '0.5rem', color: '#e2e8f0' }}>{r.val}</span>
                  </div>
                ))}
              </div>

              {!questAccepted ? (
                <PixelButton
                  variant="primary"
                  onClick={() => setQuestAccepted(true)}
                  id="accept-quest-btn"
                >
                  ⚔ [ ACCEPT QUEST ]
                </PixelButton>
              ) : (
                <div
                  className="font-pixel py-2 px-4"
                  style={{
                    fontSize: '0.52rem',
                    color: '#4ade80',
                    border: '2px solid #4ade80',
                    background: 'rgba(74,222,128,0.08)',
                    boxShadow: '3px 3px 0 #166534',
                  }}
                >
                  ✓ QUEST ACCEPTED — FILL THE FORM →
                </div>
              )}
            </PixelContainer>

            {/* Contact info */}
            <PixelContainer title="// CONTACT INFO">
              <div className="space-y-4">
                {[
                  { icon: <Mail size={14} />, label: 'EMAIL', val: 'shivkush512@gmail.com', href: 'mailto:shivkush512@gmail.com' },
                  { icon: <Phone size={14} />, label: 'PHONE', val: '+91 9555971850', href: 'tel:+919555971850' },
                  { icon: <MapPin size={14} />, label: 'LOCATION', val: 'Prayagraj, India', href: undefined },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-8 h-8"
                      style={{ background: 'rgba(99,102,241,0.1)', border: '2px solid #4338ca', color: '#a5b4fc' }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <div className="font-pixel" style={{ fontSize: '0.45rem', color: '#6366f1' }}>{c.label}</div>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="font-pixel transition-colors"
                          style={{ fontSize: '0.52rem', color: '#94a3b8', textDecoration: 'none' }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#a5b4fc')}
                          onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
                        >
                          {c.val}
                        </a>
                      ) : (
                        <span className="font-pixel" style={{ fontSize: '0.52rem', color: '#94a3b8' }}>{c.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </PixelContainer>
          </div>

          {/* ── Quest form ── */}
          <div
            className="flex flex-col h-full"
            style={{
              opacity: questAccepted ? 1 : 0.3,
              pointerEvents: questAccepted ? 'all' : 'none',
              transition: 'opacity 0.4s',
            }}
          >
            <PixelContainer title="// QUEST FORM — SEND MESSAGE" className="h-full flex flex-col">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle size={40} color="#4ade80" />
                  <div className="font-pixel" style={{ fontSize: '0.65rem', color: '#4ade80' }}>
                    QUEST COMPLETE!
                  </div>
                  <div className="font-pixel" style={{ fontSize: '0.5rem', color: '#475569' }}>
                    Message sent. I'll respond within 24 hours.
                  </div>
                  <PixelButton variant="outline" onClick={() => { setStatus('idle'); setQuestAccepted(false); }}>
                    [ NEW QUEST ]
                  </PixelButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow">
                  <div>
                    <label htmlFor="name" style={labelStyle}>PLAYER NAME</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name..."
                      required
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#6366f1')}
                      onBlur={e => (e.target.style.borderColor = '#1e293b')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>CONTACT SCROLL</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#6366f1')}
                      onBlur={e => (e.target.style.borderColor = '#1e293b')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" style={labelStyle}>QUEST DESCRIPTION</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your quest..."
                      required
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={e => (e.target.style.borderColor = '#6366f1')}
                      onBlur={e => (e.target.style.borderColor = '#1e293b')}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="font-pixel" style={{ fontSize: '0.5rem', color: '#f87171' }}>
                      ✗ QUEST FAILED — Please try again.
                    </p>
                  )}

                  <div className="mt-auto pt-4">
                    <PixelButton variant="primary" type="submit" disabled={status === 'sending'} className="self-start">
                      {status === 'sending' ? (
                        <><Loader2 size={12} className="animate-spin" /> SENDING...</>
                      ) : (
                        <><Send size={12} /> [ SUBMIT QUEST ]</>
                      )}
                    </PixelButton>
                  </div>
                </form>
              )}
            </PixelContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
