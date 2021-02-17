var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_New_Edu_Parcels_Layer_1 = new ol.format.GeoJSON();
var features_New_Edu_Parcels_Layer_1 = format_New_Edu_Parcels_Layer_1.readFeatures(json_New_Edu_Parcels_Layer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_New_Edu_Parcels_Layer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_Edu_Parcels_Layer_1.addFeatures(features_New_Edu_Parcels_Layer_1);
var lyr_New_Edu_Parcels_Layer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_New_Edu_Parcels_Layer_1, 
                style: style_New_Edu_Parcels_Layer_1,
                interactive: true,
    title: 'New_Edu_Parcels_Layer<br />\
    <img src="styles/legend/New_Edu_Parcels_Layer_1_0.png" /> Low<br />\
    <img src="styles/legend/New_Edu_Parcels_Layer_1_1.png" /> Medium<br />\
    <img src="styles/legend/New_Edu_Parcels_Layer_1_2.png" /> High<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_New_Edu_Parcels_Layer_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_New_Edu_Parcels_Layer_1];
lyr_New_Edu_Parcels_Layer_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SBL': 'SBL', 'UniqueID': 'UniqueID', 'Prop_Desc': 'Property Desc', 'Owners': 'Owners', 'Land_Use': 'Land Use', 'Full_Addre': 'Address', 'Neighborho': 'Neighborhood', 'CSO1': 'CSO1', 'CSO2': 'CSO2', 'CSO3': 'CSO3', 'RRI_Number': 'RRI', 'Parcel_Sqf': 'Parcel Sqft', 'Imperv_Sqf': 'Imperv Sqft', 'Imperv_Per': 'Imperv %', 'Canopy_Sqf': 'Canopy Sqft', 'Canopy_Per': 'Canopy %', 'Green_Acre': 'Green Acreage', });
lyr_New_Edu_Parcels_Layer_1.set('fieldImages', {'OBJECTID': 'Hidden', 'SBL': 'Hidden', 'UniqueID': 'Hidden', 'Prop_Desc': 'TextEdit', 'Owners': 'TextEdit', 'Land_Use': 'TextEdit', 'Full_Addre': 'TextEdit', 'Neighborho': 'TextEdit', 'CSO1': 'TextEdit', 'CSO2': 'TextEdit', 'CSO3': 'TextEdit', 'RRI_Number': 'TextEdit', 'Parcel_Sqf': 'TextEdit', 'Imperv_Sqf': 'TextEdit', 'Imperv_Per': 'TextEdit', 'Canopy_Sqf': 'TextEdit', 'Canopy_Per': 'TextEdit', 'Green_Acre': 'TextEdit', });
lyr_New_Edu_Parcels_Layer_1.set('fieldLabels', {'Prop_Desc': 'inline label', 'Owners': 'inline label', 'Land_Use': 'inline label', 'Full_Addre': 'inline label', 'Neighborho': 'inline label', 'CSO1': 'inline label', 'CSO2': 'inline label', 'CSO3': 'inline label', 'RRI_Number': 'inline label', 'Parcel_Sqf': 'inline label', 'Imperv_Sqf': 'inline label', 'Imperv_Per': 'inline label', 'Canopy_Sqf': 'inline label', 'Canopy_Per': 'inline label', 'Green_Acre': 'inline label', });
lyr_New_Edu_Parcels_Layer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});