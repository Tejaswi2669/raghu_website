import React from 'react';

const Gallery = () => {
    const images = [
        "https://imgs.search.brave.com/Am51_KMon2nVzTX6pzA0RbI-9IFC58FWr1EbmXY-1C0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY4/Nzk0OTE4L3Bob3Rv/L3N0b25lLWdyYW5p/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU00cDdGYmRu/RDF0bGpQOXViTXZD/RTJEbDA3dWhvZnYw/c0NPcENyQzN0aGs9",
        "https://imgs.search.brave.com/Kpuw_OOnHq6etdCg7mQ78fxDtTqHjee7Ubjm4K_DT9s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjYw/NTkwOTM0L3Bob3Rv/L2tpdGNoZW4tY291/bnRlcnRvcC1zYW1w/bGVzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz14MHNvQ3ZB/UVVUUXV0aERVMWlZ/S1pCV0pwVlFlQWc1/MlpSNUN0U0diZ2pZ/PQ",
        "https://imgs.search.brave.com/yw9DrqICz2eGm2Js_-7686wI4SN177TeXyDA89ZGgeo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NDgxMzk5L3Bob3Rv/L2dyYXktc3RvbmUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW0xUGdPdlJ5dTF0/bVRxY0JHM3VnLXp0/Wl9xX0g3aTBaUlc3/bWszYjhKbkE9",
        "https://imgs.search.brave.com/T3toub4G0064mTAdcxeJ1aHCMPz19mOAfN-uKPp0JLY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc0/ODQ4MzE5L3Bob3Rv/L2dyYW5pdGUtY3Vi/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9QzVleDdmN0tQ/MTRneDg5cGFNbkhi/NmJtdkM0dDc0N3ZZ/a1BtU25HTVE1ST0"
    ];

    return (
        <main>
            <h2>Gallery</h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Gallery ${index}`} width="300" />
                ))}
            </div>
        </main>
    );
};

export default Gallery;
