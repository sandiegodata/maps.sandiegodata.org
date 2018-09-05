var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LandOwners_0 = new ol.format.GeoJSON();
var features_LandOwners_0 = format_LandOwners_0.readFeatures(json_LandOwners_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandOwners_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LandOwners_0.addFeatures(features_LandOwners_0);var lyr_LandOwners_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LandOwners_0, 
                style: style_LandOwners_0,
    title: 'Land Owners<br />\
    <img src="styles/legend/LandOwners_0_0.png" /> Bureau of Land Management<br />\
    <img src="styles/legend/LandOwners_0_1.png" /> California Department of Fish and Game<br />\
    <img src="styles/legend/LandOwners_0_2.png" /> City<br />\
    <img src="styles/legend/LandOwners_0_3.png" /> County<br />\
    <img src="styles/legend/LandOwners_0_4.png" /> Fire Districts<br />\
    <img src="styles/legend/LandOwners_0_5.png" /> Military Reservations<br />\
    <img src="styles/legend/LandOwners_0_6.png" /> Other Federal<br />\
    <img src="styles/legend/LandOwners_0_7.png" /> Other Special Districts<br />\
    <img src="styles/legend/LandOwners_0_8.png" /> Port of San Diego<br />\
    <img src="styles/legend/LandOwners_0_9.png" /> School Districts<br />\
    <img src="styles/legend/LandOwners_0_10.png" /> State<br />\
    <img src="styles/legend/LandOwners_0_11.png" /> State (Caltrans)<br />\
    <img src="styles/legend/LandOwners_0_12.png" /> State of California Land Commission<br />\
    <img src="styles/legend/LandOwners_0_13.png" /> State Park<br />\
    <img src="styles/legend/LandOwners_0_14.png" /> U.S. Fish and Wildlife Service<br />\
    <img src="styles/legend/LandOwners_0_15.png" /> Water Districts<br />\
    <img src="styles/legend/LandOwners_0_16.png" /> <br />'
        });

lyr_LandOwners_0.setVisible(true);
var layersList = [baseLayer,lyr_LandOwners_0];
lyr_LandOwners_0.set('fieldAliases', {'own': 'own', 'ownership': 'ownership', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', 'NAME': 'NAME', 'CODE': 'CODE', 'CREATEDBY': 'CREATEDBY', 'CREATEDDAT': 'CREATEDDAT', 'UPDATEDBY': 'UPDATEDBY', 'UPDATEDDAT': 'UPDATEDDAT', 'DOCYR': 'DOCYR', 'DOCNO': 'DOCNO', 'DOCDATE': 'DOCDATE', 'SUBJECT': 'SUBJECT', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_LandOwners_0.set('fieldImages', {'own': 'TextEdit', 'ownership': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'CREATEDBY': 'TextEdit', 'CREATEDDAT': 'TextEdit', 'UPDATEDBY': 'TextEdit', 'UPDATEDDAT': 'TextEdit', 'DOCYR': 'TextEdit', 'DOCNO': 'TextEdit', 'DOCDATE': 'TextEdit', 'SUBJECT': 'TextEdit', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_LandOwners_0.set('fieldLabels', {'own': 'no label', 'ownership': 'header label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', 'NAME': 'no label', 'CODE': 'no label', 'CREATEDBY': 'no label', 'CREATEDDAT': 'no label', 'UPDATEDBY': 'no label', 'UPDATEDDAT': 'no label', 'DOCYR': 'no label', 'DOCNO': 'no label', 'DOCDATE': 'no label', 'SUBJECT': 'no label', 'SHAPE_STAr': 'no label', 'SHAPE_STLe': 'no label', });
lyr_LandOwners_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});