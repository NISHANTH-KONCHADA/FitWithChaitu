import React from 'react';

const BlogPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-heading text-accent-cream">FitWithChaitu Blog</h1>
                <div className="w-24 h-1 bg-primary-red mx-auto mt-4 mb-10"></div>
                <p className="text-lg text-accent-cream/80 max-w-3xl mx-auto">
                    Our blog is coming soon! We're excited to share valuable fitness insights, nutrition tips, client success stories, and much more.
                    Check back shortly for articles that will help you on your fitness journey.
                </p>
            </div>
        </div>
    );
};

export default BlogPage;