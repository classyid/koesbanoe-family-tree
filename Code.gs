// Code.gs - Server-side script untuk web app silsilah keluarga M. Koesbanoe

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Silsilah Keluarga M. Koesbanoe')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Konfigurasi API
const DEPLOYMENT_ID = "<ID-DEPLOY>"; 
const API_BASE_URL = `https://script.google.com/macros/s/${DEPLOYMENT_ID}/exec`; 
const API_KEY = "<apikey>"; 
const ADMIN_KEY = "<adminKey>"; 

// Fungsi untuk melakukan request ke API
function callApi(endpoint, params = {}) {
  // Membangun URL dengan API key dan endpoint
  let url = `${API_BASE_URL}?apikey=${API_KEY}&endpoint=${endpoint}`;
  
  // Menambahkan semua parameter ke URL
  Object.keys(params).forEach(key => {
    if (params[key]) {
      url += `&${key}=${encodeURIComponent(params[key])}`;
    }
  });
  
  try {
    console.log("Memanggil API URL:", url);
    
    // Melakukan HTTP request ke API
    const response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true
    });
    
    // Parsing response JSON
    const responseText = response.getContentText();
    console.log("API Response:", responseText);
    return JSON.parse(responseText);
  } catch (error) {
    // Mengembalikan error jika terjadi kesalahan
    console.error("API Error:", error);
    return {
      status: "error",
      data: null,
      message: "Error: " + error.toString()
    };
  }
}

// Fungsi untuk pencarian data
function searchData(query, field) {
  return callApi("search", {
    query: query,
    field: field
  });
}

// Fungsi untuk mendapatkan data berdasarkan ID
function getDataById(id) {
  return callApi("get", {
    id: id
  });
}

// Fungsi untuk mendapatkan silsilah keluarga
function getFamilyTree(name, generations) {
  return callApi("family-tree", {
    name: name,
    generations: generations
  });
}


// Fungsi untuk mendapatkan daftar generasi
function getGenerations() {
  // Daftar generasi yang sebenarnya ada berdasarkan API
  const generations = [
    { nama: "Cucu", deskripsi: "Generasi Cucu dari M. Koesbanoe", jumlah: 0 },
    { nama: "Cicit", deskripsi: "Generasi Cicit dari M. Koesbanoe", jumlah: 0 }
  ];
  
  return {
    status: "success",
    data: generations,
    message: "Daftar generasi berhasil dimuat"
  };
}

// Fungsi untuk mendapatkan data berdasarkan generasi
function getDataByGeneration(name) {
  return callApi("generasi", {
    name: name
  });
}

// Fungsi untuk generate API key (Admin Only)
function generateApiKey(adminKey, name, email) {
  return callApi("generate-api-key", {
    admin_key: adminKey,
    name: name,
    email: email
  });
}

// Fungsi untuk fuzzy search nama untuk silsilah
function searchNameForFamilyTree(query) {
  return searchData(query, "nama");
}
