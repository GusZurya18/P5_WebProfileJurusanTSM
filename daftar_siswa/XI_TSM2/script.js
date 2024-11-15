const jsonData = [
    {
        "No": 1,
        "NIS": "31413",
        "Nama": "ANAK AGUNG HARE SATYA SAY, RAM"
    },
    {
        "No": 2,
        "NIS": "31414",
        "Nama": "COKORDA BAWA PRANATA"
    },
    {
        "No": 3,
        "NIS": "31415",
        "Nama": "DANU RONA JUNIOR PRIBADI"
    },
    {
        "No": 4,
        "NIS": "31416",
        "Nama": "DAVIN HADI SURYA"
    },
    {
        "No": 5,
        "NIS": "31417",
        "Nama": "EKA SATRIA PUTRA"
    },
    {
        "No": 6,
        "NIS": "31418",
        "Nama": "GOESTAMAR JORDY"
    },
    {
        "No": 7,
        "NIS": "31419",
        "Nama": "I DEWA GEDE ANGGA UPEKA MAHAYANA"
    },
    {
        "No": 8,
        "NIS": "31420",
        "Nama": "I GEDE ALPIAN PERMANA"
    },
    {
        "No": 9,
        "NIS": "31421",
        "Nama": "I GEDE ARYA GUNAWAN"
    },
    {
        "No": 10,
        "NIS": "31422",
        "Nama": "I GEDE PUTU ANDIKA PUTRA NEGARI"
    },
    {
        "No": 11,
        "NIS": "31423",
        "Nama": "I GEDE RADITIA PRAMANA PUTRA"
    },
    {
        "No": 12,
        "NIS": "31424",
        "Nama": "I KADEK AGUS DARMA ANTARA PUTRA"
    },
    {
        "No": 13,
        "NIS": "31425",
        "Nama": "I KADEK BUDIARTA"
    },
    {
        "No": 14,
        "NIS": "31426",
        "Nama": "I KADEK CANDRA PRANAYA"
    },
    {
        "No": 15,
        "NIS": "31427",
        "Nama": "I KADEK DIKA PRADNYANA PUTRA"
    },
    {
        "No": 16,
        "NIS": "31428",
        "Nama": "I KADEK DWI ARTAGUNA"
    },
    {
        "No": 17,
        "NIS": "31429",
        "Nama": "I KADEK PUTRA DARMAIKA"
    },
    {
        "No": 18,
        "NIS": "31430",
        "Nama": "I KADEK YOGA PUTRA YASA"
    },
    {
        "No": 19,
        "NIS": "31431",
        "Nama": "I KOMANG BAGUS PRADNYA KENCANA"
    },
    {
        "No": 20,
        "NIS": "31432",
        "Nama": "I KOMANG BAGUS PUTRA BAGIA SANJAYA"
    },
    {
        "No": 21,
        "NIS": "31433",
        "Nama": "I KOMANG RIADA JAYA"
    },
    {
        "No": 22,
        "NIS": "31434",
        "Nama": "I MADE ARYA SAPUTRA"
    },
    {
        "No": 23,
        "NIS": "31435",
        "Nama": "I MADE PUTRA GINA WIJAYA"
    },
    {
        "No": 24,
        "NIS": "31436",
        "Nama": "I MADE TEGUH ARTA WIGUNA"
    },
    {
        "No": 25,
        "NIS": "31437",
        "Nama": "I NENGAH DWI SUARDANA PUTRA"
    },
    {
        "No": 26,
        "NIS": "31438",
        "Nama": "I NYOMAN DIAN ZESA MASPUTRA"
    },
    {
        "No": 27,
        "NIS": "31439",
        "Nama": "I NYOMAN SURYA SASTRAWAN"
    },
    {
        "No": 28,
        "NIS": "31440",
        "Nama": "I PUTU AGUS EKA PUTRA PARYANDANA"
    },
    {
        "No": 29,
        "NIS": "31441",
        "Nama": "I PUTU EKA MULIARTA"
    },
    {
        "No": 30,
        "NIS": "31442",
        "Nama": "I PUTU MERTAYASA"
    },
    {
        "No": 31,
        "NIS": "31443",
        "Nama": "I PUTU PARMA MANGKU YASA"
    },
    {
        "No": 32,
        "NIS": "31444",
        "Nama": "I PUTU WAHYU PINANDITA"
    },
    {
        "No": 33,
        "NIS": "31445",
        "Nama": "KOMANG WAHYU WICAHYANA"
    },
    {
        "No": 34,
        "NIS": "31446",
        "Nama": "MADE REEFAL JANUARTHA NUGRAHA PUTRA"
    },
    {
        "No": 35,
        "NIS": "31447",
        "Nama": "PUTU AGUS SASTRAWAN"
    },
    {
        "No": 36,
        "NIS": "31448",
        "Nama": "PUTU GEDE ARSA DINATA PUTRA"
    },
    {
        "No": 37,
        "NIS": "31449",
        "Nama": "RADITTIA ANANTA PUTRA"
    },
    {
        "No": 38,
        "NIS": "31450",
        "Nama": "SI PUTU NGURAH GINANDANA SINATRIA"
    },
    {
        "No": 39,
        "NIS": "31451",
        "Nama": "VIO RAMADHAN FIRMANSYAH"
    },
    {
        "No": 40,
        "NIS": "31452",
        "Nama": "WAHYU SAPUTRA"
    },
    {
        "No": 41,
        "NIS": "31453",
        "Nama": "YEHEZKIEL AVIANTO PRIYONGGO PUTRA"
    }
];


// Create a table element
const table = document.createElement('table');

// Create table header row
const headerRow = document.createElement('tr');
for (const key in jsonData[0]) { // Access the first object's keys for header
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
}
table.appendChild(headerRow);

// Create table body rows
for (const data of jsonData) {
    const bodyRow = document.createElement('tr');
    for (const value of Object.values(data)) {
        const td = document.createElement('td');
        td.textContent = value;
        bodyRow.appendChild(td);
    }
    table.appendChild(bodyRow);
}

// Append the table to an HTML element (e.g., a div with id 'table-container')
const tableContainer = document.getElementById('table-container');
tableContainer.appendChild(table);