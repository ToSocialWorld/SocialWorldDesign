import {Loader} from '@googlemaps/js-api-loader';

const apiKey = "AIzaSyDzn8GqfC8fZdO69esWjgQk2U9ewcUriXw";

export default class GMap {
    constructor(center, zoom, markerIcon, container) {
        this.mapDefaultSettings = {
            center: center,
            zoom: zoom || 12
        };

        this.markersData = null;
        this.markerIcon = markerIcon;
        this.onMapLoad = this.onMapLoad.bind(this);

        this.loaded = new Loader({
            apiKey: apiKey,
            version: "weekly",
            libraries: ["places"]
        }).load();
        this.loaded.then(this.onMapLoad);

        this.domElement = document.querySelector(container);
    }

    addInfoWindow(marker, markerData) {
        if(markerData.infoWindowOptions) {
            marker.addListener("click", () => {
                const infoWindow = new this.maps.InfoWindow(markerData.infoWindowOptions);

                infoWindow.open({
                    anchor: marker,
                    map: this.map,
                    shouldFocus: false
                });
            });
        }
    }

    getLatLng(address) {
        const geocoder = new this.maps.Geocoder();
        return geocoder.geocode({address: address})
            .then(geocoder => {
                return geocoder.results[0].geometry.location
            })
            .catch(error => console.error(error.message));
    }

    getPositionFromAddress(address) {
        let addressString = "";
        for(let propName in address) {
            if(!address[propName]) continue;
            addressString += address[propName] + " ";
        }
        return this.getLatLng(addressString);
    }

    getMarkersFromData() {
        if(!this.markersData) return null;
        return Promise.all(this.markersData.map(async markerData => {           
            markerData.map = this.map;
            markerData.position = markerData.address.position || await this.getPositionFromAddress(markerData.address);
            markerData.address.position = markerData.position;
            
            markerData.icon = this.markerIcon;
            const marker = new this.maps.Marker(markerData);
            this.addInfoWindow(marker, markerData);
            return marker;
        }));
    }

    async initializeMap() {
        let mapCenterString = this.mapDefaultSettings.center;
        this.mapDefaultSettings.center = await this.getLatLng(mapCenterString);

        this.setCenter(this.mapDefaultSettings.center);
    }

    onMapLoad(google) {
        this.maps = google.maps;
        this.map = new google.maps.Map(this.domElement, {
            ...this.mapDefaultSettings,
            center: null
        });

        this.initializeMap();
    };

    async updateMarkers(markersData) {
        await this.loaded;
        if(this.markers) {
            let markers = await this.markers;
            markers.forEach(marker => {
                marker.setMap(null);
            });
        }

        this.markersData = markersData;
        this.markers = this.getMarkersFromData();
    }

    setCenter(coordinates) {
        this.map.setCenter(coordinates);
    }
}