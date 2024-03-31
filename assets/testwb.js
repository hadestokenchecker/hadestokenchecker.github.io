async function wbtest() {

const request10 = new XMLHttpRequest();
    const webh = document.getElementsByClassName("label1")[0].value;
    request10.open("POST", webh);
    request10.setRequestHeader('Content-type', 'application/json');

        var params10 = {
            username: "★ Webhook Test",
            content: "**@everyone - Webhook working! - https://hadestokenchecker.github.io/**",
        }
        
    request10.send(JSON.stringify(params10))

}