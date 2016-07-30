import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,

export default StyleSheet.create({
    "app>div": {
        "width": "100%"
    },
    "landing": {
        "overflowX": "hidden",
        "fontFamily": "\"Roboto Slab\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "width": "100%"
    },
    "text-muted": {
        "color": "#777777"
    },
    "text-primary": {
        "color": "rgba(224,122,122,0.4)"
    },
    "p": {
        "fontSize": 14,
        "lineHeight": 1.75
    },
    "plarge": {
        "fontSize": 16
    },
    "a": {
        "outline": "none",
        "color": "rgba(224,122,122,0.4)"
    },
    "a:hover": {
        "outline": "none",
        "color": "#fec503"
    },
    "a:focus": {
        "outline": "none",
        "color": "#fec503"
    },
    "a:active": {
        "outline": "none",
        "color": "#fec503"
    },
    "aactive": {
        "outline": "none",
        "color": "#fec503"
    },
    "h1": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h2": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h3": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h4": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h5": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "h6": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "img-centered": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "bg-light-gray": {
        "backgroundColor": "#eeeeee"
    },
    "bg-darkest-gray": {
        "backgroundColor": "#222222"
    },
    "btn-primary": {
        "color": "white",
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)",
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700"
    },
    "btn-primary:hover": {
        "color": "white",
        "backgroundColor": "#fec503",
        "borderColor": "#f6bf01"
    },
    "btn-primary:focus": {
        "color": "white",
        "backgroundColor": "#fec503",
        "borderColor": "#f6bf01"
    },
    "btn-primary:active": {
        "color": "white",
        "backgroundColor": "#fec503",
        "borderColor": "#f6bf01",
        "backgroundImage": "none"
    },
    "btn-primaryactive": {
        "color": "white",
        "backgroundColor": "#fec503",
        "borderColor": "#f6bf01",
        "backgroundImage": "none"
    },
    "open dropdown-togglebtn-primary": {
        "color": "white",
        "backgroundColor": "#fec503",
        "borderColor": "#f6bf01",
        "backgroundImage": "none"
    },
    "btn-primarydisabled": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-primary[disabled]": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "fieldset[disabled] btn-primary": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-primarydisabled:hover": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-primary[disabled]:hover": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "fieldset[disabled] btn-primary:hover": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-primarydisabled:focus": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-primary[disabled]:focus": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "fieldset[disabled] btn-primary:focus": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-primarydisabled:active": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-primary[disabled]:active": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "fieldset[disabled] btn-primary:active": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-primarydisabledactive": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-primary[disabled]active": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "fieldset[disabled] btn-primaryactive": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-primary badge": {
        "color": "rgba(224,122,122,0.4)",
        "backgroundColor": "white"
    },
    "btn-xl": {
        "color": "white",
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)",
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700",
        "borderRadius": 3,
        "fontSize": 18,
        "paddingTop": 20,
        "paddingRight": 40,
        "paddingBottom": 20,
        "paddingLeft": 40
    },
    "btn-xl:hover": {
        "color": "white",
        "backgroundColor": "#fec503",
        "borderColor": "#f6bf01"
    },
    "btn-xl:focus": {
        "color": "white",
        "backgroundColor": "#fec503",
        "borderColor": "#f6bf01"
    },
    "btn-xl:active": {
        "color": "white",
        "backgroundColor": "#fec503",
        "borderColor": "#f6bf01",
        "backgroundImage": "none"
    },
    "btn-xlactive": {
        "color": "white",
        "backgroundColor": "#fec503",
        "borderColor": "#f6bf01",
        "backgroundImage": "none"
    },
    "open dropdown-togglebtn-xl": {
        "color": "white",
        "backgroundColor": "#fec503",
        "borderColor": "#f6bf01",
        "backgroundImage": "none"
    },
    "btn-xldisabled": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-xl[disabled]": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "fieldset[disabled] btn-xl": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-xldisabled:hover": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-xl[disabled]:hover": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "fieldset[disabled] btn-xl:hover": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-xldisabled:focus": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-xl[disabled]:focus": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "fieldset[disabled] btn-xl:focus": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-xldisabled:active": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-xl[disabled]:active": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "fieldset[disabled] btn-xl:active": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-xldisabledactive": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-xl[disabled]active": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "fieldset[disabled] btn-xlactive": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)"
    },
    "btn-xl badge": {
        "color": "rgba(224,122,122,0.4)",
        "backgroundColor": "white"
    },
    "navbar-custom": {
        "backgroundColor": "#222222",
        "borderColor": "transparent"
    },
    "navbar-custom navbar-brand": {
        "color": "rgba(224,122,122,0.4)",
        "fontFamily": "\"Kaushan Script\", \"Helvetica Neue\", Helvetica, Arial, cursive"
    },
    "navbar-custom navbar-brand:hover": {
        "color": "#fec503"
    },
    "navbar-custom navbar-brand:focus": {
        "color": "#fec503"
    },
    "navbar-custom navbar-brand:active": {
        "color": "#fec503"
    },
    "navbar-custom navbar-brandactive": {
        "color": "#fec503"
    },
    "navbar-custom navbar-collapse": {
        "borderColor": "rgba(255, 255, 255, 0.02)"
    },
    "navbar-custom navbar-toggle": {
        "backgroundColor": "rgba(224,122,122,0.4)",
        "borderColor": "rgba(224,122,122,0.4)",
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "color": "white",
        "fontSize": 12
    },
    "navbar-custom navbar-toggle:hover": {
        "backgroundColor": "rgba(224,122,122,0.4)"
    },
    "navbar-custom navbar-toggle:focus": {
        "backgroundColor": "rgba(224,122,122,0.4)"
    },
    "navbar-custom nav li a": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "400",
        "letterSpacing": 1,
        "color": "white"
    },
    "navbar-custom nav li a:hover": {
        "color": "rgba(224,122,122,0.4)",
        "outline": "none"
    },
    "navbar-custom nav li a:focus": {
        "color": "rgba(224,122,122,0.4)",
        "outline": "none"
    },
    "navbar-custom navbar-nav > active > a": {
        "borderRadius": 0,
        "color": "white",
        "backgroundColor": "rgba(224,122,122,0.4)"
    },
    "navbar-custom navbar-nav > active > a:hover": {
        "color": "white",
        "backgroundColor": "#fec503"
    },
    "navbar-custom navbar-nav > active > a:focus": {
        "color": "white",
        "backgroundColor": "#fec503"
    },
    "header": {
        "backgroundImage": "hsla(180, 0%,75%,0.25)",
        "backgroundRepeat": "no-repeat",
        "backgroundAttachment": "scroll",
        "backgroundPosition": "center center",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "textAlign": "center",
        "color": "white"
    },
    "header auth": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "color": "yellow",
        "textTransform": "uppercase",
        "fontWeight": "400",
        "fontSize": 25,
        "lineHeight": 25,
        "marginBottom": 50
    },
    "header authText": {
        "color": "black"
    },
    "header intro-text": {
        "paddingTop": 100,
        "paddingBottom": 50
    },
    "header intro-text intro-lead-in": {
        "fontFamily": "\"Droid Serif\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontStyle": "italic",
        "fontSize": 22,
        "lineHeight": 22,
        "marginBottom": 25
    },
    "header intro-text intro-heading": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700",
        "fontSize": 50,
        "lineHeight": 50,
        "marginBottom": 25
    },
    "section": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0
    },
    "section h2section-heading": {
        "fontSize": 40,
        "marginTop": 0,
        "marginBottom": 15
    },
    "section h3section-subheading": {
        "fontSize": 16,
        "fontFamily": "\"Droid Serif\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "none",
        "fontStyle": "italic",
        "fontWeight": "400",
        "marginBottom": 75
    },
    "service-heading": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "textTransform": "none"
    },
    "portfolio portfolio-item": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "right": 0
    },
    "portfolio portfolio-item portfolio-link": {
        "display": "block",
        "position": "relative",
        "maxWidth": 400,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "portfolio portfolio-item portfolio-link portfolio-hover": {
        "background": "rgba(254, 209, 54, 0.9)",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "opacity": 0,
        "transition": "all ease 0.5s",
        "WebkitTransition": "all ease 0.5s",
        "MozTransition": "all ease 0.5s"
    },
    "portfolio portfolio-item portfolio-link portfolio-hover:hover": {
        "opacity": 1
    },
    "portfolio portfolio-item portfolio-link portfolio-hover portfolio-hover-content": {
        "position": "absolute",
        "width": "100%",
        "height": 20,
        "fontSize": 20,
        "textAlign": "center",
        "top": "50%",
        "marginTop": -12,
        "color": "white"
    },
    "portfolio portfolio-item portfolio-link portfolio-hover portfolio-hover-content i": {
        "marginTop": -12
    },
    "portfolio portfolio-item portfolio-link portfolio-hover portfolio-hover-content h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "portfolio portfolio-item portfolio-link portfolio-hover portfolio-hover-content h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "portfolio portfolio-item portfolio-caption": {
        "maxWidth": 400,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "backgroundColor": "white",
        "textAlign": "center",
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25
    },
    "portfolio portfolio-item portfolio-caption h4": {
        "textTransform": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "portfolio portfolio-item portfolio-caption p": {
        "fontFamily": "\"Droid Serif\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontStyle": "italic",
        "fontSize": 16,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "portfolio *": {
        "zIndex": 2
    },
    "timeline": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "relative"
    },
    "timeline:before": {
        "top": 0,
        "bottom": 0,
        "position": "absolute",
        "content": "",
        "width": 2,
        "backgroundColor": "#f1f1f1",
        "left": 40,
        "marginLeft": -1.5
    },
    "timeline > li": {
        "marginBottom": 50,
        "position": "relative",
        "minHeight": 50
    },
    "timeline > li:before": {
        "content": " ",
        "display": "table"
    },
    "timeline > li:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "timeline > li timeline-panel": {
        "width": "100%",
        "float": "right",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 100,
        "position": "relative",
        "textAlign": "left"
    },
    "timeline > li timeline-panel:before": {
        "borderLeftWidth": 0,
        "borderRightWidth": 15,
        "left": -15,
        "right": "auto"
    },
    "timeline > li timeline-panel:after": {
        "borderLeftWidth": 0,
        "borderRightWidth": 14,
        "left": -14,
        "right": "auto"
    },
    "timeline > li timeline-image": {
        "left": 0,
        "marginLeft": 0,
        "width": 80,
        "height": 80,
        "position": "absolute",
        "zIndex": 100,
        "backgroundColor": "rgba(224,122,122,0.4)",
        "color": "white",
        "borderRadius": "100%",
        "border": "7px solid #f1f1f1",
        "textAlign": "center"
    },
    "timeline > li timeline-image h4": {
        "fontSize": 10,
        "marginTop": 12,
        "lineHeight": 14
    },
    "timeline > litimeline-inverted > timeline-panel": {
        "float": "right",
        "textAlign": "left",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 100
    },
    "timeline > litimeline-inverted > timeline-panel:before": {
        "borderLeftWidth": 0,
        "borderRightWidth": 15,
        "left": -15,
        "right": "auto"
    },
    "timeline > litimeline-inverted > timeline-panel:after": {
        "borderLeftWidth": 0,
        "borderRightWidth": 14,
        "left": -14,
        "right": "auto"
    },
    "timeline > li:last-child": {
        "marginBottom": 0
    },
    "timeline timeline-heading h4": {
        "marginTop": 0,
        "color": "inherit"
    },
    "timeline timeline-heading h4subheading": {
        "textTransform": "none"
    },
    "timeline timeline-body > p": {
        "marginBottom": 0
    },
    "timeline timeline-body > ul": {
        "marginBottom": 0
    },
    "team-member": {
        "textAlign": "center",
        "marginBottom": 50
    },
    "team-member img": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "border": "7px solid white"
    },
    "team-member h4": {
        "marginTop": 25,
        "marginBottom": 0,
        "textTransform": "none"
    },
    "team-member p": {
        "marginTop": 0
    },
    "asideclients img": {
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 50,
        "marginLeft": "auto"
    },
    "sectioncontact": {
        "backgroundColor": "#222222",
        "backgroundImage": "url('../img/map-image.png')",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat"
    },
    "sectioncontact section-heading": {
        "color": "white"
    },
    "sectioncontact form-group": {
        "marginBottom": 25
    },
    "sectioncontact form-group input": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "sectioncontact form-group textarea": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "sectioncontact form-group inputform-control": {
        "height": "auto"
    },
    "sectioncontact form-group textareaform-control": {
        "height": 236
    },
    "sectioncontact form-control:focus": {
        "borderColor": "rgba(224,122,122,0.4)",
        "boxShadow": "none"
    },
    "sectioncontact ::-webkit-input-placeholder": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700",
        "color": "#eeeeee"
    },
    "sectioncontact :-moz-placeholder": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700",
        "color": "#eeeeee"
    },
    "sectioncontact ::-moz-placeholder": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700",
        "color": "#eeeeee"
    },
    "sectioncontact :-ms-input-placeholder": {
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "uppercase",
        "fontWeight": "700",
        "color": "#eeeeee"
    },
    "sectioncontact text-danger": {
        "color": "#e74c3c"
    },
    "footer": {
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "footer spancopyright": {
        "lineHeight": 40,
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "none"
    },
    "footer ulquicklinks": {
        "marginBottom": 0,
        "lineHeight": 40,
        "fontFamily": "\"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "textTransform": "none"
    },
    "ulsocial-buttons": {
        "marginBottom": 0
    },
    "ulsocial-buttons li a": {
        "display": "block",
        "backgroundColor": "#222222",
        "height": 40,
        "width": 40,
        "borderRadius": "100%",
        "fontSize": 20,
        "lineHeight": 40,
        "color": "white",
        "outline": "none",
        "WebkitTransition": "all 0.3s",
        "MozTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "ulsocial-buttons li a:hover": {
        "backgroundColor": "rgba(224,122,122,0.4)"
    },
    "ulsocial-buttons li a:focus": {
        "backgroundColor": "rgba(224,122,122,0.4)"
    },
    "ulsocial-buttons li a:active": {
        "backgroundColor": "rgba(224,122,122,0.4)"
    },
    "btn:focus": {
        "outline": "none"
    },
    "btn:active": {
        "outline": "none"
    },
    "btnactive": {
        "outline": "none"
    },
    "btn:active:focus": {
        "outline": "none"
    },
    "portfolio-modal modal-dialog": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": "100%",
        "width": "auto"
    },
    "portfolio-modal modal-content": {
        "borderRadius": 0,
        "backgroundClip": "border-box",
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "border": "none",
        "minHeight": "100%",
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0,
        "textAlign": "center"
    },
    "portfolio-modal modal-content h2": {
        "marginBottom": 15,
        "fontSize": 3
    },
    "portfolio-modal modal-content p": {
        "marginBottom": 30
    },
    "portfolio-modal modal-content pitem-intro": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "fontFamily": "\"Droid Serif\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontStyle": "italic",
        "fontSize": 16
    },
    "portfolio-modal modal-content ullist-inline": {
        "marginBottom": 30,
        "marginTop": 0
    },
    "portfolio-modal modal-content img": {
        "marginBottom": 30
    },
    "portfolio-modal close-modal": {
        "position": "absolute",
        "width": 75,
        "height": 75,
        "backgroundColor": "transparent",
        "top": 25,
        "right": 25,
        "cursor": "pointer"
    },
    "portfolio-modal close-modal:hover": {
        "opacity": 0.3
    },
    "portfolio-modal close-modal lr": {
        "height": 75,
        "width": 1,
        "marginLeft": 35,
        "backgroundColor": "#222222",
        "transform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "WebkitTransform": "rotate(45deg)",
        "zIndex": 1051
    },
    "portfolio-modal close-modal lr rl": {
        "height": 75,
        "width": 1,
        "backgroundColor": "#222222",
        "transform": "rotate(90deg)",
        "MsTransform": "rotate(90deg)",
        "WebkitTransform": "rotate(90deg)",
        "zIndex": 1052
    },
    "portfolio-modal modal-backdrop": {
        "opacity": 0,
        "display": "none"
    },
    "::-moz-selection": {
        "textShadow": "none",
        "background": "rgba(224,122,122,0.4)"
    },
    "::selection": {
        "textShadow": "none",
        "background": "rgba(224,122,122,0.4)"
    },
    "img::selection": {
        "background": "transparent"
    },
    "img::-moz-selection": {
        "background": "transparent"
    },
    "body": {
        "webkitTapHighlightColor": "rgba(224,122,122,0.4)"
    },
    "landing-drop-text": {
        "color": "white",
        "textAlign": "center",
        "verticalAlign": "middle",
        "lineHeight": 80 * vh,
        "fontSize": 5 * vh
    },
    "landing-circle": {
        "width": 80 * vh,
        "height": 80 * vh,
        "MozBorderRadius": 50,
        "WebkitBorderRadius": 50,
        "borderRadius": "59%",
        "backgroundColor": "rgba(224,122,122,0.4)",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "color": "#ccc"
    },
    "drop-box": {
        "opacity": 0,
        "position": "absolute",
        "marginTop": -80 * vh
    }
});
