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
    <img src="styles/legend/precincts_milano_census_1_0.png" /> -37,57 - -28,45<br />\
    <img src="styles/legend/precincts_milano_census_1_1.png" /> -28,45 - -27,48<br />\
    <img src="styles/legend/precincts_milano_census_1_2.png" /> -27,48 - -26,52<br />\
    <img src="styles/legend/precincts_milano_census_1_3.png" /> -26,52 - -25,55<br />\
    <img src="styles/legend/precincts_milano_census_1_4.png" /> -25,55 - -24,59<br />\
    <img src="styles/legend/precincts_milano_census_1_5.png" /> -24,59 - -23,63<br />\
    <img src="styles/legend/precincts_milano_census_1_6.png" /> -23,63 - -22,66<br />\
    <img src="styles/legend/precincts_milano_census_1_7.png" /> -22,66 - -21,7<br />\
    <img src="styles/legend/precincts_milano_census_1_8.png" /> -21,7 - -20,73<br />\
    <img src="styles/legend/precincts_milano_census_1_9.png" /> -20,73 - -19,77<br />\
    <img src="styles/legend/precincts_milano_census_1_10.png" /> -19,77 - -18,8<br />\
    <img src="styles/legend/precincts_milano_census_1_11.png" /> -18,8 - -17,84<br />\
    <img src="styles/legend/precincts_milano_census_1_12.png" /> -17,84 - -16,88<br />\
    <img src="styles/legend/precincts_milano_census_1_13.png" /> -16,88 - -15,91<br />\
    <img src="styles/legend/precincts_milano_census_1_14.png" /> -15,91 - -14,95<br />\
    <img src="styles/legend/precincts_milano_census_1_15.png" /> -14,95 - -13,98<br />\
    <img src="styles/legend/precincts_milano_census_1_16.png" /> -13,98 - -13,02<br />\
    <img src="styles/legend/precincts_milano_census_1_17.png" /> -13,02 - -12,05<br />\
    <img src="styles/legend/precincts_milano_census_1_18.png" /> -12,05 - -11,09<br />\
    <img src="styles/legend/precincts_milano_census_1_19.png" /> -11,09 - -10,13<br />\
    <img src="styles/legend/precincts_milano_census_1_20.png" /> -10,13 - -9,16<br />\
    <img src="styles/legend/precincts_milano_census_1_21.png" /> -9,16 - -8,2<br />\
    <img src="styles/legend/precincts_milano_census_1_22.png" /> -8,2 - -7,23<br />\
    <img src="styles/legend/precincts_milano_census_1_23.png" /> -7,23 - -6,27<br />\
    <img src="styles/legend/precincts_milano_census_1_24.png" /> -6,27 - -5,3<br />\
    <img src="styles/legend/precincts_milano_census_1_25.png" /> -5,3 - -4,34<br />\
    <img src="styles/legend/precincts_milano_census_1_26.png" /> -4,34 - -3,38<br />\
    <img src="styles/legend/precincts_milano_census_1_27.png" /> -3,38 - -2,41<br />\
    <img src="styles/legend/precincts_milano_census_1_28.png" /> -2,41 - -1,45<br />\
    <img src="styles/legend/precincts_milano_census_1_29.png" /> -1,45 - -0,48<br />\
    <img src="styles/legend/precincts_milano_census_1_30.png" /> -0,48 - 0,48<br />\
    <img src="styles/legend/precincts_milano_census_1_31.png" /> 0,48 - 1,45<br />\
    <img src="styles/legend/precincts_milano_census_1_32.png" /> 1,45 - 2,41<br />\
    <img src="styles/legend/precincts_milano_census_1_33.png" /> 2,41 - 3,38<br />\
    <img src="styles/legend/precincts_milano_census_1_34.png" /> 3,38 - 4,34<br />\
    <img src="styles/legend/precincts_milano_census_1_35.png" /> 4,34 - 5,3<br />\
    <img src="styles/legend/precincts_milano_census_1_36.png" /> 5,3 - 6,27<br />\
    <img src="styles/legend/precincts_milano_census_1_37.png" /> 6,27 - 7,23<br />\
    <img src="styles/legend/precincts_milano_census_1_38.png" /> 7,23 - 8,2<br />\
    <img src="styles/legend/precincts_milano_census_1_39.png" /> 8,2 - 9,16<br />\
    <img src="styles/legend/precincts_milano_census_1_40.png" /> 9,16 - 10,13<br />\
    <img src="styles/legend/precincts_milano_census_1_41.png" /> 10,13 - 11,09<br />\
    <img src="styles/legend/precincts_milano_census_1_42.png" /> 11,09 - 12,05<br />\
    <img src="styles/legend/precincts_milano_census_1_43.png" /> 12,05 - 13,02<br />\
    <img src="styles/legend/precincts_milano_census_1_44.png" /> 13,02 - 13,98<br />\
    <img src="styles/legend/precincts_milano_census_1_45.png" /> 13,98 - 14,95<br />\
    <img src="styles/legend/precincts_milano_census_1_46.png" /> 14,95 - 15,91<br />\
    <img src="styles/legend/precincts_milano_census_1_47.png" /> 15,91 - 16,88<br />\
    <img src="styles/legend/precincts_milano_census_1_48.png" /> 16,88 - 17,84<br />\
    <img src="styles/legend/precincts_milano_census_1_49.png" /> 17,84 - 18,8<br />\
    <img src="styles/legend/precincts_milano_census_1_50.png" /> 18,8 - 19,77<br />\
    <img src="styles/legend/precincts_milano_census_1_51.png" /> 19,77 - 20,73<br />\
    <img src="styles/legend/precincts_milano_census_1_52.png" /> 20,73 - 21,7<br />\
    <img src="styles/legend/precincts_milano_census_1_53.png" /> 21,7 - 22,66<br />\
    <img src="styles/legend/precincts_milano_census_1_54.png" /> 22,66 - 23,63<br />\
    <img src="styles/legend/precincts_milano_census_1_55.png" /> 23,63 - 24,59<br />\
    <img src="styles/legend/precincts_milano_census_1_56.png" /> 24,59 - 25,55<br />\
    <img src="styles/legend/precincts_milano_census_1_57.png" /> 25,55 - 26,52<br />\
    <img src="styles/legend/precincts_milano_census_1_58.png" /> 26,52 - 27,48<br />\
    <img src="styles/legend/precincts_milano_census_1_59.png" /> 27,48 - 28,45<br />\
    <img src="styles/legend/precincts_milano_census_1_60.png" /> 28,45 - 29,41<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_precincts_milano_census_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_precincts_milano_census_1];
lyr_precincts_milano_census_1.set('fieldAliases', {'SEZIONE': 'SEZIONE', 'COD_REG': 'COD_REG', 'COD_ISTAT': 'COD_ISTAT', 'PRO_COM': 'PRO_COM', 'SEZ2011': 'SEZ2011', 'SEZ': 'SEZ', 'COD_STAGNO': 'COD_STAGNO', 'COD_FIUME': 'COD_FIUME', 'COD_LAGO': 'COD_LAGO', 'COD_LAGUNA': 'COD_LAGUNA', 'COD_VAL_P': 'COD_VAL_P', 'COD_ZONA_C': 'COD_ZONA_C', 'COD_IS_AMM': 'COD_IS_AMM', 'COD_IS_LAC': 'COD_IS_LAC', 'COD_IS_MAR': 'COD_IS_MAR', 'COD_AREA_S': 'COD_AREA_S', 'COD_MONT_D': 'COD_MONT_D', 'LOC2011': 'LOC2011', 'COD_LOC': 'COD_LOC', 'TIPO_LOC': 'TIPO_LOC', 'COM_ASC': 'COM_ASC', 'COD_ASC': 'COD_ASC', 'ACE': 'ACE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'sez_cens': 'sez_cens', 'unassigned': 'unassigned', 'eu export_Field1': 'eu export_Field1', 'eu export_Field3': 'eu export_Field3', 'eu export_Field4': 'eu export_Field4', 'eu export_Field5': 'eu export_Field5', 'eu export_Field6': 'eu export_Field6', 'eu export_Field7': 'eu export_Field7', 'eu export_Field8': 'eu export_Field8', 'eu export_Field9': 'eu export_Field9', 'eu export_Field10': 'eu export_Field10', 'eu export_Field11': 'eu export_Field11', 'eu export_Field12': 'eu export_Field12', 'eu export_Field13': 'eu export_Field13', 'eu export_Field14': 'eu export_Field14', 'eu export_Field15': 'eu export_Field15', 'eu export_Field16': 'eu export_Field16', 'eu export_Field17': 'eu export_Field17', 'eu export_Field18': 'eu export_Field18', 'eu export_Field19': 'eu export_Field19', 'eu export_Field20': 'eu export_Field20', 'eu export_Field21': 'eu export_Field21', 'eu export_Field22': 'eu export_Field22', 'eu export_Field23': 'eu export_Field23', 'eu export_Field24': 'eu export_Field24', 'eu export_Field25': 'eu export_Field25', 'eu export_Field26': 'eu export_Field26', 'eu export_Field27': 'eu export_Field27', });
lyr_precincts_milano_census_1.set('fieldImages', {'SEZIONE': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_ISTAT': 'TextEdit', 'PRO_COM': 'TextEdit', 'SEZ2011': 'TextEdit', 'SEZ': 'TextEdit', 'COD_STAGNO': 'TextEdit', 'COD_FIUME': 'TextEdit', 'COD_LAGO': 'TextEdit', 'COD_LAGUNA': 'TextEdit', 'COD_VAL_P': 'TextEdit', 'COD_ZONA_C': 'TextEdit', 'COD_IS_AMM': 'TextEdit', 'COD_IS_LAC': 'TextEdit', 'COD_IS_MAR': 'TextEdit', 'COD_AREA_S': 'TextEdit', 'COD_MONT_D': 'TextEdit', 'LOC2011': 'TextEdit', 'COD_LOC': 'TextEdit', 'TIPO_LOC': 'TextEdit', 'COM_ASC': 'TextEdit', 'COD_ASC': 'TextEdit', 'ACE': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'sez_cens': 'Range', 'unassigned': 'TextEdit', 'eu export_Field1': 'TextEdit', 'eu export_Field3': 'TextEdit', 'eu export_Field4': 'TextEdit', 'eu export_Field5': 'TextEdit', 'eu export_Field6': 'TextEdit', 'eu export_Field7': 'TextEdit', 'eu export_Field8': 'TextEdit', 'eu export_Field9': 'TextEdit', 'eu export_Field10': 'TextEdit', 'eu export_Field11': 'TextEdit', 'eu export_Field12': 'TextEdit', 'eu export_Field13': 'TextEdit', 'eu export_Field14': 'TextEdit', 'eu export_Field15': 'TextEdit', 'eu export_Field16': 'TextEdit', 'eu export_Field17': 'TextEdit', 'eu export_Field18': 'TextEdit', 'eu export_Field19': 'TextEdit', 'eu export_Field20': 'TextEdit', 'eu export_Field21': 'TextEdit', 'eu export_Field22': 'TextEdit', 'eu export_Field23': 'TextEdit', 'eu export_Field24': 'TextEdit', 'eu export_Field25': 'TextEdit', 'eu export_Field26': 'TextEdit', 'eu export_Field27': 'TextEdit', });
lyr_precincts_milano_census_1.set('fieldLabels', {'SEZIONE': 'header label - visible with data', 'COD_REG': 'hidden field', 'COD_ISTAT': 'hidden field', 'PRO_COM': 'hidden field', 'SEZ2011': 'hidden field', 'SEZ': 'hidden field', 'COD_STAGNO': 'hidden field', 'COD_FIUME': 'hidden field', 'COD_LAGO': 'hidden field', 'COD_LAGUNA': 'hidden field', 'COD_VAL_P': 'hidden field', 'COD_ZONA_C': 'hidden field', 'COD_IS_AMM': 'hidden field', 'COD_IS_LAC': 'hidden field', 'COD_IS_MAR': 'hidden field', 'COD_AREA_S': 'hidden field', 'COD_MONT_D': 'hidden field', 'LOC2011': 'hidden field', 'COD_LOC': 'hidden field', 'TIPO_LOC': 'hidden field', 'COM_ASC': 'hidden field', 'COD_ASC': 'hidden field', 'ACE': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'sez_cens': 'hidden field', 'unassigned': 'hidden field', 'eu export_Field1': 'hidden field', 'eu export_Field3': 'inline label - visible with data', 'eu export_Field4': 'inline label - visible with data', 'eu export_Field5': 'inline label - visible with data', 'eu export_Field6': 'hidden field', 'eu export_Field7': 'hidden field', 'eu export_Field8': 'hidden field', 'eu export_Field9': 'hidden field', 'eu export_Field10': 'hidden field', 'eu export_Field11': 'hidden field', 'eu export_Field12': 'hidden field', 'eu export_Field13': 'hidden field', 'eu export_Field14': 'hidden field', 'eu export_Field15': 'hidden field', 'eu export_Field16': 'hidden field', 'eu export_Field17': 'hidden field', 'eu export_Field18': 'hidden field', 'eu export_Field19': 'hidden field', 'eu export_Field20': 'hidden field', 'eu export_Field21': 'hidden field', 'eu export_Field22': 'hidden field', 'eu export_Field23': 'hidden field', 'eu export_Field24': 'hidden field', 'eu export_Field25': 'hidden field', 'eu export_Field26': 'hidden field', 'eu export_Field27': 'hidden field', });
lyr_precincts_milano_census_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});