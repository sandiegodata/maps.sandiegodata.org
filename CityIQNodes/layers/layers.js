var wms_layers = [];

        var lyr_StamenToner_0 = new ol.layer.Tile({
            'title': 'StamenToner_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
            })
        });var format_parking_zones_1 = new ol.format.GeoJSON();
var features_parking_zones_1 = format_parking_zones_1.readFeatures(json_parking_zones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parking_zones_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_parking_zones_1.addFeatures(features_parking_zones_1);var lyr_parking_zones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parking_zones_1, 
                style: style_parking_zones_1,
                title: '<img src="styles/legend/parking_zones_1.png" /> parking_zones'
            });var format_Nodes_2 = new ol.format.GeoJSON();
var features_Nodes_2 = format_Nodes_2.readFeatures(json_Nodes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nodes_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Nodes_2.addFeatures(features_Nodes_2);var lyr_Nodes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nodes_2, 
                style: style_Nodes_2,
    title: 'Nodes<br />\
    <img src="styles/legend/Nodes_2_0.png" /> CAMERA<br />\
    <img src="styles/legend/Nodes_2_1.png" /> EM_SENSOR<br />\
    <img src="styles/legend/Nodes_2_2.png" /> ENV_SENSOR<br />\
    <img src="styles/legend/Nodes_2_3.png" /> MIC<br />\
    <img src="styles/legend/Nodes_2_4.png" /> NODE<br />\
    <img src="styles/legend/Nodes_2_5.png" /> <br />'
        });

lyr_StamenToner_0.setVisible(true);lyr_parking_zones_1.setVisible(true);lyr_Nodes_2.setVisible(true);
var layersList = [lyr_StamenToner_0,lyr_parking_zones_1,lyr_Nodes_2];
lyr_parking_zones_1.set('fieldAliases', {'field_1': 'field_1', 'locationuid': 'locationuid', 'locationtype': 'locationtype', 'parentlocationuid': 'parentlocationuid', 'community_name': 'community_name', 'tract_geoid': 'tract_geoid', 'roadsegid': 'roadsegid', 'speed': 'speed', 'oneway': 'oneway', 'abloaddr': 'abloaddr', 'abhiaddr': 'abhiaddr', 'rd30full': 'rd30full', });
lyr_Nodes_2.set('fieldAliases', {'assetuid': 'assetuid', 'assettype': 'assettype', 'parentassetuid': 'parentassetuid', 'mediatype': 'mediatype', 'events': 'events', 'community_name': 'community_name', 'tract_geoid': 'tract_geoid', 'roadsegid': 'roadsegid', 'speed': 'speed', 'oneway': 'oneway', 'abloaddr': 'abloaddr', 'abhiaddr': 'abhiaddr', 'rd30full': 'rd30full', });
lyr_parking_zones_1.set('fieldImages', {'field_1': 'Range', 'locationuid': 'TextEdit', 'locationtype': 'TextEdit', 'parentlocationuid': 'TextEdit', 'community_name': 'TextEdit', 'tract_geoid': 'TextEdit', 'roadsegid': 'TextEdit', 'speed': 'TextEdit', 'oneway': 'TextEdit', 'abloaddr': 'TextEdit', 'abhiaddr': 'TextEdit', 'rd30full': 'TextEdit', });
lyr_Nodes_2.set('fieldImages', {'assetuid': 'TextEdit', 'assettype': 'TextEdit', 'parentassetuid': 'TextEdit', 'mediatype': 'TextEdit', 'events': 'TextEdit', 'community_name': 'TextEdit', 'tract_geoid': 'TextEdit', 'roadsegid': 'Range', 'speed': 'Range', 'oneway': 'TextEdit', 'abloaddr': 'Range', 'abhiaddr': 'Range', 'rd30full': 'TextEdit', });
lyr_parking_zones_1.set('fieldLabels', {'field_1': 'no label', 'locationuid': 'no label', 'locationtype': 'no label', 'parentlocationuid': 'no label', 'community_name': 'no label', 'tract_geoid': 'no label', 'roadsegid': 'no label', 'speed': 'no label', 'oneway': 'no label', 'abloaddr': 'no label', 'abhiaddr': 'no label', 'rd30full': 'no label', });
lyr_Nodes_2.set('fieldLabels', {'assetuid': 'no label', 'assettype': 'no label', 'parentassetuid': 'no label', 'mediatype': 'no label', 'events': 'no label', 'community_name': 'no label', 'tract_geoid': 'no label', 'roadsegid': 'no label', 'speed': 'no label', 'oneway': 'no label', 'abloaddr': 'no label', 'abhiaddr': 'no label', 'rd30full': 'no label', });
lyr_Nodes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});