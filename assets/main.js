async function SubmitToken() {

    const alerter = document.getElementById("alert-doe");
    const list = document.getElementsByClassName("list-group")[0];
    const id = document.getElementById("id");
    const tag = document.getElementById("tag");
    const mfa = document.getElementById("mfa");
    const tel = document.getElementById("phone");
    const loc = document.getElementById("locale");
    const email = document.getElementById("email");
    const badges = document.getElementById("badges");
    const nitro = document.getElementById("nitro");
    const ver = document.getElementById("verified");
    const profile = document.querySelector("#profile");
    const info = document.querySelector(".info")
    const token = document.getElementsByClassName("label")[0].value;

    alerter.style.display = "none";
    list.style.display = "none";
    profile.style.display = "none";
    info.style.display = "block";

    let response;
    try {
        response = await fetch("https://discordapp.com/api/v8/users/@me", {
            method: "GET",
            headers: {
                Authorization: token
            },
        });
        response = await response.json();
    } catch (e) {
        return alert(`Request failed: ${e}`);
    }

    if (!response.username) {
        return (alerter.style.display = "block");
    }

    if (response.avatar) {
        profile.src = "https://cdn.discordapp.com/avatars/" + response.id + "/" + response.avatar + ".png?size=128";
    } else {
        profile.src = "https://cdn.discordapp.com/embed/avatars/" + (response.discriminator % 5) + ".png?size=128";
    }

    var b = "";
    if ((response.public_flags & 1) == 1) b += "𝐒𝐭𝐚𝐟𝐟,\n";
    if ((response.public_flags & 2) == 2) b += "𝐏𝐚𝐫𝐭𝐧𝐞𝐫,\n";
    if ((response.public_flags & 4) == 4) b += "𝐇𝐲𝐩𝐞𝐬𝐪𝐮𝐚𝐝 𝐄𝐯𝐞𝐧𝐭,\n"
    if ((response.public_flags & 8) == 8) b += "𝐆𝐫𝐞𝐞𝐧 𝐁𝐮𝐠𝐡𝐮𝐧𝐭𝐞𝐫,\n";
    if ((response.public_flags & 64) == 64) b += "𝐇𝐲𝐩𝐞𝐬𝐪𝐮𝐚𝐝 𝐁𝐫𝐚𝐯𝐞𝐫𝐲,\n";
    if ((response.public_flags & 128) == 128) b += "𝐇𝐲𝐩𝐞𝐒𝐪𝐮𝐚𝐝 𝐁𝐫𝐢𝐥𝐥𝐚𝐧𝐜𝐞,\n";
    if ((response.public_flags & 256) == 256) b += "𝐇𝐲𝐩𝐞𝐒𝐪𝐮𝐚𝐝 𝐁𝐚𝐥𝐚𝐧𝐜𝐞,\n";
    if ((response.public_flags & 512) == 512) b += "𝐄𝐚𝐫𝐥𝐲 𝐒𝐮𝐩𝐩𝐨𝐫𝐭𝐞𝐫,\n";
    if ((response.public_flags & 16384) == 16384) b += "𝐆𝐨𝐥𝐝 𝐁𝐮𝐠𝐇𝐮𝐧𝐭𝐞𝐫,\n";
    if ((response.public_flags & 131072) == 131072) b += "𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫,\n";
    if (b == "") b = "𝐍𝐨 𝐁𝐚𝐝𝐠𝐞𝐬\n"
    
    var n = ""
    if ((response.premium_type & 0) == 0) n = "𝐍𝐨 𝐍𝐢𝐭𝐫𝐨"
    if ((response.premium_type & 1) == 1) n = "𝐍𝐢𝐭𝐫𝐨 𝐂𝐥𝐚𝐬𝐬𝐢𝐜"
    if ((response.premium_type & 2) == 2) n = "𝐍𝐢𝐭𝐫𝐨 𝐁𝐨𝐨𝐬𝐭"
    if (n == "") n = "𝐍𝐨 𝐍𝐢𝐭𝐫𝐨"

    tag.textContent = " ➔ User: " + response.username + "#" + response.discriminator;
    mfa.textContent = response.mfa_enabled ? " ➔ Mfa: " + "Yes" : " ➔ Mfa: " + "No";
    email.textContent = response.email ? " ➔ Email: " + response.email : "No";
    ver.textContent = response.verified ? " ➔ Verification: " + "Verified" : " ➔ Verification : " + "No";
    tel.textContent = response.phone ? " ➔ Phone: " + response.phone : " ➔ Phone: " + "No";
    id.textContent = " ➔ ID: " + response.id;
    loc.textContent = " ➔ Locate: " + response.locale;
    badges.textContent = " ➔ Badges: " + b;
    nitro.textContent = " ➔ Nitro: " + n;


    profile.style.display = "flex";
    list.style.display = "block";
    info.style.display = "none";

}