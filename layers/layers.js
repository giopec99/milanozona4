var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_precincts_milano_census_1 = new ol.format.GeoJSON();
var features_precincts_milano_census_1 = format_precincts_milano_census_1.readFeatures(json_precincts_milano_census_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_precincts_milano_census_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_precincts_milano_census_1.addFeatures(features_precincts_milano_census_1);
var lyr_precincts_milano_census_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_precincts_milano_census_1, 
                style: style_precincts_milano_census_1,
                popuplayertitle: "precincts_milano_census",
                interactive: true,
    title: 'precincts_milano_census<br />\
    <img src="styles/legend/precincts_milano_census_1_0.png" /> -44 - -41<br />\
    <img src="styles/legend/precincts_milano_census_1_1.png" /> -41 - -38<br />\
    <img src="styles/legend/precincts_milano_census_1_2.png" /> -38 - -35<br />\
    <img src="styles/legend/precincts_milano_census_1_3.png" /> -35 - -32<br />\
    <img src="styles/legend/precincts_milano_census_1_4.png" /> -32 - -29<br />\
    <img src="styles/legend/precincts_milano_census_1_5.png" /> -29 - -26<br />\
    <img src="styles/legend/precincts_milano_census_1_6.png" /> -26 - -23<br />\
    <img src="styles/legend/precincts_milano_census_1_7.png" /> -23 - -20<br />\
    <img src="styles/legend/precincts_milano_census_1_8.png" /> -20 - -17<br />\
    <img src="styles/legend/precincts_milano_census_1_9.png" /> -17 - -14<br />\
    <img src="styles/legend/precincts_milano_census_1_10.png" /> -14 - -11<br />\
    <img src="styles/legend/precincts_milano_census_1_11.png" /> -11 - -8<br />\
    <img src="styles/legend/precincts_milano_census_1_12.png" /> -8 - -5<br />\
    <img src="styles/legend/precincts_milano_census_1_13.png" /> -5 - -2<br />\
    <img src="styles/legend/precincts_milano_census_1_14.png" /> -2 - 1<br />\
    <img src="styles/legend/precincts_milano_census_1_15.png" /> 1 - 4<br />\
    <img src="styles/legend/precincts_milano_census_1_16.png" /> 4 - 7<br />\
    <img src="styles/legend/precincts_milano_census_1_17.png" /> 7 - 10<br />\
    <img src="styles/legend/precincts_milano_census_1_18.png" /> 10 - 13<br />\
    <img src="styles/legend/precincts_milano_census_1_19.png" /> 13 - 16<br />\
    <img src="styles/legend/precincts_milano_census_1_20.png" /> 16 - 19<br />\
    <img src="styles/legend/precincts_milano_census_1_21.png" /> 19 - 22<br />\
    <img src="styles/legend/precincts_milano_census_1_22.png" /> 22 - 25<br />\
    <img src="styles/legend/precincts_milano_census_1_23.png" /> 25 - 28<br />\
    <img src="styles/legend/precincts_milano_census_1_24.png" /> 28 - 31<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_precincts_milano_census_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_precincts_milano_census_1];
lyr_precincts_milano_census_1.set('fieldAliases', {'SEZIONE': 'SEZIONE', 'COD_REG': 'COD_REG', 'COD_ISTAT': 'COD_ISTAT', 'PRO_COM': 'PRO_COM', 'SEZ2011': 'SEZ2011', 'SEZ': 'SEZ', 'COD_STAGNO': 'COD_STAGNO', 'COD_FIUME': 'COD_FIUME', 'COD_LAGO': 'COD_LAGO', 'COD_LAGUNA': 'COD_LAGUNA', 'COD_VAL_P': 'COD_VAL_P', 'COD_ZONA_C': 'COD_ZONA_C', 'COD_IS_AMM': 'COD_IS_AMM', 'COD_IS_LAC': 'COD_IS_LAC', 'COD_IS_MAR': 'COD_IS_MAR', 'COD_AREA_S': 'COD_AREA_S', 'COD_MONT_D': 'COD_MONT_D', 'LOC2011': 'LOC2011', 'COD_LOC': 'COD_LOC', 'TIPO_LOC': 'TIPO_LOC', 'COM_ASC': 'COM_ASC', 'COD_ASC': 'COD_ASC', 'ACE': 'ACE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'sez_cens': 'sez_cens', 'unassigned': 'unassigned', 'eu export_Field1': 'eu export_Field1', 'eu export_Field3': 'eu export_Field3', 'eu export_Field4': 'eu export_Field4', 'eu export_Field5': 'eu export_Field5', 'eu export_Field6': 'eu export_Field6', 'eu export_Field7': 'eu export_Field7', 'eu export_Field8': 'eu export_Field8', 'eu export_Field9': 'eu export_Field9', 'eu export_Field10': 'eu export_Field10', 'eu export_Field11': 'eu export_Field11', 'eu export_Field12': 'eu export_Field12', 'eu export_Field13': 'eu export_Field13', 'eu export_Field14': 'eu export_Field14', 'eu export_Field15': 'eu export_Field15', 'eu export_Field16': 'eu export_Field16', 'eu export_Field17': 'eu export_Field17', 'eu export_Field18': 'eu export_Field18', 'eu export_Field19': 'eu export_Field19', 'eu export_Field20': 'eu export_Field20', 'eu export_Field21': 'eu export_Field21', 'eu export_Field22': 'eu export_Field22', 'eu export_Field23': 'eu export_Field23', 'eu export_Field24': 'eu export_Field24', 'eu export_Field25': 'eu export_Field25', 'eu export_Field26': 'eu export_Field26', 'eu export_Field27': 'eu export_Field27', });
lyr_precincts_milano_census_1.set('fieldImages', {'SEZIONE': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_ISTAT': 'TextEdit', 'PRO_COM': 'TextEdit', 'SEZ2011': 'TextEdit', 'SEZ': 'TextEdit', 'COD_STAGNO': 'TextEdit', 'COD_FIUME': 'TextEdit', 'COD_LAGO': 'TextEdit', 'COD_LAGUNA': 'TextEdit', 'COD_VAL_P': 'TextEdit', 'COD_ZONA_C': 'TextEdit', 'COD_IS_AMM': 'TextEdit', 'COD_IS_LAC': 'TextEdit', 'COD_IS_MAR': 'TextEdit', 'COD_AREA_S': 'TextEdit', 'COD_MONT_D': 'TextEdit', 'LOC2011': 'TextEdit', 'COD_LOC': 'TextEdit', 'TIPO_LOC': 'TextEdit', 'COM_ASC': 'TextEdit', 'COD_ASC': 'TextEdit', 'ACE': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'sez_cens': 'Range', 'unassigned': 'TextEdit', 'eu export_Field1': 'TextEdit', 'eu export_Field3': 'TextEdit', 'eu export_Field4': 'TextEdit', 'eu export_Field5': 'TextEdit', 'eu export_Field6': 'TextEdit', 'eu export_Field7': 'TextEdit', 'eu export_Field8': 'TextEdit', 'eu export_Field9': 'TextEdit', 'eu export_Field10': 'TextEdit', 'eu export_Field11': 'TextEdit', 'eu export_Field12': 'TextEdit', 'eu export_Field13': 'TextEdit', 'eu export_Field14': 'TextEdit', 'eu export_Field15': 'TextEdit', 'eu export_Field16': 'TextEdit', 'eu export_Field17': 'TextEdit', 'eu export_Field18': 'TextEdit', 'eu export_Field19': 'TextEdit', 'eu export_Field20': 'TextEdit', 'eu export_Field21': 'TextEdit', 'eu export_Field22': 'TextEdit', 'eu export_Field23': 'TextEdit', 'eu export_Field24': 'TextEdit', 'eu export_Field25': 'TextEdit', 'eu export_Field26': 'TextEdit', 'eu export_Field27': 'TextEdit', });
lyr_precincts_milano_census_1.set('fieldLabels', {'SEZIONE': 'no label', 'COD_REG': 'no label', 'COD_ISTAT': 'no label', 'PRO_COM': 'no label', 'SEZ2011': 'no label', 'SEZ': 'no label', 'COD_STAGNO': 'no label', 'COD_FIUME': 'no label', 'COD_LAGO': 'no label', 'COD_LAGUNA': 'no label', 'COD_VAL_P': 'no label', 'COD_ZONA_C': 'no label', 'COD_IS_AMM': 'no label', 'COD_IS_LAC': 'no label', 'COD_IS_MAR': 'no label', 'COD_AREA_S': 'no label', 'COD_MONT_D': 'no label', 'LOC2011': 'no label', 'COD_LOC': 'no label', 'TIPO_LOC': 'no label', 'COM_ASC': 'no label', 'COD_ASC': 'no label', 'ACE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'sez_cens': 'no label', 'unassigned': 'no label', 'eu export_Field1': 'no label', 'eu export_Field3': 'inline label - visible with data', 'eu export_Field4': 'inline label - visible with data', 'eu export_Field5': 'inline label - visible with data', 'eu export_Field6': 'no label', 'eu export_Field7': 'no label', 'eu export_Field8': 'no label', 'eu export_Field9': 'no label', 'eu export_Field10': 'no label', 'eu export_Field11': 'no label', 'eu export_Field12': 'no label', 'eu export_Field13': 'no label', 'eu export_Field14': 'no label', 'eu export_Field15': 'no label', 'eu export_Field16': 'no label', 'eu export_Field17': 'no label', 'eu export_Field18': 'no label', 'eu export_Field19': 'no label', 'eu export_Field20': 'no label', 'eu export_Field21': 'no label', 'eu export_Field22': 'no label', 'eu export_Field23': 'no label', 'eu export_Field24': 'no label', 'eu export_Field25': 'no label', 'eu export_Field26': 'no label', 'eu export_Field27': 'no label', });
lyr_precincts_milano_census_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});