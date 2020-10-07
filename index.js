function showNotification () {
    const notification = new Notification("new message incomming", {
        body: "Hi there. How are you doing?"
    })

    notification.onclick = (e) => {
        window.location.href = "https://jsonbeautifier.org/";
     };
}

console.log(Notification.permission);

if(Notification.permission == "granted") {
    showNotification();
} else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
        if(permission === 'granted') {
            showNotification();
        }
    })  
}
