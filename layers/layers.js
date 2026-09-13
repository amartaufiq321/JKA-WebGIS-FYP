var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DEWANKULIAHJKA_1 = new ol.format.GeoJSON();
var features_DEWANKULIAHJKA_1 = format_DEWANKULIAHJKA_1.readFeatures(json_DEWANKULIAHJKA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEWANKULIAHJKA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEWANKULIAHJKA_1.addFeatures(features_DEWANKULIAHJKA_1);
var lyr_DEWANKULIAHJKA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEWANKULIAHJKA_1, 
                style: style_DEWANKULIAHJKA_1,
                popuplayertitle: 'DEWAN KULIAH JKA',
                interactive: true,
                title: '<img src="styles/legend/DEWANKULIAHJKA_1.png" /> DEWAN KULIAH JKA'
            });
var format_MAKMALUKUR_2 = new ol.format.GeoJSON();
var features_MAKMALUKUR_2 = format_MAKMALUKUR_2.readFeatures(json_MAKMALUKUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKMALUKUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKMALUKUR_2.addFeatures(features_MAKMALUKUR_2);
var lyr_MAKMALUKUR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKMALUKUR_2, 
                style: style_MAKMALUKUR_2,
                popuplayertitle: 'MAKMAL UKUR',
                interactive: true,
                title: '<img src="styles/legend/MAKMALUKUR_2.png" /> MAKMAL UKUR'
            });
var format_MAKMALGIS_3 = new ol.format.GeoJSON();
var features_MAKMALGIS_3 = format_MAKMALGIS_3.readFeatures(json_MAKMALGIS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKMALGIS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKMALGIS_3.addFeatures(features_MAKMALGIS_3);
var lyr_MAKMALGIS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKMALGIS_3, 
                style: style_MAKMALGIS_3,
                popuplayertitle: 'MAKMAL GIS',
                interactive: true,
                title: '<img src="styles/legend/MAKMALGIS_3.png" /> MAKMAL GIS'
            });
var format_PARKING_4 = new ol.format.GeoJSON();
var features_PARKING_4 = format_PARKING_4.readFeatures(json_PARKING_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARKING_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARKING_4.addFeatures(features_PARKING_4);
var lyr_PARKING_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARKING_4, 
                style: style_PARKING_4,
                popuplayertitle: 'PARKING',
                interactive: true,
                title: '<img src="styles/legend/PARKING_4.png" /> PARKING'
            });
var format_BANGUNANJKA_5 = new ol.format.GeoJSON();
var features_BANGUNANJKA_5 = format_BANGUNANJKA_5.readFeatures(json_BANGUNANJKA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNANJKA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNANJKA_5.addFeatures(features_BANGUNANJKA_5);
var lyr_BANGUNANJKA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNANJKA_5, 
                style: style_BANGUNANJKA_5,
                popuplayertitle: 'BANGUNAN JKA',
                interactive: true,
                title: '<img src="styles/legend/BANGUNANJKA_5.png" /> BANGUNAN JKA'
            });
var format_BENGKELKAYU_6 = new ol.format.GeoJSON();
var features_BENGKELKAYU_6 = format_BENGKELKAYU_6.readFeatures(json_BENGKELKAYU_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BENGKELKAYU_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BENGKELKAYU_6.addFeatures(features_BENGKELKAYU_6);
var lyr_BENGKELKAYU_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BENGKELKAYU_6, 
                style: style_BENGKELKAYU_6,
                popuplayertitle: 'BENGKEL KAYU',
                interactive: true,
                title: '<img src="styles/legend/BENGKELKAYU_6.png" /> BENGKEL KAYU'
            });
var format_MAKMALKONKRIT_7 = new ol.format.GeoJSON();
var features_MAKMALKONKRIT_7 = format_MAKMALKONKRIT_7.readFeatures(json_MAKMALKONKRIT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKMALKONKRIT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKMALKONKRIT_7.addFeatures(features_MAKMALKONKRIT_7);
var lyr_MAKMALKONKRIT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKMALKONKRIT_7, 
                style: style_MAKMALKONKRIT_7,
                popuplayertitle: 'MAKMAL KONKRIT',
                interactive: true,
                title: '<img src="styles/legend/MAKMALKONKRIT_7.png" /> MAKMAL KONKRIT'
            });
var format_BENGKELPAIP_8 = new ol.format.GeoJSON();
var features_BENGKELPAIP_8 = format_BENGKELPAIP_8.readFeatures(json_BENGKELPAIP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BENGKELPAIP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BENGKELPAIP_8.addFeatures(features_BENGKELPAIP_8);
var lyr_BENGKELPAIP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BENGKELPAIP_8, 
                style: style_BENGKELPAIP_8,
                popuplayertitle: 'BENGKEL PAIP',
                interactive: true,
                title: '<img src="styles/legend/BENGKELPAIP_8.png" /> BENGKEL PAIP'
            });
var format_MAKMALSTRUKTUR_9 = new ol.format.GeoJSON();
var features_MAKMALSTRUKTUR_9 = format_MAKMALSTRUKTUR_9.readFeatures(json_MAKMALSTRUKTUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKMALSTRUKTUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKMALSTRUKTUR_9.addFeatures(features_MAKMALSTRUKTUR_9);
var lyr_MAKMALSTRUKTUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKMALSTRUKTUR_9, 
                style: style_MAKMALSTRUKTUR_9,
                popuplayertitle: 'MAKMAL STRUKTUR',
                interactive: true,
                title: '<img src="styles/legend/MAKMALSTRUKTUR_9.png" /> MAKMAL STRUKTUR'
            });
var format_BENGKELBATA_10 = new ol.format.GeoJSON();
var features_BENGKELBATA_10 = format_BENGKELBATA_10.readFeatures(json_BENGKELBATA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BENGKELBATA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BENGKELBATA_10.addFeatures(features_BENGKELBATA_10);
var lyr_BENGKELBATA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BENGKELBATA_10, 
                style: style_BENGKELBATA_10,
                popuplayertitle: 'BENGKEL BATA',
                interactive: true,
                title: '<img src="styles/legend/BENGKELBATA_10.png" /> BENGKEL BATA'
            });
var format_MAKMALFOTO1_11 = new ol.format.GeoJSON();
var features_MAKMALFOTO1_11 = format_MAKMALFOTO1_11.readFeatures(json_MAKMALFOTO1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKMALFOTO1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKMALFOTO1_11.addFeatures(features_MAKMALFOTO1_11);
var lyr_MAKMALFOTO1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKMALFOTO1_11, 
                style: style_MAKMALFOTO1_11,
                popuplayertitle: 'MAKMAL FOTO 1',
                interactive: true,
                title: '<img src="styles/legend/MAKMALFOTO1_11.png" /> MAKMAL FOTO 1'
            });
var format_BILIKPENSYARAH_12 = new ol.format.GeoJSON();
var features_BILIKPENSYARAH_12 = format_BILIKPENSYARAH_12.readFeatures(json_BILIKPENSYARAH_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BILIKPENSYARAH_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BILIKPENSYARAH_12.addFeatures(features_BILIKPENSYARAH_12);
var lyr_BILIKPENSYARAH_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BILIKPENSYARAH_12, 
                style: style_BILIKPENSYARAH_12,
                popuplayertitle: 'BILIK PENSYARAH',
                interactive: true,
                title: '<img src="styles/legend/BILIKPENSYARAH_12.png" /> BILIK PENSYARAH'
            });
var format_MAKMALFOTO2_13 = new ol.format.GeoJSON();
var features_MAKMALFOTO2_13 = format_MAKMALFOTO2_13.readFeatures(json_MAKMALFOTO2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKMALFOTO2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKMALFOTO2_13.addFeatures(features_MAKMALFOTO2_13);
var lyr_MAKMALFOTO2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKMALFOTO2_13, 
                style: style_MAKMALFOTO2_13,
                popuplayertitle: 'MAKMAL FOTO 2',
                interactive: true,
                title: '<img src="styles/legend/MAKMALFOTO2_13.png" /> MAKMAL FOTO 2'
            });
var format_MAKMALGEOTEKNIK_14 = new ol.format.GeoJSON();
var features_MAKMALGEOTEKNIK_14 = format_MAKMALGEOTEKNIK_14.readFeatures(json_MAKMALGEOTEKNIK_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAKMALGEOTEKNIK_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAKMALGEOTEKNIK_14.addFeatures(features_MAKMALGEOTEKNIK_14);
var lyr_MAKMALGEOTEKNIK_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAKMALGEOTEKNIK_14, 
                style: style_MAKMALGEOTEKNIK_14,
                popuplayertitle: 'MAKMAL GEOTEKNIK',
                interactive: true,
                title: '<img src="styles/legend/MAKMALGEOTEKNIK_14.png" /> MAKMAL GEOTEKNIK'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DEWANKULIAHJKA_1.setVisible(true);lyr_MAKMALUKUR_2.setVisible(true);lyr_MAKMALGIS_3.setVisible(true);lyr_PARKING_4.setVisible(true);lyr_BANGUNANJKA_5.setVisible(true);lyr_BENGKELKAYU_6.setVisible(true);lyr_MAKMALKONKRIT_7.setVisible(true);lyr_BENGKELPAIP_8.setVisible(true);lyr_MAKMALSTRUKTUR_9.setVisible(true);lyr_BENGKELBATA_10.setVisible(true);lyr_MAKMALFOTO1_11.setVisible(true);lyr_BILIKPENSYARAH_12.setVisible(true);lyr_MAKMALFOTO2_13.setVisible(true);lyr_MAKMALGEOTEKNIK_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DEWANKULIAHJKA_1,lyr_MAKMALUKUR_2,lyr_MAKMALGIS_3,lyr_PARKING_4,lyr_BANGUNANJKA_5,lyr_BENGKELKAYU_6,lyr_MAKMALKONKRIT_7,lyr_BENGKELPAIP_8,lyr_MAKMALSTRUKTUR_9,lyr_BENGKELBATA_10,lyr_MAKMALFOTO1_11,lyr_BILIKPENSYARAH_12,lyr_MAKMALFOTO2_13,lyr_MAKMALGEOTEKNIK_14];
lyr_DEWANKULIAHJKA_1.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_MAKMALUKUR_2.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_MAKMALGIS_3.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_PARKING_4.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_BANGUNANJKA_5.set('fieldAliases', {'NAMA': 'NAMA', 'ARAS G': 'ARAS G', 'ARAS 1': 'ARAS 1', 'ARAS 2': 'ARAS 2', 'ARAS 3': 'ARAS 3', 'ARAS 4': 'ARAS 4', 'VIEW G': 'VIEW G', 'VIEW A1': 'VIEW A1', 'VIEW A2': 'VIEW A2', 'VIEW A3': 'VIEW A3', 'VIEW A4': 'VIEW A4', });
lyr_BENGKELKAYU_6.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_MAKMALKONKRIT_7.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_BENGKELPAIP_8.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_MAKMALSTRUKTUR_9.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_BENGKELBATA_10.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_MAKMALFOTO1_11.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_BILIKPENSYARAH_12.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_MAKMALFOTO2_13.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_MAKMALGEOTEKNIK_14.set('fieldAliases', {'NAMA': 'NAMA', 'VIEW': 'VIEW', });
lyr_DEWANKULIAHJKA_1.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': '', });
lyr_MAKMALUKUR_2.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': '', });
lyr_MAKMALGIS_3.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': '', });
lyr_PARKING_4.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': 'TextEdit', });
lyr_BANGUNANJKA_5.set('fieldImages', {'NAMA': 'TextEdit', 'ARAS G': 'TextEdit', 'ARAS 1': 'TextEdit', 'ARAS 2': 'TextEdit', 'ARAS 3': 'TextEdit', 'ARAS 4': 'TextEdit', 'VIEW G': 'TextEdit', 'VIEW A1': 'TextEdit', 'VIEW A2': 'TextEdit', 'VIEW A3': 'TextEdit', 'VIEW A4': 'TextEdit', });
lyr_BENGKELKAYU_6.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': 'TextEdit', });
lyr_MAKMALKONKRIT_7.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': 'TextEdit', });
lyr_BENGKELPAIP_8.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': 'TextEdit', });
lyr_MAKMALSTRUKTUR_9.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': 'TextEdit', });
lyr_BENGKELBATA_10.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': 'TextEdit', });
lyr_MAKMALFOTO1_11.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': '', });
lyr_BILIKPENSYARAH_12.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': 'TextEdit', });
lyr_MAKMALFOTO2_13.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': '', });
lyr_MAKMALGEOTEKNIK_14.set('fieldImages', {'NAMA': 'TextEdit', 'VIEW': 'TextEdit', });
lyr_DEWANKULIAHJKA_1.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_MAKMALUKUR_2.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'header label - visible with data', });
lyr_MAKMALGIS_3.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_PARKING_4.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_BANGUNANJKA_5.set('fieldLabels', {'NAMA': 'inline label - visible with data', 'ARAS G': 'inline label - visible with data', 'ARAS 1': 'inline label - visible with data', 'ARAS 2': 'inline label - visible with data', 'ARAS 3': 'inline label - visible with data', 'ARAS 4': 'inline label - visible with data', 'VIEW G': 'inline label - visible with data', 'VIEW A1': 'inline label - visible with data', 'VIEW A2': 'inline label - visible with data', 'VIEW A3': 'inline label - visible with data', 'VIEW A4': 'inline label - visible with data', });
lyr_BENGKELKAYU_6.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_MAKMALKONKRIT_7.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_BENGKELPAIP_8.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_MAKMALSTRUKTUR_9.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_BENGKELBATA_10.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_MAKMALFOTO1_11.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_BILIKPENSYARAH_12.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_MAKMALFOTO2_13.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_MAKMALGEOTEKNIK_14.set('fieldLabels', {'NAMA': 'hidden field', 'VIEW': 'inline label - visible with data', });
lyr_MAKMALGEOTEKNIK_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});