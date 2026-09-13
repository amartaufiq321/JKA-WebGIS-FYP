function goHome() {
    window.location.href = "home.html";
}

function searchRoom() {

    const search = document
        .getElementById("search")
        .value
        .trim()
        .toLowerCase();

    if (search === "") {
        alert("Sila masukkan nama bangunan atau bilik.");
        return;
    }

    const rooms = {
        "bilik kuliah 2": "G",
        "bilik kuliah 3": "G",
        "bilik kuliah 4": "1",
        "bilik kuliah 5": "1",
        "bilik kuliah 6": "1",
        "bilik kuliah 7": "2",
        "bilik kuliah 8": "2",
        "bilik kuliah 9": "2",
        "bilik kuliah 10": "3",
        "bilik kuliah 11": "3",
        "bilik kuliah 12": "3",
        "bilik kuliah 13": "4",
        "bilik kuliah 14": "4",
        "bilik kuliah 15": "4"
    };

    if (search === "parking") {

        selectedFloor = null;
        selectedName = "PARKING";
        selectedLink =
            "https://kuula.co/share/LbPCT/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

        document.getElementById("selectedName").textContent = "PARKING";
        document.getElementById("selectedFloor").textContent = "";

        zoomToLocation();
        return;
    }
    
    else if (search === "makmal geoteknik") {

    selectedFloor = null;
    selectedName = "MAKMAL GEOTEKNIK";

    selectedLink =
        "https://kuula.co/share/LbYqx/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "MAKMAL GEOTEKNIK";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "bengkel kayu") {

    selectedFloor = null;
    selectedName = "BENGKEL KAYU";

    selectedLink =
        "https://kuula.co/share/LbPCd/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "BENGKEL KAYU";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "bengkel bata") {

    selectedFloor = null;
    selectedName = "BENGKEL BATA";

    selectedLink =
        "https://kuula.co/share/LbYf8/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "BENGKEL BATA";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "makmal konkrit") {

    selectedFloor = null;
    selectedName = "MAKMAL KONKRIT";

    selectedLink =
        "https://kuula.co/share/LbYqQ/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "MAKMAL KONKRIT";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "bengkel paip") {

    selectedFloor = null;
    selectedName = "BENGKEL PAIP";

    selectedLink =
        "https://kuula.co/share/LbYH0/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "BENGKEL PAIP";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "makmal struktur") {

    selectedFloor = null;
    selectedName = "MAKMAL STRUKTUR";

    selectedLink =
        "https://kuula.co/share/LbP6h/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "MAKMAL STRUKTUR";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "makmal foto 2") {

    selectedFloor = null;
    selectedName = "MAKMAL FOTO 2";

    selectedLink =
        "https://kuula.co/share/LKc43/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "MAKMAL FOTO 2";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "makmal foto 1") {

    selectedFloor = null;
    selectedName = "MAKMAL FOTO 1";

    selectedLink =
        "https://kuula.co/share/LKc42/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "MAKMAL FOTO 1";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "makmal gis") {

    selectedFloor = null;
    selectedName = "MAKMAL GIS";

    selectedLink =
        "https://kuula.co/share/LbL4h/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "MAKMAL GIS";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "bilik pensyarah") {

    selectedFloor = null;
    selectedName = "BILIK PENSYARAH";

    selectedLink =
        "https://kuula.co/share/LbP67/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "BILIK PENSYARAH";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "makmal ukur") {

    selectedFloor = null;
    selectedName = "MAKMAL UKUR";

    selectedLink =
        "https://kuula.co/share/Lbhtr/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "MAKMAL UKUR";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

else if (search === "dewan kuliah jka") {

    selectedFloor = null;
    selectedName = "DEWAN KULIAH JKA";

    selectedLink =
        "https://kuula.co/share/LbLNW/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent =
        "DEWAN KULIAH JKA";

    document.getElementById("selectedFloor").textContent =
        "";

    zoomToLocation();

    return;
}

// =========================
// BANGUNAN JKA - ARAS G
// =========================

else if (search === "dataran jka") {

    selectedFloor = "G";
    selectedName = "DATARAN JKA";
    selectedLink =
        "https://kuula.co/share/LbY8B/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "DATARAN JKA";
    document.getElementById("selectedFloor").textContent = "Aras G";

    zoomToLocation();
    return;
}

else if (search === "bilik pensyarah aras g") {

    selectedFloor = "G";
    selectedName = "BILIK PENSYARAH ARAS G";
    selectedLink =
        "https://kuula.co/share/LbY8Q/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK PENSYARAH ARAS G";
    document.getElementById("selectedFloor").textContent = "Aras G";

    zoomToLocation();
    return;
}

else if (search === "studio senibina 1") {

    selectedFloor = "G";
    selectedName = "STUDIO SENIBINA 1";
    selectedLink =
        "https://kuula.co/share/LDc6W/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "STUDIO SENIBINA 1";
    document.getElementById("selectedFloor").textContent = "Aras G";

    zoomToLocation();
    return;
}

else if (search === "surau") {

    selectedFloor = "G";
    selectedName = "SURAU";
    selectedLink =
        "https://kuula.co/share/LbTcJ/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "SURAU";
    document.getElementById("selectedFloor").textContent = "Aras G";

    zoomToLocation();
    return;
}

else if (search === "tandas aras g") {

    selectedFloor = "G";
    selectedName = "TANDAS ARAS G";
    selectedLink =
        "https://kuula.co/share/LDGZ6/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "TANDAS ARAS G";
    document.getElementById("selectedFloor").textContent = "Aras G";

    zoomToLocation("tandas");
    return;
}

else if (search === "bilik cescomb") {

    selectedFloor = "G";
    selectedName = "BILIK CESCOMB";
    selectedLink =
        "https://kuula.co/share/LDc6g/collection/7TZ59?logo=-1&info=0&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK CESCOMB";
    document.getElementById("selectedFloor").textContent = "Aras G";

    zoomToLocation();
    return;
}

else if (search === "tecc") {

    selectedFloor = "G";
    selectedName = "TECC";
    selectedLink =
        "https://kuula.co/share/LbTcb/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "TECC";
    document.getElementById("selectedFloor").textContent = "Aras G";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 2") {

    selectedFloor = "G";
    selectedName = "BILIK KULIAH 2";
    selectedLink =
        "https://kuula.co/share/LbTXr/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 2";
    document.getElementById("selectedFloor").textContent = "Aras G";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 3") {

    selectedFloor = "G";
    selectedName = "BILIK KULIAH 3";
    selectedLink =
        "https://kuula.co/share/LbzRG/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 3";
    document.getElementById("selectedFloor").textContent = "Aras G";

    zoomToLocation();
    return;
}

// =========================
// BANGUNAN JKA - ARAS 1
// =========================

else if (search === "makmal autocad 1") {

    selectedFloor = "1";
    selectedName = "MAKMAL AUTOCAD 1";
    selectedLink =
        "https://kuula.co/share/L1w3T/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "MAKMAL AUTOCAD 1";
    document.getElementById("selectedFloor").textContent = "Aras 1";

    zoomToLocation();
    return;
}

else if (search === "bilik pensyarah aras 1") {

    selectedFloor = "1";
    selectedName = "BILIK PENSYARAH ARAS 1";
    selectedLink =
        "https://kuula.co/share/L1w2B/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK PENSYARAH ARAS 1";
    document.getElementById("selectedFloor").textContent = "Aras 1";

    zoomToLocation();
    return;
}

else if (search === "bilik ts. dr. amran bin atan") {

    selectedFloor = "1";
    selectedName = "BILIK TS. DR. AMRAN BIN ATAN";
    selectedLink =
        "https://kuula.co/share/L1gzw/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK TS. DR. AMRAN BIN ATAN";
    document.getElementById("selectedFloor").textContent = "Aras 1";

    zoomToLocation();
    return;
}

else if (search === "tandas aras 1") {

    selectedFloor = "1";
    selectedName = "TANDAS ARAS 1";
    selectedLink =
        "https://kuula.co/share/L1w3c/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "TANDAS ARAS 1";
    document.getElementById("selectedFloor").textContent = "Aras 1";

    zoomToLocation("tandas");
    return;
}

else if (search === "studio senibina 2") {

    selectedFloor = "1";
    selectedName = "STUDIO SENIBINA 2";
    selectedLink =
        "https://kuula.co/share/L1zSD/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "STUDIO SENIBINA 2";
    document.getElementById("selectedFloor").textContent = "Aras 1";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 4") {

    selectedFloor = "1";
    selectedName = "BILIK KULIAH 4";
    selectedLink =
        "https://kuula.co/share/L1wqH/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 4";
    document.getElementById("selectedFloor").textContent = "Aras 1";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 5") {

    selectedFloor = "1";
    selectedName = "BILIK KULIAH 5";
    selectedLink =
        "https://kuula.co/share/L1wqT/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 5";
    document.getElementById("selectedFloor").textContent = "Aras 1";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 6") {

    selectedFloor = "1";
    selectedName = "BILIK KULIAH 6";
    selectedLink =
        "https://kuula.co/share/L1wqd/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 6";
    document.getElementById("selectedFloor").textContent = "Aras 1";

    zoomToLocation();
    return;
}

// =========================
// BANGUNAN JKA - ARAS 2
// =========================

else if (search === "bilik kuliah 9") {

    selectedFloor = "2";
    selectedName = "BILIK KULIAH 9";
    selectedLink =
        "https://kuula.co/share/L1zSF/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 9";
    document.getElementById("selectedFloor").textContent = "Aras 2";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 8") {

    selectedFloor = "2";
    selectedName = "BILIK KULIAH 8";
    selectedLink =
        "https://kuula.co/share/L1zQS/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 8";
    document.getElementById("selectedFloor").textContent = "Aras 2";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 7") {

    selectedFloor = "2";
    selectedName = "BILIK KULIAH 7";
    selectedLink =
        "https://kuula.co/share/L1zSq/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 7";
    document.getElementById("selectedFloor").textContent = "Aras 2";

    zoomToLocation();
    return;
}

else if (search === "studio senibina 3") {

    selectedFloor = "2";
    selectedName = "STUDIO SENIBINA 3";
    selectedLink =
        "https://kuula.co/share/L1zSK/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "STUDIO SENIBINA 3";
    document.getElementById("selectedFloor").textContent = "Aras 2";

    zoomToLocation();
    return;
}

else if (search === "tandas aras 2") {

    selectedFloor = "2";
    selectedName = "TANDAS ARAS 2";
    selectedLink =
        "https://kuula.co/share/LDGZD/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "TANDAS ARAS 2";
    document.getElementById("selectedFloor").textContent = "Aras 2";

    zoomToLocation("tandas");
    return;
}

else if (search === "bilik pensyarah aras 2") {

    selectedFloor = "2";
    selectedName = "BILIK PENSYARAH ARAS 2";
    selectedLink =
        "https://kuula.co/share/LDGZF/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK PENSYARAH ARAS 2";
    document.getElementById("selectedFloor").textContent = "Aras 2";

    zoomToLocation();
    return;
}

else if (search === "ava 2") {

    selectedFloor = "2";
    selectedName = "AVA 2";
    selectedLink =
        "https://kuula.co/share/LDGZN/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "AVA 2";
    document.getElementById("selectedFloor").textContent = "Aras 2";

    zoomToLocation();
    return;
}

// =========================
// BANGUNAN JKA - ARAS 3
// =========================

else if (search === "tandas aras 3") {

    selectedFloor = "3";
    selectedName = "TANDAS ARAS 3";
    selectedLink =
        "https://kuula.co/share/LDGZm/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "TANDAS ARAS 3";
    document.getElementById("selectedFloor").textContent = "Aras 3";

    zoomToLocation("tandas");
    return;
}

else if (search === "studio senibina 4") {

    selectedFloor = "3";
    selectedName = "STUDIO SENIBINA 4";
    selectedLink =
        "https://kuula.co/share/L1QHh/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "STUDIO SENIBINA 4";
    document.getElementById("selectedFloor").textContent = "Aras 3";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 10") {

    selectedFloor = "3";
    selectedName = "BILIK KULIAH 10";
    selectedLink =
        "https://kuula.co/share/L1QZC/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 10";
    document.getElementById("selectedFloor").textContent = "Aras 3";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 11") {

    selectedFloor = "3";
    selectedName = "BILIK KULIAH 11";
    selectedLink =
        "https://kuula.co/share/L1QZV/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 11";
    document.getElementById("selectedFloor").textContent = "Aras 3";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 12") {

    selectedFloor = "3";
    selectedName = "BILIK KULIAH 12";
    selectedLink =
        "https://kuula.co/share/LDGZJ/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 12";
    document.getElementById("selectedFloor").textContent = "Aras 3";

    zoomToLocation();
    return;
}

// =========================
// BANGUNAN JKA - ARAS 4
// =========================

else if (search === "bilik kuliah 15") {

    selectedFloor = "4";
    selectedName = "BILIK KULIAH 15";
    selectedLink =
        "https://kuula.co/share/L1QgX/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 15";
    document.getElementById("selectedFloor").textContent = "Aras 4";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 14") {

    selectedFloor = "4";
    selectedName = "BILIK KULIAH 14";
    selectedLink =
        "https://kuula.co/share/L1QgF/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 14";
    document.getElementById("selectedFloor").textContent = "Aras 4";

    zoomToLocation();
    return;
}

else if (search === "bilik kuliah 13") {

    selectedFloor = "4";
    selectedName = "BILIK KULIAH 13";
    selectedLink =
        "https://kuula.co/share/L1Qgq/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "BILIK KULIAH 13";
    document.getElementById("selectedFloor").textContent = "Aras 4";

    zoomToLocation();
    return;
}

else if (search === "studio senibina 5") {

    selectedFloor = "4";
    selectedName = "STUDIO SENIBINA 5";
    selectedLink =
        "https://kuula.co/share/LDGZc/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "STUDIO SENIBINA 5";
    document.getElementById("selectedFloor").textContent = "Aras 4";

    zoomToLocation();
    return;
}

else if (search === "tandas aras 4") {

    selectedFloor = "4";
    selectedName = "TANDAS ARAS 4";
    selectedLink =
        "https://kuula.co/share/LDGZm/collection/7TZ59?logo=-1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1&margin=15";

    document.getElementById("selectedName").textContent = "TANDAS ARAS 4";
    document.getElementById("selectedFloor").textContent = "Aras 4";

    zoomToLocation("tandas");
    return;
}

    if (rooms[search]) {

        selectedFloor = rooms[search];
        selectedName = search;

        document.getElementById("selectedName").textContent =
            search.toUpperCase();

        document.getElementById("selectedFloor").textContent =
            "Aras " + selectedFloor;

        zoomToLocation();
        return;
    }

    alert("Bangunan atau bilik tidak dijumpai.");
    selectedFloor = null;
    selectedName = null;
    selectedLink = null;
}


let selectedFloor = null;
let selectedName = null;
let selectedLink = null;

const navigationLocations = {
    "PARKING": {
        lat: 2.169485,
        lng: 102.429183
    },

    "BANGUNAN JKA": {
        lat: 2.169032,
        lng: 102.428595
    },

    "DEWAN KULIAH JKA": {
    lat: 2.169290,
    lng: 102.428660
},

"BENGKEL KAYU": {
    lat: 2.169726,
    lng: 102.429336
},

"BENGKEL BATA": {
    lat: 2.169758,
    lng: 102.429008
},

"MAKMAL KONKRIT": {
    lat: 2.169793,
    lng: 102.428837
},

"BENGKEL PAIP": {
    lat: 2.169841,
    lng: 102.428557
},

"MAKMAL STRUKTUR": {
    lat: 2.169867,
    lng: 102.428477
},

"MAKMAL GEOTEKNIK": {
    lat: 2.169769,
    lng: 102.428253
},

"MAKMAL UKUR": {
    lat: 2.169608,
    lng: 102.428750
},

"BILIK PENSYARAH": {
    lat: 2.169608,
    lng: 102.428750
},

"MAKMAL GIS": {
    lat: 2.169648,
    lng: 102.428614
},

"MAKMAL UKUR": {
    lat: 2.169608,
    lng: 102.428750
},

"MAKMAL FOTO 2": {
    lat: 2.169685,
    lng: 102.428506
},

"MAKMAL FOTO 1": {
    lat: 2.169616,
    lng: 102.428449
},
};

const jkaLocations = [
    "Bilik Kuliah 2",
    "Bilik Kuliah 3",
    "Bilik Kuliah 4",
    "Bilik Kuliah 5",
    "Bilik Kuliah 6",
    "Bilik Kuliah 7",
    "Bilik Kuliah 8",
    "Bilik Kuliah 9",
    "Bilik Kuliah 10",
    "Bilik Kuliah 11",
    "Bilik Kuliah 12",
    "Bilik Kuliah 13",
    "Bilik Kuliah 14",
    "Bilik Kuliah 15",

    "Bilik Ts. Dr. Amran Bin Atan",
    "Dataran JKA",
    "Makmal Autocad 1",
    "AVA 2",
    
    "Studio Senibina 1",
    "Studio Senibina 2",
    "Studio Senibina 3",
    "Studio Senibina 4",
    "Studio Senibina 5",
    "Tandas Aras G",
    "Tandas Aras 1",
    "Tandas Aras 2",
    "Tandas Aras 3",
    "Tandas Aras 4",
    "Bilik Pensyarah Aras G",
    "Bilik Pensyarah Aras 1",
    "Bilik Pensyarah Aras 2",
    "Surau",
    "Bilik CESCOMB",
    "TECC"
];

jkaLocations.forEach(function(location) {
    navigationLocations[location.toUpperCase()] = {
        lat: 2.169032,
        lng: 102.428595
    };
});

function zoomToLocation(searchTerm = null) {

    const iframe = document.getElementById("qgisMap");

    if (!iframe) {
        alert("Map tidak dijumpai.");
        return;
    }

    const mapWindow = iframe.contentWindow;

    if (!mapWindow.map) {
        alert("Map belum siap dimuatkan. Sila cuba lagi.");
        return;
    }

    const map = mapWindow.map;

    const search = (searchTerm || document.getElementById("search").value)
    .trim()
    .toLowerCase();

    if (search === "") {
        alert("Sila masukkan nama bangunan atau bilik.");
        return;
    }

    let found = false;

    mapWindow.map.getLayers().forEach(function(layer) {

        if (!layer.getSource) return;

        const source = layer.getSource();

        if (!source || !source.getFeatures) return;

        source.getFeatures().forEach(function(feature) {

            const properties = feature.getProperties();

            for (const key in properties) {

                if (key === "geometry") continue;

                const value = String(properties[key]).toLowerCase();

                if (value.includes(search)) {

                    const geometry = feature.getGeometry();

                    if (geometry) {

                        map.getView().fit(
                            geometry.getExtent(),
                            {
                                padding: [80, 80, 80, 80],
                                maxZoom: 20,
                                duration: 1000
                            }
                        );
                        
                        flashFeature(feature, mapWindow);

                        found = true;
                    }

                    break;
                }
            }
        });
    });

    if (!found) {
        alert("Lokasi tidak dijumpai.");
    }
}


function view360() {

    if (!selectedLink) {
        alert("Sila cari dan pilih lokasi terlebih dahulu.");
        return;
    }

    window.open(selectedLink, "_blank");
}

let bangunanData = null;

fetch("bangunan_jka.geojson")
    .then(response => response.json())
    .then(data => {
        bangunanData = data;
        console.log("Data BANGUNAN JKA berjaya dimuatkan:", data);
    })
    .catch(error => {
        console.error("Gagal membaca GeoJSON:", error);
    });
    
    // =========================
// MENU CARI LOKASI
// =========================

function toggleLocationMenu() {

    const menu = document.getElementById("locationMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


function selectLocation(location) {

    document.getElementById("search").value = location;

    searchRoom();

    document.getElementById("locationMenu").style.display = "none";

    setTimeout(function () {

        const sidebar = document.querySelector(".sidebar");

        if (sidebar) {
            sidebar.classList.remove("mobile-open");
        }

    }, 200);
}
function tutupSidebarTelefon() {

    const sidebar = document.querySelector(".sidebar");

    if (!sidebar) return;

    sidebar.classList.remove("mobile-open");

    sidebar.style.setProperty("left", "-100%", "important");
    sidebar.style.setProperty("transform", "translateX(-100%)", "important");
}

function toggleMobileMenu() {

    const sidebar = document.querySelector(".sidebar");

    if (!sidebar) return;

    sidebar.classList.toggle("mobile-open");

    // Bersihkan inline style lama
    sidebar.style.removeProperty("display");
    sidebar.style.removeProperty("left");
    sidebar.style.removeProperty("transform");
}


function navigateToLocation() {
    if (!selectedName) {
        alert("Sila cari dan pilih lokasi terlebih dahulu.");
        return;
    }

    const location = navigationLocations[selectedName];

    if (!location) {
        alert("Koordinat navigasi untuk lokasi ini belum tersedia.");
        return;
    }

    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;

    window.open(url, "_blank");
}

function flashFeature(feature, mapWindow) {

    if (!feature || !mapWindow || !mapWindow.ol) return;

    const ol = mapWindow.ol;
    const map = mapWindow.map;

    const originalStyle = feature.getStyle();

    const highlightStyle = new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(0, 220, 255, 0.45)"
        }),
        stroke: new ol.style.Stroke({
            color: "#00e5ff",
            width: 5
        })
    });

    let count = 0;

    const flash = setInterval(function () {

        if (count % 2 === 0) {
            feature.setStyle(highlightStyle);
        } else {
            feature.setStyle(originalStyle || null);
        }

        map.render();

        count++;

        if (count >= 6) {
            clearInterval(flash);
            feature.setStyle(originalStyle || null);
            map.render();
        }

    }, 300);
}

let myLocationWatch = null;
let myLocationOverlay = null;

function getMyLocation() {

    if (!navigator.geolocation) {
        alert("Browser anda tidak menyokong fungsi lokasi.");
        return;
    }

    const iframe = document.getElementById("qgisMap");

    if (!iframe) {
        alert("Peta tidak dijumpai.");
        return;
    }

    const mapWindow = iframe.contentWindow;

    if (!mapWindow.map || !mapWindow.ol) {
        alert("Peta belum siap dimuatkan. Sila cuba lagi.");
        return;
    }

    const map = mapWindow.map;
    const ol = mapWindow.ol;

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const coordinate = ol.proj.fromLonLat([
                longitude,
                latitude
            ]);

            // Buat titik lokasi
            const locationElement = mapWindow.document.createElement("div");

locationElement.style.width = "22px";
locationElement.style.height = "22px";
locationElement.style.background = "#00aaff";
locationElement.style.border = "4px solid white";
locationElement.style.borderRadius = "50%";
locationElement.style.boxSizing = "border-box";
locationElement.style.boxShadow =
    "0 0 0 8px rgba(0, 170, 255, 0.20), 0 0 18px rgba(0, 200, 255, 0.8)";

            // Buat overlay
            myLocationOverlay = new ol.Overlay({
                element: locationElement,
                positioning: "center-center",
                stopEvent: false
            });

            map.addOverlay(myLocationOverlay);

            myLocationOverlay.setPosition(coordinate);

            // Zoom ke lokasi pengguna
            map.getView().animate({
                center: coordinate,
                zoom: 18,
                duration: 1000
            });

            // Pantau lokasi secara berterusan
            myLocationWatch = navigator.geolocation.watchPosition(
                function(position) {

                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    const newCoordinate = ol.proj.fromLonLat([
                        lon,
                        lat
                    ]);

                    myLocationOverlay.setPosition(newCoordinate);

                },
                function() {
                    alert("Tidak dapat mengemas kini lokasi anda.");
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 5000,
                    timeout: 10000
                }
            );

        },

        function(error) {

            if (error.code === 1) {
                alert("Sila benarkan akses lokasi untuk menggunakan fungsi ini.");
            } else {
                alert("Lokasi anda tidak dapat dikesan.");
            }

        },

        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}
