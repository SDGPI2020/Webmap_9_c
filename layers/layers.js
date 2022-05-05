var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_BroadbandAccess_1 = new ol.format.GeoJSON();
var features_BroadbandAccess_1 = format_BroadbandAccess_1.readFeatures(json_BroadbandAccess_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BroadbandAccess_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BroadbandAccess_1.addFeatures(features_BroadbandAccess_1);
var lyr_BroadbandAccess_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BroadbandAccess_1, 
                style: style_BroadbandAccess_1,
                interactive: true,
    title: 'Broadband Access<br />\
    <img src="styles/legend/BroadbandAccess_1_0.png" /> 70 - 80%<br />\
    <img src="styles/legend/BroadbandAccess_1_1.png" /> 80 - 85%<br />\
    <img src="styles/legend/BroadbandAccess_1_2.png" /> 85 - 90%<br />\
    <img src="styles/legend/BroadbandAccess_1_3.png" /> 90 - 95%<br />\
    <img src="styles/legend/BroadbandAccess_1_4.png" /> Achieved Goal<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_BroadbandAccess_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_BroadbandAccess_1];
lyr_BroadbandAccess_1.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'GEO_ID': 'GEO_ID', 'NAME_2': 'NAME_2', 'S2801_C02_012E': 'S2801_C02_012E', 'Internet': 'Internet', });
lyr_BroadbandAccess_1.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'GEO_ID': 'Hidden', 'NAME_2': 'Hidden', 'S2801_C02_012E': 'Hidden', 'Internet': 'TextEdit', });
lyr_BroadbandAccess_1.set('fieldLabels', {'Internet': 'inline label', });
lyr_BroadbandAccess_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});