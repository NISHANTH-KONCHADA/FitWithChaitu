
// import React from 'react';
// import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './Icons';

// const Footer: React.FC = () => {
//     return (
//         <footer className="bg-black/30 border-t border-accent-cream/10 mt-16">
//             <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
//                 <p className="text-accent-cream/60 text-sm mb-4 md:mb-0">
//                     © 2024 FitWithChaitu. All rights reserved.
//                 </p>
//                 <div className="flex items-center space-x-5">
//                     <a href="#" className="text-accent-cream/60 hover:text-accent-cream transition-colors"><FacebookIcon className="h-5 w-5" /></a>
//                     <a href="#" className="text-accent-cream/60 hover:text-accent-cream transition-colors"><InstagramIcon className="h-5 w-5" /></a>
//                     <a href="#" className="text-accent-cream/60 hover:text-accent-cream transition-colors"><TwitterIcon className="h-5 w-5" /></a>
//                     <a href="#" className="text-accent-cream/60 hover:text-accent-cream transition-colors"><YoutubeIcon className="h-5 w-5" /></a>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
import React from 'react';
import { InstagramIcon, YoutubeIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/30 border-t border-accent-cream/10 mt-16">
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-accent-cream/60 text-sm mb-4 md:mb-0">
                    © 2024 FitWithChaitu. All rights reserved.
                </p>
                <div className="flex items-center space-x-5">
                    <a 
                        href="https://www.instagram.com/chaituuu_livzz?igsh=MXBqb3BpY3NudDRxbg%3D%3D&utm_source=qr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent-cream/60 hover:text-accent-cream transition-colors"
                    >
                        <InstagramIcon className="h-5 w-5" />
                    </a>
                    <a 
                        href="https://youtube.com/@chaituuu_livzz?si=rSbB2V6zMHToo0pc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent-cream/60 hover:text-accent-cream transition-colors"
                    >
                        <YoutubeIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
