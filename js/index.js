const waktu = document.querySelector('#waktu h2');
const slmt = document.querySelector('#waktu p');
let wktu = '';
window.setTimeout(time(), 1000);
function time() {
   setTimeout("time()", 1000);
   let tgl = new Date();
   const j = tgl.getHours();
   const i = tgl.getMinutes();
   const s = tgl.getSeconds();
   jam = j < 10 ? '0' + j : j;
   men = i < 10 ? '0' + i : i;
   det = s < 10 ? '0' + s : s;
   waktu.innerHTML = jam + ' : ' + men + ' : ' + det;
   wktu = j < 11 ? 'PAGI' : 
            j < 15 ? 'SIANG' :
            j < 19 ? 'SORE' : 'MALAM';  
   slmt.innerText = 'SELAMAT ' + wktu;
}

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');

//menambah shortcut baru
const fo = document.querySelector('#footer');
const tbhShortcut = document.querySelector('.shortcut');
function addElement(namaShortcut, linkShortcut) {
   //ambil key pada local storage
   const ambilKey = Object.keys(localStorage);
   // jika ingin nama key memakai nomor urut pakai sintaks jangan lupa pakai sintak di bawah ini
   // let p = parseInt(ambilKey.length); 
   // const i = String(1); //inisialisasi jika data key tidak ada 

   // // const getNum = ambilKey[p-1].match(/(\d+)/); //memisahkan string & angka pada key local storage
   // let sortir = []; //deklarasi array kosong untuk sortir
   // ambilKey.forEach((el) => { 
   //    const hasil = el.match(/(\d+)/); //memisahkan string dan angka dari key local storage
   //    const num = hasil[0]; //mengambil indeks ke 0 karena itu angka
   //    sortir.push(parseInt(num)); //konversi indeks 0 jadi integer dan memasukkannya ke array
   // });
   // //cari isi array yg paling besar dari array sortir
   // let max = sortir[0];
   // for (let i = 1; i < sortir.length; i++) { //cari isi array yg paling besar
   //    if (sortir[i] > max) {
   //       max = sortir[i];
   //    }
   // }
   
   //jika nama key tidak pakai nomor urut langsung pakai sintaks di bawah
   if (ambilKey.length == 0) {
      const su = document.createElement('div');
      su.classList.toggle('shortcutNew');
   
      const x = document.createElement('span');
      const xtext = document.createTextNode('×');
      x.classList.toggle('closeNew');
      x.appendChild(xtext);
   
      const bu = document.createElement('button');
      bu.classList.toggle('shortcutBaru');
      
      const icon = document.createElement('div');
      icon.classList.toggle('icon')
      const tautan = document.createElement('a');
      tautan.href = linkShortcut;
      icon.appendChild(tautan);
      const img = document.createElement('img');
      // img.src = 'https://www.youtube.com/s/desktop/fed3a7a0/img/logos/favicon.ico'
      icon.appendChild(img);
      bu.appendChild(icon);
   
      const title = document.createElement('div');
      title.classList.toggle('title');
      const tTitle = document.createTextNode(namaShortcut);
      title.appendChild(tTitle);
      bu.appendChild(title);

      //memasukkan elemen span dan button ke dalam tag div baru
      su.appendChild(x);
      su.appendChild(bu);
      // memasukkan elemen yg baru dibuat ke dalam local storage
      const html = su.outerHTML;
      localStorage.setItem(namaShortcut, html);
      //menampilkan elemen yang baru dibuat ke dalam tag footer
      let shortcutNew = localStorage.getItem(namaShortcut);
      fo.insertAdjacentHTML('beforeend', shortcutNew);
      // location.reload();
   } else {

      const su = document.createElement('div');
      su.classList.toggle('shortcutNew');
   
      const x = document.createElement('span');
      const xtext = document.createTextNode('×');
      x.classList.toggle('closeNew');
      x.appendChild(xtext);
   
      const bu = document.createElement('button');
      bu.classList.toggle('shortcutBaru');
      
      const icon = document.createElement('div');
      icon.classList.toggle('icon')
      const tautan = document.createElement('a');
      tautan.href = linkShortcut;
      const img = document.createElement('img');
      // img.src = 'https://www.youtube.com/favicon.ico'
      icon.appendChild(img);
      bu.appendChild(icon);
   
      const title = document.createElement('div');
      title.classList.toggle('title');
      const tTitle = document.createTextNode(namaShortcut);
      title.appendChild(tTitle);
      bu.appendChild(title);
      
      //memasukkan elemen span dan button ke dalam tag div baru
      su.appendChild(x);
      su.appendChild(bu);
      // memasukkan elemen yg baru dibuat ke dalam local storage
      const html = su.outerHTML;
      localStorage.setItem(namaShortcut, html);
      location.reload();
      //menampilkan elemen yang baru dibuat ke dalam tag footer
      let shortcutNew1 = localStorage.getItem(namaShortcut);
      fo.insertAdjacentHTML('beforeend', shortcutNew1);
      
      //menyembunyikan tombol shortcut tambah saat jumlah shortcut sudah lebih dari 6
      let jlh = document.querySelectorAll('#footer .shortcutNew');
      let j = jlh.length;
      if (j == 6) {
         tbhShortcut.style.display = 'none';
      }
   }
}

function closeModal() {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
}

//menampilkan modal
function openModal() {
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
   const btn = document.querySelector('#tbh-shortcut');
   btn.addEventListener('click', function (e) {
      const nama = document.getElementById('nama').value;
      const link = document.getElementById('link').value;
      // console.log(nama);
      addElement(nama, link);
      closeModal();
      e.preventDefault();      
   })
}


function removeElement(namaKey, inKey) {
   const isi = namaKey.target.nextElementSibling;
   const isi1 = isi.innerText;
   localStorage.removeItem(isi1);
}

//menampilkan elemen shortcut baru yang telah ada didalam local storage ke footer
// function tampilkanElement() {
   const data = Object.keys(localStorage);
   const data1 = Object.values(localStorage);
   // console.log(data);
   for (let i = 0; i < data.length; i++) {
      const ambilShortCut = localStorage.getItem(data[i]);
      fo.insertAdjacentHTML('beforeend', ambilShortCut); 

      let jlh = document.querySelectorAll('#footer .shortcutNew');
      let j = jlh.length;
      if (j == 6) {
         tbhShortcut.style.display = 'none';
      } else {
         tbhShortcut.style.visibility = 'visible';
      }
   }
// }

//menambah shortcut baru
tbhShortcut.addEventListener('click', function() {
   // membuka modal
   openModal(); 
   // addElement();
});

//menutup modal
closeModalBtn.addEventListener('click', function () {
   closeModal();
})
//menutup modal dengan mengklik di luar modal
overlay.addEventListener('click', function () {
   closeModal();
})
//menutup modal dengan menekan tombol escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains('hidden')) {
    closeModal();
    e.preventDefault();
  }
});

//menghapus shortcut baru
const removeShortcut = document.querySelectorAll('.shortcutNew');
let r = removeShortcut.length;
if (removeShortcut) {
   removeShortcut.forEach((hps, i) => {
      hps.addEventListener('click', function(e) {
         removeElement(e, i);   
         hps.remove();
         location.reload();
         // tbhShortcut.style.visibility = 'visible';    
      });
      // hps.addEventListener('click', function (e) {
      // })
   });
} 

