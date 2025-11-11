// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 1. Dapatkan referensi ke formulir kontak
    const contactForm = document.querySelector('.kontak-section form');
    
    // 2. Tambahkan event listener untuk mendengarkan saat formulir disubmit
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Mencegah formulir melakukan aksi default (yaitu refresh halaman)
            event.preventDefault(); 

            // Ambil data nama yang dimasukkan
            const namaInput = contactForm.querySelector('input[name="nama"]');
            const nama = namaInput ? namaInput.value : 'Tuan/Nyonya';
            
            // Tampilkan pesan sukses pop-up
            alert(`Terima kasih, ${nama}! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda mengenai proyek hardware Anda.`);
            
            // Reset formulir setelah pesan dikirim
            contactForm.reset();
        });
    }
});