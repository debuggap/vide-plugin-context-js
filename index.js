var context = {
  "Math": ["PI","abs","acos","asin","atan","ceil","cos","exp","floor","max","min","pow","random","round","sin","sqrt","tan"],
  "location": ["hash","host","hostname","href","origin","pathname","port","reload","replace","search"],
  "navigator": ["appCodeName", "appName", "appVersion", "cookieEnabled", "doNotTrack", "geolocation", "getGamepads", "getStorageUpdates", "javaEnabled", "language", "maxTouchPoints", "mimeTypes", "onLine", "platform", "plugins", "product", "productSub", "registerProtocolHandler", "userAgent", "vendor", "vendorSub", "vibrate", "webkitGetGamepads", "webkitGetUserMedia", "webkitPersistentStorage", "webkitTemporaryStorage"],
  "localStorage": ["clear","getItem","key"],
  "JSON": ["parse","stringify"],
  "Object": ["getPrototypeOf","getOwnPropertyDescriptor","getOwnPropertyNames","create","defineProperty","defineProperties","seal","freeze","preventExtensions","isSealed","isFrozen","isExtensible","keys"],
  "console": ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "memory", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "timeline", "timelineEnd", "trace", "warn"]
}
var variables  = [
  "Date", "getDate","getDay","getFullYear","getHours","getMilliseconds","getMinutes","getMonth","getSeconds","getTime","getYear",
	"String", "toString","toLowerCase","toUpperCase","charAt","concat","indexOf","lastIndexOf","match","slice","split","substr","substring","trim","valueOf",
	"Array", "isArray","indexOf","lastIndexOf","every","some","forEach","map","filter","reduce","reduceRight"
]

module.exports = {
  variables: variables,
  context: context
}
