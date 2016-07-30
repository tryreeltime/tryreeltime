import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "black",
        "font": "12px -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontWeight": "400",
        "width": "100%",
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "flex",
        "flexDirection": "row"
    },
    "html": {
        "width": "100%",
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "flex",
        "flexDirection": "row"
    },
    "app": {
        "width": "100%",
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "flex",
        "flexDirection": "row"
    },
    "wrapper": {
        "width": "100%",
        "height": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "flex",
        "flexDirection": "row"
    },
    "video-container": {
        "flex": 1,
        "display": "flex",
        "flexDirection": "column"
    },
    "video-border": {
        "flex": "1 1 auto"
    },
    "video": {
        "flex": "1 0 auto",
        "width": "100%",
        "maxHeight": 100 * vh
    },
    "video-reveal": {
        "animation": "tv-boing 750ms linear 800ms both,             fadeIn 50ms linear 800ms both"
    },
    "chat-space": {
        "width": 300,
        "transition": "width 400ms",
        "flex": "0 0 auto"
    },
    "local-video": {
        "background": "#333",
        "position": "absolute",
        "right": 10,
        "top": 10,
        "width": 80
    },
    "remote-video": {
        "background": "#333",
        "width": 300
    },
    "chat-container": {
        "width": 260,
        "color": "#ccc",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "chat-container li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 4,
        "marginLeft": 0,
        "borderRadius": 4,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "background": "rgba(224,122,122,0.2)",
        "maxWidth": "75%",
        "clear": "both",
        "position": "relative",
        "listStyleType": "none"
    },
    "chat-container liother": {
        "float": "left"
    },
    "chat-container lime": {
        "float": "right",
        "background": "rgba(255,255,255,0.2)"
    },
    "form": {
        "background": "#000",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "position": "fixed",
        "bottom": 0,
        "width": 300
    },
    "chat-input": {
        "border": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "width": 300,
        "backgroundColor": "#777",
        "color": "#ddd"
    },
    "chat-submit": {
        "display": "none"
    },
    "link": {
        "width": "100%",
        "height": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "backgroundColor": "black",
        "position": "fixed",
        "zIndex": 1,
        "lineHeight": 30
    },
    "link-message": {
        "width": 700,
        "height": 150,
        "backgroundColor": "rgba(224,122,122,0.2)",
        "marginTop": 20 * vh,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "display": "table",
        "fontSize": 25,
        "color": "#ccc",
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "fontWeight": "200"
    },
    "link-url": {
        "fontWeight": "400"
    },
    "ig-willow": {
        "WebkitFilter": "saturate(0.02) contrast(0.85) brightness(1.2) sepia(0.02)",
        "filter": "saturate(0.02) contrast(0.85) brightness(1.2) sepia(0.02)"
    },
    "ig-earlybird": {
        "WebkitFilter": "sepia(0.4) saturate(1.6) contrast(1.1) brightness(0.9) hue-rotate(-10deg)",
        "filter": "sepia(0.4) saturate(1.6) contrast(1.1) brightness(0.9) hue-rotate(-10deg)"
    },
    "ig-mayfair": {
        "WebkitFilter": "saturate(1.4) contrast(1.1)",
        "filter": "saturate(1.4) contrast(1.1)"
    },
    "ig-amaro": {
        "WebkitFilter": "hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5)",
        "filter": "hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5)"
    },
    "ig-xpro2": {
        "WebkitFilter": "contrast(1.3) brightness(0.8) sepia(0.3) saturate(1.5) hue-rotate(-20deg)",
        "filter": "contrast(1.3) brightness(0.8) sepia(0.3) saturate(1.5) hue-rotate(-20deg)"
    },
    "ig-toaster": {
        "WebkitFilter": "sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67)",
        "Filter": "sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67)"
    },
    "ig-kelvin": {
        "filter": "sepia(0.4) saturate(2.4) brightness(1.3) contrast(1)",
        "WebkitFilter": "sepia(0.4) saturate(2.4) brightness(1.3) contrast(1)"
    },
    "ig-brannan": {
        "WebkitFilter": "sepia(0.5) contrast(1.4)",
        "filter": "sepia(0.5) contrast(1.4)"
    }
});