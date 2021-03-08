(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,m=s["".concat(r,".").concat(d)]||s[d]||u[d]||o;return n?i.a.createElement(m,b(b({ref:t},p),{},{components:n})):i.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),o=(n(0),n(116)),r={id:"photofile.takephotooptions",title:"Interface: TakePhotoOptions",sidebar_label:"TakePhotoOptions",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/interfaces/photofile.takephotooptions",id:"api/interfaces/photofile.takephotooptions",isDocsHomePage:!1,title:"Interface: TakePhotoOptions",description:"Interface: TakePhotoOptions",source:"@site/docs/api/interfaces/photofile.takephotooptions.md",slug:"/api/interfaces/photofile.takephotooptions",permalink:"/react-native-vision-camera/docs/api/interfaces/photofile.takephotooptions",editUrl:null,version:"current",sidebar_label:"TakePhotoOptions",sidebar:"someSidebar",previous:{title:"Interface: PhotoFile",permalink:"/react-native-vision-camera/docs/api/interfaces/photofile.photofile-1"},next:{title:"Interface: Point",permalink:"/react-native-vision-camera/docs/api/interfaces/point.point-1"}},l=[{value:"Properties",id:"properties",children:[{value:"enableAutoDistortionCorrection",id:"enableautodistortioncorrection",children:[]},{value:"enableAutoRedEyeReduction",id:"enableautoredeyereduction",children:[]},{value:"enableAutoStabilization",id:"enableautostabilization",children:[]},{value:"enableVirtualDeviceFusion",id:"enablevirtualdevicefusion",children:[]},{value:"flash",id:"flash",children:[]},{value:"photoCodec",id:"photocodec",children:[]},{value:"qualityPrioritization",id:"qualityprioritization",children:[]},{value:"skipMetadata",id:"skipmetadata",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-takephotooptions"},"Interface: TakePhotoOptions"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/photofile"},"PhotoFile"),".TakePhotoOptions"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"enableautodistortioncorrection"},"enableAutoDistortionCorrection"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"enableAutoDistortionCorrection"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Specifies whether the photo output should use content aware distortion correction on this photo request (at its discretion)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f051481/src/PhotoFile.ts#L52"},"PhotoFile.ts:52")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"enableautoredeyereduction"},"enableAutoRedEyeReduction"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"enableAutoRedEyeReduction"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Specifies whether red-eye reduction should be applied automatically on flash captures."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f051481/src/PhotoFile.ts#L33"},"PhotoFile.ts:33")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"enableautostabilization"},"enableAutoStabilization"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"enableAutoStabilization"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Indicates whether still image stabilization will be employed when capturing the photo"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f051481/src/PhotoFile.ts#L46"},"PhotoFile.ts:46")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"enablevirtualdevicefusion"},"enableVirtualDeviceFusion"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"enableVirtualDeviceFusion"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Specifies whether a virtual multi-cam device should capture images from all containing physical cameras\nto create a combined, higher quality image."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/3192192-isautovirtualdevicefusionenabled"},Object(o.b)("inlineCode",{parentName:"a"},"isAutoVirtualDeviceFusionEnabled"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f051481/src/PhotoFile.ts#L40"},"PhotoFile.ts:40")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"flash"},"flash"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"flash"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"off")," ","|"," ",Object(o.b)("em",{parentName:"p"},"auto")," ","|"," ",Object(o.b)("em",{parentName:"p"},"on")),Object(o.b)("p",null,"Whether the Flash should be enabled or disabled"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"default")),' "auto"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f051481/src/PhotoFile.ts#L27"},"PhotoFile.ts:27")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"photocodec"},"photoCodec"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"photoCodec"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"hevc")," ","|"," ",Object(o.b)("em",{parentName:"p"},"hevc-alpha")," ","|"," ",Object(o.b)("em",{parentName:"p"},"jpeg")),Object(o.b)("p",null,"Specify the photo codec to use. To get a list of available photo codecs use the ",Object(o.b)("inlineCode",{parentName:"p"},"getAvailablePhotoCodecs()")," function."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"default"))," undefined"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f051481/src/PhotoFile.ts#L10"},"PhotoFile.ts:10")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"qualityprioritization"},"qualityPrioritization"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"qualityPrioritization"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"quality")," ","|"," ",Object(o.b)("em",{parentName:"p"},"balanced")," ","|"," ",Object(o.b)("em",{parentName:"p"},"speed")),Object(o.b)("p",null,"Indicates how photo quality should be prioritized against speed."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"quality"')," Indicates that speed of photo delivery is most important, even at the expense of quality"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"balanced"')," Indicates that photo quality and speed of delivery are balanced in priority"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"speed"')," Indicates that photo quality is paramount, even at the expense of shot-to-shot time")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"platform"))," iOS 13.0+"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"default")),' "balanced"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f051481/src/PhotoFile.ts#L21"},"PhotoFile.ts:21")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"skipmetadata"},"skipMetadata"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"skipMetadata"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,"When set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", metadata reading and mapping will be skipped. (",Object(o.b)("inlineCode",{parentName:"p"},"PhotoFile.metadata")," will be null)"),Object(o.b)("p",null,"This might result in a faster capture, as metadata reading and mapping requires File IO."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"platform"))," Android"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f051481/src/PhotoFile.ts#L62"},"PhotoFile.ts:62")))}c.isMDXComponent=!0}}]);