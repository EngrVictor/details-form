let opName = document.getElementById('op-name');
let opId = document.getElementById('op-id');
let siteName = document.getElementById('site-name');
let siteId = document.getElementById('site-id');
let bussDev = document.getElementById('buss-dev');
let locType = document.getElementById('loc-type');
let state = document.getElementById('state');
let city = document.getElementById('city');
let model = document.getElementById('model');
let comShare = document.getElementById('com-share');
let mainId = document.getElementById('id');
let from = document.getElementById('from');
let till = document.getElementById('till');
// let form = document.getElementById('form');

const details = {
    acetec: {
        name: 'Acetec Concepts Ltd',
        id: 281,
        mainId: 'G1005259',
        siteName: ['Awka - Bamboo Garden', 'Awka - Impala Lounge & Bar', 'Enugu - Villa Toscana'],
        siteId: [6734, 7198, 6410],
        businessDev: ['Roland'],
        state: ['Anambra', 'Enugu'],
        city: ['Awka', 'Enugu'],
        locationType: ['Bar/Club', 'Hotel'],
        companyShare: 50,
        model: ['HotFun', 'Energy+', 'classic+']
    },
    adenuga: {
        name: 'Adenuga',
        id: 185,
        mainId: 'G1005259',
        siteName: ['Benin City - De Casino Royal', 'Benin City - Exquisite Home', 'Benin City - Global Embassy', 'Lagos - Jabita Hotel, Ikeja', 'Lagos - Olowu Str 38', 'Lagos - One Love Hotel', 'Lagos - Pekas 1 Hotel 4 Opebi Rd', 'Pekas 2'],
        siteId: [6274, 6205, 5726, 5484, 5476, 6699, 7317, 6020],
        businessDev: ['Abraham', 'John Benin'],
        state: ['Edo', 'Lagos'],
        city: ['Benin', 'Ikeja', 'Oshodi'],
        locationType: ['Hotel', 'Bar/Club', 'Gaming Centre'],
        companyShare: 50,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    barcelona: {
        name: 'barcelona',
        id: 278,
        mainId: 'G1005259',
        siteName: ['Abuja - Hot Fun VIP Cafe Zone 7', 'Abuja - Hotfun VIP Cafe Mabuchi'],
        siteId: [7348, 7308],
        businessDev: ['Abraham'],
        state: ['Abuja'],
        city: ['Asokoro', 'Mabushi'],
        locationType: ['Bar/Club', 'Gaming Centre'],
        companyShare: 45,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    boldwings: {
        name: 'boldwings',
        id: 303,
        mainId: 'G1005259',
        siteName: ['Lagos  - Ajao city lounge', 'Lagos - Fortune Pearl Hotel', 'Lagos - Hotel Ibis Royal'],
        siteId: [6872, 7021, 6881, 7068],
        businessDev: ['Abraham'],
        state: ['Lagos'],
        city: ['Ikeja', 'Meiran'],
        locationType: ['Hotel', 'Bar/Club'],
        companyShare: 50,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    chriss: {
        name: 'chriss',
        id: 302,
        mainId: 'G1005259',
        siteName: ['Benin - C.Y Bar and Lounge','Benin - At Play Ground Lounge','Benin - De-Groove Bar', 'Benin - Hotel Tonero', 'Benin - Excellence Inn Hotel 2', 'Benin - Vegas Sport Bar', 'Benin City - Lizzy Inn Hotell', 'KISS MENT HOTEL BENIN CITY'],
        siteId: [7243, 7379, 7436, 7083, 7428, 7462, 7462, 7473, 7340],
        businessDev: [''],
        state: [''],
        city: [''],
        locationType: [''],
        companyShare: 0,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    eddy: {
        name: 'eddy',
        id: 182,
        mainId: 'G1005259',
        siteName: ['Aba - Tony Biz Hotel', 'Abia - 2 Ojimata G&G', 'Elpaso Restaurant, Anambra', 'Focus Casino 3, Owerri', 'Onitsha - Top 10 Hotel', 'Onitsha – Majesty Crown Hotel', 'Owerri - Akwakuma Spot', 'Owerri - Futo Bar'],
        siteId: [7213, 7464, 5797, 5674, 6314, 6331, 7439, 7442],
        businessDev: [''],
        state: [''],
        city: [''],
        locationType: [''],
        companyShare: 0,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    helmut: {
        name: 'helmut',
        id: 222,
        mainId: 'G1005259',
        siteName: ['Asaba - G.L Suit', 'Asaba - Zenith Int. Hotel', 'Asaba-  Destar Hotel'],
        siteId: [7205, 6469, 6468],
        businessDev: [''],
        state: [''],
        city: [''],
        locationType: [''],
        companyShare: 0,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    kasta: {
        name: 'kasta',
        id: 244,
        mainId: 'G1005259',
        siteName: ['Benin - Palamant Hotel', 'Benin City - Still-Chill Hotel', 'D 40s', 'Delta State - Blue Eyes Hotel', 'Ikorodu - Lounge 55', 'Lagos - Tucos Palace 3', 'Warri - Dwellers  Hotel'],
        siteId: [7346, 7472, 7240, 7408, 7433, 6525, 7474],
        businessDev: ['John Ije'],
        state: ['Edo','Delta'],
        city: ['Benin', 'Warri'],
        locationType: ['Hotel', 'Hotel services'],
        companyShare: 50,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    nick: {
        name: 'nick',
        id: 166,
        mainId: 'G1005259',
        siteName: ['Arcania Resort PH', 'Daveange Hotel', 'Impulse bar UYO, AKWA', 'Oyigbo - Bunchy Royal Hotel', 'Port Harcourt - 5G Longue', 'Port Harcourt - 808 Groove Cafe', 'Port Harcourt - Evaville Hotels', 'Port Harcourt - Jazz Hotel', 'Port Harcourt - Orix Empire', 'Port Harcourt - White Street Lo.'],
        siteId: [5634, 5423, 5745, 6987, 7394, 6157, 7459, 6097, 6509, 7334],
        businessDev: [''],
        state: [''],
        city: [''],
        locationType: [''],
        companyShare: 0,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    nigeria: {
        name: 'nigeria',
        id: 150,
        mainId: 'G1005259',
        siteName: ['Abuja - Grand Pela Hotel', 'Abuja - HOT FUN VIP CAFE', 'Abuja - Hunters Garden', 'Abuja - KMC Lounge', 'Abuja - Kurudu Lounge', 'Abuja - Marvel Hotel & Suites', 'Abuja - Nite Club', 'Abuja - Sandralia Hotel FCT', 'Abuja - Stainless Oxford Hotel', 'Abuja - Triple Seven Casino Jabi', 'Abuja - View Point', 'Aguda - David Segun Cafe', 'Anambra - Biggie\'s Place', 'Asaba - De Alpha Guest House', 'Awka - Beatles Garden', 'Awka - C.O.D Arena', 'Awka - Club Coven', 'Awka - De Destination Garden', 'Awka - De Royal Garden', 'Awka - Easy Bar', 'Awka - X-Sharks Lounge', 'Benin - COLONY LOUNGE', 'Benin City - Luciano Lounge', 'Benue - CityBay Park Makurdi', 'Benue - Jackie Suites Gboko', 'Benue - Olive Castle Makurdi', 'Gaga\'s Lounge Awka', 'Ikorodu - Reliable bar', 'Ilorin - Charity Cool Spot', 'Jos - Chillers Hotel', 'Lagos - 101 Lounge', 'Lagos - 9JACKPOT VI Promatic One', 'Lagos - Airport', 'Lagos - Astro lounge & Bar', 'Lagos - Badmus Cafe', 'Lagos - Be Happy Palace Hotel', 'Lagos - Benjack Hotel', 'Lagos - Best Way Hotel', 'Lagos - Chelsea Guest House', 'Lagos - Hot Fun Cafe, Kiri Kiri ', 'Lagos - Hotel 1960 Limited Ikeja', 'Lagos - Lolade Global Hotel', 'Lagos - Lucky Mother Hotel', 'Lagos - Morning Side Suites', 'Lagos - Palm View Manor', 'Lagos - Remyte Hotel', 'Lagos - Roland, Apapa', 'Lagos - The Good Beach', 'Lagos - The Long Bar', 'Lagos- Sisi Chinese Restaurant', 'Lagos-Glory Casino Entertainment', 'Makurdi - Jackies Plaza', 'Mowe - Immaculate Lounge and Bar', 'Nkpor - Dani Hills Hotel', 'Warri - Fawfab Suites', 'Warri - Lawfab Extention 2'],
        siteId: [7470, 7302, 7448, 7381, 7393, 7370, 7045, 7476, 7435, 6169, 7384, 7411, 7056, 7330, 7405, 7429, 7451, 7463, 7450, 7461, 7172, 7457, 6011, 7417, 7413, 7415, 7301, 7061, 7057, 7421, 6706, 7419, 4682, 7471, 7475, 7291, 7227, 7254, 7410, 4889, 7332, 7443, 7453, 7437, 7438, 7191, 5922, 74466, 7423, 7354, 7404, 7418, 7375, 7347, 6843, 7392],
        businessDev: ['Abraham abuja', 'Abraham lagos'],
        state: ['Abuja', 'Lagos'],
        city: ['Abuja', 'Oregun', 'Surulere', 'Ikeja', 'Ikeja', 'Oshodi', 'Ikeja', 'Ikeja'],
        locationType: ['Hotel', 'Bar/Club', 'Gaming Centre'],
        companyShare: [60, 40],
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    oammicheal: {
        name: 'oammicheal',
        id: 220,
        mainId: 'G1005259',
        siteName: ['Easy Bar international Hotel', 'Honey Spot Ashafa Street', 'Lagos - 10/10 Hotel', 'Lagos - 104 Hotel & Casino', 'Lagos - 9jackpot Lounge & Casino', 'Lagos - Bisade Royal Hotel', 'Lagos - D\'island Hotel', 'Lagos - The Heavens', 'Oam Swift 2'],
        siteId: [5962, 6085, 6771, 7073, 7469, 6345, 7440, 6555, 5831],
        businessDev: [''],
        state: [''],
        city: [''],
        locationType: [''],
        companyShare: 0,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    peter: {
        name: 'peter',
        id: 265,
        mainId: 'G1005259',
        siteName: ['Abuja - Stamford Hotel', 'Abuja - Stamford Hotel VIP'],
        siteId: [6247, 6763],
        businessDev: [''],
        state: [''],
        city: [''],
        locationType: [''],
        companyShare: 0,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    peterode: {
        name: 'peterode',
        Id: 294,
        mainId: 'G1005259',
        siteName: ['Jos - Varlaine Lounge', 'Jos - iExplore Arena'],
        siteId: [7146, 6800],
        businessDev: [''],
        state: [''],
        city: [''],
        locationType: [''],
        companyShare: 0,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    samound: {
        name: 'Adenuga',
        id: 304,
        mainId: 'G1005259',
        siteName: ['Asaba - Samound Plaza'],
        siteId: [6856],
        businessDev: [''],
        state: [''],
        city: [''],
        locationType: [''],
        companyShare: 0,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
    ugo: {
        name: 'Adenuga',
        id: 185,
        mainId: 'G1005259',
        siteName: ['Big Lake 777', 'Wadbash Hotel, Ajah, Lagos'],
        siteId: [7237, 5834],
        businessDev: [''],
        state: [''],
        city: [''],
        locationType: [''],
        companyShare: 0,
        model: ['HotFun', 'Energy+', 'classic+', 'Turbo+']
    },
}
opName.addEventListener('change', function () {
    // let opNameValue = opName.value;
    // let opNameId = details[opNameValue].id;
    // console.log(opNameValue, opNameId);
    opId.innerHTML = `<option value='${details[opName.value].id}' name='${opId}'>${details[opName.value].id}</option>`;

    siteName.innerHTML = `
    ${
        details[opName.value].siteName.map((name) => {
            return `<option value='${name}' name='siteName'>${name}</option>`
        })
    }
` 
    siteId.innerHTML = `
    ${
        details[opName.value].siteId.map((name) => {
            return `<option value='${name}'>${name}</option>`
        })
    }
`
    bussDev.innerHTML = `
    ${
        details[opName.value].businessDev.map((name) => {
            return `<option value=${name}>${name}</option>`
        })
    }
`
    locType.innerHTML = `
    ${
        details[opName.value].locationType.map((name) => {
            return `<option value='${name}'>${name}</option>`
        })
    }
` 
    state.innerHTML = `
    ${
        details[opName.value].state.map((name) => {
            return `<option value='${name}'>${name}</option>`
        })
    }
` 
    city.innerHTML = `
    ${
        details[opName.value].city.map((name) => {
            return `<option value='${name}'>${name}</option>`
        })
    }
` 
    model.innerHTML = `
    ${
        details[opName.value].model.map((name) => {
            return `<option value='${name}'>${name}</option>`
        })
    }
`
    comShare.innerHTML = `<option value='${details[opName.value].companyShare}'>${details[opName.value].companyShare}</option>` 
    mainId.innerHTML = `<option value='${details[opName.value].mainId}'>${details[opName.value].mainId}</option>`
//     from.innerHTML = `
//     ${
//         details[opName.value].mainId.map((name) => {
//             return `<option value='${}'>${name}</option>`
//         })
//     }
// ` 
//     till.innerHTML = `
//             ${
//                 details[opName.value].mainId.map((name) => {
//                     return `<option value='${}'>${name}</option>`
//                 })
//             }
//         `
});

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const data = new FormData(form);
//     for (const [name, value] of data) {
//         console.log(name, ':', value);
//     }
//     console.log('submit request')
// })

// console.log(opName.value);

// create web form to save and download data as excel?