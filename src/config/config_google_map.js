export const MAPS_JAVASCRIPT_API = 'AIzaSyAq7uNecEUIl8RoO9d7YfoSZhnQyi4zhaw';
export const GEOCODING_API = 'AIzaSyCJRF8b59Xu9WuqTJiLypgEZaB-oh-g0pI';
export const grey = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#f5f5f5"
            }
        ]
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#616161"
            }
        ]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#f5f5f5"
            }
        ]
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#bdbdbd"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#eeeeee"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#757575"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#e5e5e5"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                color: "#ffffff"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#757575"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#dadada"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#616161"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e"
            }
        ]
    },
    {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
            {
                color: "#e5e5e5"
            }
        ]
    },
    {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
            {
                color: "#eeeeee"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#c9c9c9"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9e9e9e"
            }
        ]
    }
]

export const grayscale = [
    {
        featureType: "administrative",
        elementType: "all",
        stylers: [
            {
                saturation: "-100"
            }
        ]
    },
    {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                lightness: 65
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                lightness: "50"
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "all",
        stylers: [
            {
                saturation: "-100"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "all",
        stylers: [
            {
                lightness: "30"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "all",
        stylers: [
            {
                lightness: "40"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                hue: "#ffff00"
            },
            {
                lightness: -25
            },
            {
                saturation: -97
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels",
        stylers: [
            {
                lightness: -25
            },
            {
                saturation: -100
            }
        ]
    }
]

export const dark = [
    {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "administrative.locality",
        elementType: "labels",
        stylers: [
            {
                "lightness": "-8"
            }
        ]
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#000000"
            }
        ]
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.stroke",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "administrative.neighborhood",
        elementType: "all",
        stylers: [
            {
                color: "#acacac"
            }
        ]
    },
    {
        featureType: "administrative.neighborhood",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#484848"
            }
        ]
    },
    {
        featureType: "administrative.neighborhood",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#ff0000"
            },
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "all",
        stylers: [
            {
                lightness: "-3"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                lightness: "72"
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "labels",
        stylers: [
            {
                lightness: "23"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                lightness: "30"
            },
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "all",
        stylers: [
            {
                lightness: "-19"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                lightness: "2"
            },
            {
                gamma: "1.21"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
            {
                visibility: "off"
            },
            {
                saturation: "15"
            },
            {
                hue: "#ff0000"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [
            {
                lightness: "-43"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "on"
            },
            {
                lightness: "22"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        styler: [
            {
                weight: "0.12"
            },
            {
                lightness: "-23"
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
            {
                visibility: "off"
            },
            {
                lightness: "71"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                lightnes: 30
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                lightness: 40
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "all",
        stylers: [
            {
                saturation: -100
            },
            {
                visibility: "simplified"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "geometry.fill",
        stylers: [
            {
                saturation: "5"
            },
            {
                visibility: "on"
            },
            {
                lightness: "5"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                hue: "#ffff00"
            },
            {
                lightness: "-24"
            },
            {
                saturation: -97
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
            {
                saturation: "-88"
            },
            {
                lightness: "-23"
            },
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels",
        stylers: [
            {
                visibility: "on"
            },
            {
                lightness: -25
            },
            {
                saturation: -100
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
            {
                weight: "0.01"
            },
            {
                lightness: "9"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                lightness: "-32"
            },
            {
                gamma: "2.99"
            }
        ]
    }
]
