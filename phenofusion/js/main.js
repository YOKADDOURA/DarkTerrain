//function to start the Leaflet map
function createMap(){

    //Varibles needed for running the funcation
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a> | <a href="https://github.com/YOKADDOURA/2018-NEON-Data-Institute-Git-Demo">Youssef O. Kaddoura</a>';

    var apitoken = 'pk.eyJ1Ijoia2FkZG91cmEiLCJhIjoiY2syeGsxajVxMGNhYjNqcnN1aHI1ODV2ZiJ9.9D8dbqHgOd6uZaERuKZIzQ' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */

    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'; //URL used for Stanard MaxBox Styles

    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //URL used for Custom MapBox Styles


    //Variables for the different basemaps
    var darkTerrain = L.tileLayer(mbStyleUrl, {id: 'kaddoura/ck2xkq6cu041z1cpiiwx13vya', token: apitoken,  attribution: mbAttr});

    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});

    var dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken,  attribution: mbAttr});

    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});



    //create the map*/
    var map = L.map('map', {
        center: [29.689282, -81.993431],//Coordinated to center the map
        zoom: 12, //zoom level
        layers:darkTerrain //default base
    });
    var greenIcon = L.icon({
        iconUrl: 'images/NEON_tower2.png',
        shadowUrl: 'images/NEON_tower_shadow2.png',

        iconSize:     [21, 34], // size of the icon
        shadowSize:   [14, 38], // size of the shadow
        iconAnchor:   [0, 20], //11,47 point of the icon which will correspond to marker's location
        shadowAnchor: [0, 20],  // 4, 42the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'images/NEON_tower_shadow2.png',
            iconSize:     [21, 34],
            shadowSize:   [14, 38],
            iconAnchor:   [0, 20], //11,47
            shadowAnchor: [0, 20],
            popupAnchor:  [-3, -76]
        }
    });

    var greenIcon = new LeafIcon({iconUrl: 'images/NEON_tower2.png'}),
    redIcon = new LeafIcon({iconUrl: 'images/NEON_tower2.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'images/NEON_tower2.png'});

    L.icon = function (options) {
    return new L.Icon(options);
    };

    L.marker([44.063869, -71.287375], {icon: greenIcon}).addTo(map).bindPopup("NEON Site - D01 (Northeast) Bartlett Experimental Forest, New Hampshire - top-of-tower camera.");
    L.marker([42.536911, -72.172650], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D01 (Northeast) Harvard Forest, Massachusetts - tower top");
    L.marker([39.033698, -78.041788], {icon: orangeIcon}).addTo(map).bindPopup("NEON Site - D02 (Mid-Atlantic) Blandy Experimental Farm, Virginia - tower top");
    L.marker([38.892925, -78.139494], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D02 (Mid-Atlantic) Smithsonian Conservation Biology Institute, Virginia - tower top");
    L.marker([38.890080, -76.560010], {icon: orangeIcon}).addTo(map).bindPopup("NEON Site - D02 (Mid-Atlantic) Smithsonian Environmental Research Center , top");
    L.marker([28.125050, -81.436190], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D03 (Southeast) Disney Wilderness Preserve, Florida - tower top");
    L.marker([31.194839, -84.468623], {icon: orangeIcon}).addTo(map).bindPopup("NEON Site - D03 (Southeast) Jones Ecological Research Center, Georgia - tower top");
    L.marker([29.689282, -81.993431], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D03 (Southeast) Ordway-Swisher Biological Station, Florida - tower top");
    L.marker([17.969550, -66.868700], {icon: orangeIcon}).addTo(map).bindPopup("NEON Site - D04 (Atlantic Neotropical) Guanica Forest, Puerto Rico - tower top");
    L.marker([18.021261, -67.076889], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D04 (Atlantic Neotropical) Lajas Experimental Station, Puerto Rico - tower top.");
    L.marker([45.508940, -89.586370], {icon: orangeIcon}).addTo(map).bindPopup("NEON Site - D05 (Great Lakes) Steigerwaldt Land Services, Wisconsin - top-of-tower camera.");
    L.marker([45.493730, -89.585720], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D05 (Great Lakes) Treehaven, Wisconsin - tower top.");
    L.marker([46.233910, -89.537254], {icon: orangeIcon}).addTo(map).bindPopup("NEON Site - D05 (Great Lakes) UNDERC, Michigan - tower top");
    L.marker([39.110446, -96.612935], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D06 (Prairie Peninsula) Konza Prairie Biological Station - top");
    L.marker([39.100770, -96.563090], {icon: orangeIcon}).addTo(map).bindPopup("NEON Site - D06 (Prairie Peninsula) Konza Prairie Biological Station, Kansas - top-of-tower camera");
    L.marker([39.040431, -95.192150], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D06 (Prairie Peninsula) The University of Kansas Field Station, Kansas - tower top");
    L.marker([35.688960, -83.501950], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D07 (Appalachians and Cumberland Plateau) Great Smoky Mountains National Park, Tennessee - tower top ");
    L.marker([37.378314, -80.524847], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D07 (Appalachians and Cumberland Plateau) Mountain Lake Biological Station, Virginia - tower top ");
    L.marker([35.964128, -84.282588], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D07 (Appalachians and Cumberland Plateau) Oak Ridge, Tennessee - tower top ");
    L.marker([32.541727, -87.803877], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D08 (Ozarks Complex) Dead Lake, Alabama - tower top ");
    L.marker([31.853880 ,-88.161220 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D08 (Ozarks Complex) Lenoir Landing, AL - top of tower ");
    L.marker([32.950470 ,-87.393259 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D08 (Ozarks Complex) Talladega National Forest, Alabama - tower top ");
    L.marker([47.161647 ,-99.106556 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D09 (Northern Plains) Dakota Coteau Field School, North Dakota - top-of-tower camera ");
    L.marker([46.769720 ,-100.915350 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D09 (Northern Plains) Northern Great Plains Research Laboratory, North Dakota - top-of-tower camera ");
    L.marker([47.128200 ,-99.241334 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D09 (Northern Plains) Woodworth, North Dakota - tower top ");
    L.marker([40.815530 ,-104.745600 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D10 (Central Plains) Central Plains Experimental Range, Nunn, CO top ");
    L.marker([40.275903 ,-105.545955 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D10 (Central Plains) Rocky Mountain National Park CASTNET, Colorado - tower top ");
    L.marker([40.461894 ,-103.029290 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D10 (Central Plains) Sterling, Colorado - tower top ");
    L.marker([33.401230 ,-97.570000 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D11 (Southern Plains) LBJ National Grassland, Texas - tower top ");
    L.marker([35.410590,-99.058790 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D11 (Southern Plains) Klemme Range Research Station, Oklahoma - top-of-tower camera ");
    L.marker([44.953480 ,-110.539140 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D12 (Northern Rockies) Yellowstone National Park, Wyoming - top-of-tower camera ");
    L.marker([38.248330 ,-109.388270 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D13 (Southern Rockies and Colorado Plateau) Moab, Utah - top-of-tower camera ");
    L.marker([40.054250 ,-105.582370 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D13 (Southern Rockies and Colorado Plateau) Niwot Ridge Mountain Research Station, Colorado - tower top ");
    L.marker([32.590680 ,-106.842540 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D14 (Desert Southwest) Jornada LTER, New Mexico - top-of-tower camera ");
    L.marker([31.910680 ,-110.835490 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D14 (Desert Southwest) Santa Rita Experimental Range, Arizona - tower top ");
    L.marker([40.177599 ,-112.452452 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D15 (Great Basin) Onaqui-Ault, Utah - top-of-tower camera ");
    L.marker([45.762430 ,-122.330330 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D16 (Pacific Northwest) Abby Road, Washington - tower top ");
    L.marker([45.820490 ,-121.951910 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D16 (Pacific Northwest) Wind River Experimental Forest, Washington - top-of-tower camera ");
    L.marker([37.108780 ,-119.732280 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D17 (Pacific Southwest) San Joaquin, California - top-of-tower camera ");
    L.marker([37.033370 ,-119.262190 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D17 (Pacific Southwest) Soaproot Saddle, California - top-of-tower camera ");
    L.marker([37.005830 ,-119.006020 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D17 (Pacific Southwest) Lower Teakettle, California - top-of-tower camera ");
    L.marker([71.282410 ,-156.619360 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D18 (Tundra) Barrow Environmental Observatory, Alaska - tower top ");
    L.marker([68.661090 ,-149.370470 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D18 (Tundra) Toolik, Alaska - tower top ");
    L.marker([65.154010 ,-147.502580 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D19 (Taiga) Caribou Creek - Poker Flats Watershed, Alaska - top-of-tower camera ");
    L.marker([63.881120 ,-145.751360 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D19 (Taiga) Delta Junction, Alaska - tower top ");
    L.marker([63.875690 ,-149.213340 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D19 (Taiga) Healy - top of tower ");
    L.marker([19.553090 ,-155.317310 ], {icon: redIcon}).addTo(map).bindPopup("NEON Site - D20 (Pacific Tropical) Pu`u Maka`ala Natural Area Reserve, Hawaii - top-of-tower camera");

/**
L.marker([96.182959, 72.820194], {icon: greenIcon}).addTo(map).bindPopup("NEON Site - D01 (Northeast) Bartlett Experimental Forest, New Hampshire - top-of-tower camera.");
L.marker([93.478779, 64.9386115], {icon: greenIcon}).addTo(map).bindPopup("NEON Site - D01 (Northeast) Bartlett Experimental Forest, New Hampshire - top-of-tower camera.");
L.marker([89.798620, 108.639677], {icon: greenIcon}).addTo(map).bindPopup("NEON Site - D01 (Northeast) Bartlett Experimental Forest, New Hampshire - top-of-tower camera.");
L.marker([77.504438, 76.184231], {icon: greenIcon}).addTo(map).bindPopup("NEON Site - D01 (Northeast) Bartlett Experimental Forest, New Hampshire - top-of-tower camera.");
**/
/**
L.marker([72.820194,96.182959], {icon: greenIcon}).addTo(map).bindPopup("NEON Site - D01 (Northeast) Bartlett Experimental Forest, New Hampshire - top-of-tower camera.");
L.marker([64.9386115,93.478779], {icon: greenIcon}).addTo(map).bindPopup("NEON Site - D01 (Northeast) Bartlett Experimental Forest, New Hampshire - top-of-tower camera.");
L.marker([108.639677,89.798620], {icon: greenIcon}).addTo(map).bindPopup("NEON Site - D01 (Northeast) Bartlett Experimental Forest, New Hampshire - top-of-tower camera.");
L.marker([76.184231,77.504438], {icon: greenIcon}).addTo(map).bindPopup("NEON Site - D01 (Northeast) Bartlett Experimental Forest, New Hampshire - top-of-tower camera.");
**/
    //create the basemap control layer*/
    var baseLayers = {
		"Outdoors": outdoors,
        "Grayscale": grayscale,
		"Darkscale": dark,
        "Dark Terrain": darkTerrain
    };

    L.control.layers(baseLayers).addTo(map);
};

//calling the funcation
$(document).ready(createMap);
