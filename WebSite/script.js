// Chatbot Fonksiyonları
document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggle = document.getElementById('chatbot-toggle');

    if (chatbotToggle && chatbotContainer) {
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.toggle('active');
        });

        // Sayfa dışına tıklandığında chatbot'u kapat
        document.addEventListener('click', function(event) {
            if (!chatbotContainer.contains(event.target) && chatbotContainer.classList.contains('active')) {
                chatbotContainer.classList.remove('active');
            }
        });
    }
});

// Navbar Scroll Efekti
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.backgroundColor = '#212529';
        navbar.style.padding = '1rem 0';
    }
});

// Form Validasyonları
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const registrationForm = document.getElementById('registrationForm');

    // İletişim Formu Validasyonu
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Form doğrulama
            if (!validateForm(formData)) {
                return;
            }
            
            // Form gönderimi simülasyonu
            submitForm(formData);
        });
    }

    // Kayıt Formu Validasyonu
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = this.querySelector('input[placeholder="Ad"]').value;
            const lastName = this.querySelector('input[placeholder="Soyad"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const type = this.querySelector('select').value;

            if (validateRegistrationForm(firstName, lastName, email, phone, type)) {
                // Form gönderimi simülasyonu
                showNotification('Kaydınız başarıyla alındı!', 'success');
                this.reset();
            }
        });
    }
});

// Form Validasyon Fonksiyonları
function validateForm(data) {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // İsim kontrolü
    if (!data.name.trim()) {
        showError('name', 'Lütfen adınızı ve soyadınızı giriniz.');
        isValid = false;
    } else {
        clearError('name');
    }
    
    // E-posta kontrolü
    if (!data.email.trim()) {
        showError('email', 'Lütfen e-posta adresinizi giriniz.');
        isValid = false;
    } else if (!emailRegex.test(data.email)) {
        showError('email', 'Lütfen geçerli bir e-posta adresi giriniz.');
        isValid = false;
    } else {
        clearError('email');
    }
    
    // Telefon kontrolü (opsiyonel)
    if (data.phone && !/^[0-9+\s-]{10,}$/.test(data.phone)) {
        showError('phone', 'Lütfen geçerli bir telefon numarası giriniz.');
        isValid = false;
    } else {
        clearError('phone');
    }
    
    // Konu kontrolü
    if (!data.subject) {
        showError('subject', 'Lütfen bir konu seçiniz.');
        isValid = false;
    } else {
        clearError('subject');
    }
    
    // Mesaj kontrolü
    if (!data.message.trim()) {
        showError('message', 'Lütfen mesajınızı giriniz.');
        isValid = false;
    } else if (data.message.trim().length < 10) {
        showError('message', 'Mesajınız en az 10 karakter olmalıdır.');
        isValid = false;
    } else {
        clearError('message');
    }
    
    return isValid;
}

function validateRegistrationForm(firstName, lastName, email, phone, type) {
    let isValid = true;
    let errorMessage = '';

    if (!firstName || firstName.trim().length < 2) {
        errorMessage = 'Lütfen geçerli bir ad giriniz.';
        isValid = false;
    } else if (!lastName || lastName.trim().length < 2) {
        errorMessage = 'Lütfen geçerli bir soyad giriniz.';
        isValid = false;
    } else if (!isValidEmail(email)) {
        errorMessage = 'Lütfen geçerli bir e-posta adresi giriniz.';
        isValid = false;
    } else if (!isValidPhone(phone)) {
        errorMessage = 'Lütfen geçerli bir telefon numarası giriniz.';
        isValid = false;
    } else if (!type) {
        errorMessage = 'Lütfen katılım türünü seçiniz.';
        isValid = false;
    }

    if (!isValid) {
        showNotification(errorMessage, 'error');
    }

    return isValid;
}

// Yardımcı Fonksiyonlar
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Bildirim Sistemi
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Bildirim stillerini ekle
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '5px';
    notification.style.color = 'white';
    notification.style.zIndex = '1000';
    notification.style.animation = 'slideIn 0.5s ease-out';

    // Bildirim tipine göre arka plan rengi
    notification.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';

    document.body.appendChild(notification);

    // 3 saniye sonra bildirimi kaldır
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Animasyon için CSS ekle
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth Scroll için tüm iç linkleri seç
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// İletişim Formu İşlemleri
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Form doğrulama
            if (!validateForm(formData)) {
                return;
            }
            
            // Form gönderimi simülasyonu
            submitForm(formData);
        });
    }
});

// Form doğrulama fonksiyonu
function validateForm(data) {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // İsim kontrolü
    if (!data.name.trim()) {
        showError('name', 'Lütfen adınızı ve soyadınızı giriniz.');
        isValid = false;
    } else {
        clearError('name');
    }
    
    // E-posta kontrolü
    if (!data.email.trim()) {
        showError('email', 'Lütfen e-posta adresinizi giriniz.');
        isValid = false;
    } else if (!emailRegex.test(data.email)) {
        showError('email', 'Lütfen geçerli bir e-posta adresi giriniz.');
        isValid = false;
    } else {
        clearError('email');
    }
    
    // Telefon kontrolü (opsiyonel)
    if (data.phone && !/^[0-9+\s-]{10,}$/.test(data.phone)) {
        showError('phone', 'Lütfen geçerli bir telefon numarası giriniz.');
        isValid = false;
    } else {
        clearError('phone');
    }
    
    // Konu kontrolü
    if (!data.subject) {
        showError('subject', 'Lütfen bir konu seçiniz.');
        isValid = false;
    } else {
        clearError('subject');
    }
    
    // Mesaj kontrolü
    if (!data.message.trim()) {
        showError('message', 'Lütfen mesajınızı giriniz.');
        isValid = false;
    } else if (data.message.trim().length < 10) {
        showError('message', 'Mesajınız en az 10 karakter olmalıdır.');
        isValid = false;
    } else {
        clearError('message');
    }
    
    return isValid;
}

// Hata gösterme fonksiyonu
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    
    field.classList.add('is-invalid');
    
    // Önceki hata mesajını kaldır
    const existingError = field.parentElement.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.remove();
    }
    
    field.parentElement.appendChild(errorDiv);
}

// Hata temizleme fonksiyonu
function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('is-invalid');
    
    const errorDiv = field.parentElement.querySelector('.invalid-feedback');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Form gönderme simülasyonu
function submitForm(data) {
    // Form gönderim butonunu devre dışı bırak
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Gönderiliyor...';
    
    // Form gönderimini simüle et
    setTimeout(() => {
        // Başarılı gönderim simülasyonu
        showSuccessMessage();
        
        // Formu sıfırla
        document.getElementById('contactForm').reset();
        
        // Butonu eski haline getir
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
    }, 2000);
}

// Başarılı gönderim mesajı
function showSuccessMessage() {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
    alertDiv.innerHTML = `
        <strong>Başarılı!</strong> Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const form = document.getElementById('contactForm');
    form.parentElement.insertBefore(alertDiv, form.nextSibling);
    
    // 5 saniye sonra mesajı kaldır
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Kayıt Formu İşlevselliği
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const kvkkCheckbox = document.getElementById('kvkkCheckbox');
    const kvkkModal = new bootstrap.Modal(document.getElementById('kvkkModal'));
    const kvkkLink = document.getElementById('kvkkLink');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateRegistrationForm()) {
                return;
            }

            submitRegistrationForm();
        });
    }

    if (kvkkLink) {
        kvkkLink.addEventListener('click', function(e) {
            e.preventDefault();
            kvkkModal.show();
        });
    }

    if (kvkkCheckbox) {
        kvkkCheckbox.addEventListener('change', function() {
            const submitButton = document.querySelector('button[type="submit"]');
            submitButton.disabled = !this.checked;
        });
    }
});

function validateRegistrationForm(formData) {
    let isValid = true;
    const errors = {};

    // Ad Soyad kontrolü
    if (!formData.get('name')?.trim()) {
        errors.name = 'Ad Soyad alanı zorunludur';
        isValid = false;
    }

    // E-posta kontrolü
    const email = formData.get('email')?.trim();
    if (!email) {
        errors.email = 'E-posta alanı zorunludur';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Geçerli bir e-posta adresi giriniz';
        isValid = false;
    }

    // Telefon kontrolü (opsiyonel)
    const phone = formData.get('phone')?.trim();
    if (phone && !/^[0-9]{10,11}$/.test(phone.replace(/[^0-9]/g, ''))) {
        errors.phone = 'Geçerli bir telefon numarası giriniz';
        isValid = false;
    }

    // Bilet türü kontrolü
    if (!formData.get('ticketType')) {
        errors.ticketType = 'Bilet türü seçimi zorunludur';
        isValid = false;
    }

    // Ziyaret tarihi kontrolü
    if (!formData.get('visitDate')) {
        errors.visitDate = 'Ziyaret tarihi seçimi zorunludur';
        isValid = false;
    }

    // Lokasyon kontrolü
    if (!formData.get('location')) {
        errors.location = 'Fuar lokasyonu seçimi zorunludur';
        isValid = false;
    }

    // Öğrenci bilet kontrolü
    if (formData.get('ticketType') === 'student') {
        const studentId = formData.get('studentId')?.trim();
        if (!studentId) {
            errors.studentId = 'Öğrenci kimliği numarası zorunludur';
            isValid = false;
        }
    }

    // KVKK onayı kontrolü
    if (!formData.get('kvkkConsent')) {
        errors.kvkkConsent = 'KVKK metnini okudum ve onaylıyorum alanı zorunludur';
        isValid = false;
    }

    return { isValid, errors };
}

// Form gönderimi
function submitRegistrationForm(formData) {
    const submitButton = document.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Butonu devre dışı bırak ve yükleniyor göster
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Kayıt Yapılıyor...';

    // Form verilerini kontrol et
    const { isValid, errors } = validateRegistrationForm(formData);

    if (!isValid) {
        // Hataları göster
        Object.keys(errors).forEach(fieldName => {
            showError(fieldName, errors[fieldName]);
        });
        
        // Butonu eski haline getir
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        return;
    }

    // Form gönderimini simüle et
    setTimeout(() => {
        // Formu sıfırla
        document.getElementById('registrationForm').reset();
        
        // Başarı mesajını göster
        showSuccessMessage();
        
        // Butonu eski haline getir
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
    }, 2000);
}

// Bilet türü değiştiğinde öğrenci kimliği alanını göster/gizle
document.addEventListener('DOMContentLoaded', function() {
    const ticketTypeSelect = document.getElementById('ticketType');
    const studentIdField = document.getElementById('studentIdField');
    
    if (ticketTypeSelect && studentIdField) {
        ticketTypeSelect.addEventListener('change', function() {
            studentIdField.style.display = this.value === 'student' ? 'block' : 'none';
            const studentIdInput = document.getElementById('studentId');
            if (studentIdInput) {
                studentIdInput.required = this.value === 'student';
            }
        });
    }
}); 