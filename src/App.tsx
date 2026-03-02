import React from 'react';
import PartnersSection from './PartnersSection';
import MediaSection from './MediaSection';
import SpotifySection from './SpotifySection';

function Home() {
    return (
        <div>
            <PartnersSection />
            <MediaSection /> {/* Added Media Section component here */}
            <SpotifySection />
        </div>
    );
}

export default Home;
