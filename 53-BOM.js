// Browser Object Model



// window.location
/*
const currentURL = window.location
if(currentURL.protocol=='http:'){
console.log("This website is not Secure")
}else{
    console.log("This is secure website")  
}
console.log(currentURL.pathname)
console.log(currentURL.hash)
console.log(currentURL.hostname)
console.log(currentURL.port)
console.log(currentURL.origin)
console.log(currentURL.href)
console.log(currentURL)
*/



//window.screen
/*
const browserScreen = window.screen
console.log(browserScreen)
if(browserScreen.availWidth==1360){
    if(browserScreen.availHeight==728){
        console.log("Width: 1360 and Height: 728")
    }
}
if(browserScreen.width==1360){
    if(browserScreen.height==768){
        console.log("Width: 1360 and Height: 768")
    }
}
console.log(browserScreen.availHeight)
console.log(browserScreen.availWidth)
console.log(browserScreen.orientation)
console.log(browserScreen.pixelDepth)
console.log(browserScreen.colorDepth)
*/



// window.Date 
/*
const dateObject = window.Date()
console.log(dateObject)
console.log(dateObject.toUpperCase())
*/




// window.Document
/*
const documentObject = window.document
console.log(documentObject)

console.log(documentObject.onabort)
console.log(documentObject.body)
documentObject.addEventListener('click', ()=>{
    alert("Document Clicked")
})
*/




// window.Cache
/*
console.log(window.caches)
const cacheObject = window.Cache
console.log(cacheObject)
console.log(cacheObject.arguments)
console.log(cacheObject.caller)
*/



// window.navigator
/*
const navigatorObj = window.navigator
console.log(navigatorObj)

console.log(navigatorObj.languages)
console.log(navigatorObj.geolocation)
console.log(navigatorObj.connection)
console.log(navigatorObj.permissions)
console.log(navigatorObj.clipboard)
console.log(navigatorObj.pdfViewerEnabled)
console.log(navigatorObj.storage)
console.log(navigatorObj.userAgent)
console.log(navigatorObj.doNotTrack)
console.log(navigatorObj.onLine)
console.log(navigatorObj.mediaDevices)
*/



// window.ClipboardEvent
/*
const clipboardObj = window.ClipboardEvent
console.log(clipboardObj)
document.addEventListener('copy', ()=>{
    alert("Copy")
})
document.addEventListener('paste', ()=>{
    alert("Paste")
})
*/


// window.opener
const openerObj = window.opener
console.log(openerObj)

const openWindow = window.open('www.kailashkumar.com', 'newWindow', 'width=600', 'height=400')
