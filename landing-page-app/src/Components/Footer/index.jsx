import "./index.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const position = [-32.1741308, 152.4966682];

const customMarkerIcon = L.divIcon({
    html: '<i class="fa fa-map-marker fa-3x" style="color: #5B9D7D;"></i>',
    className: "custom-fa-marker",
    iconSize: [32, 32],
    iconAnchor: [16, 32]
});

function Footer() {
    return (
        <footer className="footer-component">
            <div className="footer-content">
                <div className="footer-map">
                    <div className="footer-info">
                        <h4>Our Location</h4>
                        <h6>2/25 Manning St, Tuncurry NSW 2428</h6>
                    </div>
                    <MapContainer 
                        center={position} 
                        zoom={30} 
                        style={{ height: "175px", width: "100%", borderRadius: "10px" }}
                        scrollWheelZoom={false}
                        dragging={false}
                        zoomControl={false}
                        doubleClickZoom={false}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position} icon={customMarkerIcon} />
                    </MapContainer>
                </div>
                <div className="footer-contact">
                    <p>This site is not endorsed by Facebook in any way. FACEBOOK is a trademark of Facebook, Inc.</p>
                    <a href="/privacy-policy" className="footer-button">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
