import React from 'react';

const ProgramsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-heading text-accent-cream">Our Training Programs</h1>
                <div className="w-24 h-1 bg-primary-red mx-auto mt-4 mb-10"></div>
                <p className="text-lg text-accent-cream/80 max-w-3xl mx-auto">
                    Welcome to our programs page! We are currently finalizing our new set of personalized training programs.
                    Details about our specialized weight loss, muscle gain, and endurance coaching will be available here very soon.
                    Stay tuned for updates!
                </p>
            </div>
        </div>
    );
};

export default ProgramsPage;