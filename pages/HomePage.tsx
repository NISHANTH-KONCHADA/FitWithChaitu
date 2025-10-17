import React, { useState, useRef } from 'react';
import Button from '../components/Button';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const HomePage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    
    const consultationFormRef = useRef<HTMLElement>(null);

    const handleScrollToConsultation = () => {
        consultationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleConsultationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!name.trim() || !email.trim() || !message.trim()) {
            alert('Please fill in all fields.');
            return;
        }
        setFormStatus('submitting');

        // --- Live Backend Integration using Formspree ---
        // 1. Go to https://formspree.io and create a new form.
        // 2. Replace the URL below with your own Formspree form endpoint.
        const formSpreeEndpoint = 'https://formspree.io/f/manpvpek';

        try {
          const response = await fetch(formSpreeEndpoint, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
          });

          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }

          setFormStatus('success');
          setName(''); 
          setEmail(''); 
          setMessage('');
        } catch (error) {
          console.error('Submission failed:', error);
          setFormStatus('error');
        } finally {
            setTimeout(() => setFormStatus('idle'), 5000); // Reset form status after 5 seconds
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1672758955234-839f1569e54c?q=80&w=2070&auto=format&fit=crop')" }}>
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                <div className="container mx-auto px-6 z-10">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading tracking-wide text-accent-cream leading-tight">
                            Transform Your <span className="text-primary-red">Fitness</span> Journey
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-accent-cream/80 max-w-2xl">
                            Professional coaching tailored to your goals. Track progress, stay motivated, and achieve results with personalized training programs.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Button onClick={handleScrollToConsultation} variant="primary" className="text-lg py-3 px-8">Get Started →</Button>
                            <Button onClick={handleScrollToConsultation} variant="secondary" className="text-lg py-3 px-8">Book a Call</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics Section */}
            <section className="bg-dark-bg py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <p className="text-5xl font-heading text-primary-red">50+</p>
                            <p className="mt-2 text-xl text-accent-cream/80">Active Clients</p>
                        </div>
                        <div>
                            <p className="text-5xl font-heading text-primary-red">5+</p>
                            <p className="mt-2 text-xl text-accent-cream/80">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-5xl font-heading text-primary-red">95%</p>
                            <p className="mt-2 text-xl text-accent-cream/80">Success Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Form Section */}
            <section ref={consultationFormRef} className="py-20 bg-black/20" id="consultation">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                         <h2 className="text-4xl md:text-5xl font-heading text-accent-cream">Book Your Free Consultation</h2>
                         <div className="w-24 h-1 bg-primary-red mx-auto mt-4 mb-10"></div>
                         <form onSubmit={handleConsultationSubmit} className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-4 text-accent-cream placeholder-accent-cream/50 focus:outline-none focus:ring-2 focus:ring-primary-red"
                                required
                                disabled={formStatus === 'submitting'}
                            />
                             <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-4 text-accent-cream placeholder-accent-cream/50 focus:outline-none focus:ring-2 focus:ring-primary-red"
                                required
                                disabled={formStatus === 'submitting'}
                            />
                            <textarea
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                className="w-full bg-accent-cream/10 border border-accent-cream/20 rounded-md p-4 text-accent-cream placeholder-accent-cream/50 focus:outline-none focus:ring-2 focus:ring-primary-red"
                                required
                                disabled={formStatus === 'submitting'}
                            ></textarea>
                            <Button type="submit" variant="primary" className="w-full py-4 text-lg" disabled={formStatus === 'submitting'}>
                                {formStatus === 'submitting' ? 'Sending...' : 'Book Your Free Consultation'}
                            </Button>
                         </form>
                         {formStatus === 'success' && <p className="mt-4 text-green-400">Thank you! Your request has been sent. We will get back to you shortly.</p>}
                         {formStatus === 'error' && <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;