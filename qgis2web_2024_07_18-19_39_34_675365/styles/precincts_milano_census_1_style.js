var size = 0;
var placement = 'point';

var style_precincts_milano_census_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("eu export_Field4");
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'Kefa\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("eu export_Field1") !== null) {
        labelText = String(feature.get("eu export_Field1"));
    }
    if (value >= -37.566138 && value <= -28.447445) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -28.447445 && value <= -27.483124) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -27.483124 && value <= -26.518804) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -26.518804 && value <= -25.554484) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -25.554484 && value <= -24.590164) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -24.590164 && value <= -23.625844) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -23.625844 && value <= -22.661524) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -22.661524 && value <= -21.697203) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -21.697203 && value <= -20.732883) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -20.732883 && value <= -19.768563) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -19.768563 && value <= -18.804243) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -18.804243 && value <= -17.839923) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -17.839923 && value <= -16.875603) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -16.875603 && value <= -15.911283) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -15.911283 && value <= -14.946962) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -14.946962 && value <= -13.982642) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -13.982642 && value <= -13.018322) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -13.018322 && value <= -12.054002) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -12.054002 && value <= -11.089682) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -11.089682 && value <= -10.125362) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(1,158,255,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -10.125362 && value <= -9.161041) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(2,221,221,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -9.161041 && value <= -8.196721) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(2,221,221,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -8.196721 && value <= -7.232401) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(2,221,221,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -7.232401 && value <= -6.268081) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(2,221,221,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -6.268081 && value <= -5.303761) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(171,221,164,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -5.303761 && value <= -4.339441) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(171,221,164,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -4.339441 && value <= -3.375121) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(171,221,164,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -3.375121 && value <= -2.410800) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(171,221,164,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -2.410800 && value <= -1.446480) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,255,191,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -1.446480 && value <= -0.482160) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,255,191,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= -0.482160 && value <= 0.482160) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,255,191,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.482160 && value <= 1.446480) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,255,191,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.446480 && value <= 2.410800) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,255,191,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.410800 && value <= 3.375121) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(253,226,70,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3.375121 && value <= 4.339441) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(253,226,70,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4.339441 && value <= 5.303761) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(253,226,70,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.303761 && value <= 6.268081) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(253,226,70,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6.268081 && value <= 7.232401) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(253,110,0,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 7.232401 && value <= 8.196721) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(253,110,0,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 8.196721 && value <= 9.161041) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(253,110,0,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 9.161041 && value <= 10.125362) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(253,110,0,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10.125362 && value <= 11.089682) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 11.089682 && value <= 12.054002) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12.054002 && value <= 13.018322) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 13.018322 && value <= 13.982642) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 13.982642 && value <= 14.946962) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 14.946962 && value <= 15.911283) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 15.911283 && value <= 16.875603) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 16.875603 && value <= 17.839923) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 17.839923 && value <= 18.804243) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 18.804243 && value <= 19.768563) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 19.768563 && value <= 20.732883) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 20.732883 && value <= 21.697203) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 21.697203 && value <= 22.661524) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 22.661524 && value <= 23.625844) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23.625844 && value <= 24.590164) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24.590164 && value <= 25.554484) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 25.554484 && value <= 26.518804) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 26.518804 && value <= 27.483124) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 27.483124 && value <= 28.447445) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 28.447445 && value <= 29.411765) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.588)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(255,1,5,0.588)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
