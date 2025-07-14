# Dil Seçiniz / Select Language

<h2 align="center">
  <a href="#tr---türkçe">TR Türkçe</a>
  &nbsp;|&nbsp;
  <a href="#en---english">EN English</a>
</h2>

---

## TR - Türkçe
<div id="tr---türkçe"></div>

# Global Mobilite Expo 2024 - Akıllı Fuar Asistanı Projesi

## 🚗 Proje Hakkında

Bu proje, **Global Mobilite Expo 2024** otomobil fuarı için geliştirilmiş, RAG tabanlı bir yapay zeka asistanı ve modern bir web sitesinden oluşmaktadır. Ziyaretçiler, web sitesi üzerinden fuar hakkında bilgi alabilir, katılımcıları ve programı inceleyebilir, bilet satın alabilir ve akıllı chatbot ile etkileşime geçerek fuarla ilgili tüm sorularına anında yanıt bulabilirler.

---

## 🧠 Akıllı Chatbot (AI Agent)

- **Teknoloji:** n8n + OpenAI (GPT-4o-mini) + Pinecone (Vektör veritabanı)
- **Yetenekler:**
  - Fuar hakkında bilgi sağlama (tarih, yer, program, katılımcılar, biletler vb.)
  - Kullanıcıya özel önerilerde bulunma (ilgi alanına göre stand önerisi vb.)
  - Sıkça sorulan sorulara hızlı ve doğru yanıtlar
  - Kibar, anlaşılır ve kullanıcı dostu iletişim
- **RAG (Retrieval Augmented Generation):**
  - Fuarla ilgili PDF ve dokümanlardan alınan bilgiler vektör veritabanında saklanır.
  - Kullanıcıdan gelen sorular, ilgili dokümanlardan alınan bilgilerle zenginleştirilerek cevaplanır.
- **n8n Akış Yapısı:**
  - Webhook ile mesaj alımı
  - AI Agent node'u ile doğal dil işleme
  - Pinecone ile bilgiye erişim
  - OpenAI ile yanıt üretimi
  - Hafıza yönetimi (kısa süreli sohbet geçmişi)

---

## 🌐 Web Sitesi

- **Teknolojiler:** HTML, CSS (Bootstrap + özel stiller), JavaScript
- **Bölümler:**
  - **Ana Sayfa:** Fuarın öne çıkanları ve hızlı erişim
  - **Hakkımızda:** Fuarın amacı, vizyonu ve genel tanıtımı
  - **Katılımcılar:** Markalar ve firmalar listesi
  - **Program:** Etkinlik takvimi, paneller ve konuşmacılar
  - **Biletler:** Bilet türleri ve fiyatları
  - **Kayıt:** Online kayıt formu
  - **İletişim:** İletişim formu ve bilgiler
- **Chatbot Entegrasyonu:**
  - Web sitesinin sağ alt köşesinde, ziyaretçilerin sorularını anında yanıtlayan akıllı asistan
  - Sohbet geçmişi ve çoklu dil desteği (TR/EN altyapısı hazır)
  - Modern ve kullanıcı dostu arayüz

---

## 📁 Proje Dosya Yapısı

```
AIAgent-main/
│
├── N8N/
│   ├── Chatbot (1).json         # n8n akış dosyası (AI agent)
│   ├── Global Mobilite Expo - Fuar Bilgi Dosyası.pdf  # Bilgi tabanı PDF
│   ├── Global Mobilite Expo Chatbot Soru-Cevap Örnekleri.pdf # SSS örnekleri
│   └── Reading_File.json        # Ekstra veri/ayar dosyası
│
└── WebSite/
    ├── index.html               # Ana sayfa
    ├── hakkimizda.html          # Hakkımızda
    ├── katilimcilar.html        # Katılımcılar
    ├── program.html             # Program
    ├── biletler.html            # Biletler
    ├── kayit.html               # Kayıt formu
    ├── iletisim.html            # İletişim
    ├── script.js                # Tüm JS fonksiyonları ve chatbot entegrasyonu
    ├── style.css                # Tüm özel stiller
    └── ... (görseller ve diğer dosyalar)
```

---

## 🚀 Kurulum ve Kullanım

1. **n8n Kurulumu:**
   - n8n'i kendi sunucunuzda veya bulutta çalıştırın.
   - `N8N/Chatbot (1).json` dosyasını içe aktarın.
   - OpenAI ve Pinecone API anahtarlarınızı girin.
   - Bilgi tabanını (PDF) vektör veritabanına yükleyin.

2. **Web Sitesi:**
   - `WebSite/` klasörünü bir web sunucusuna yükleyin.
   - Chatbot entegrasyonu için webhook URL'sini güncelleyin (gerekirse).
   - Siteye giriş yaparak chatbotu test edin.

---

## 💡 Özellikler

- Gerçek zamanlı, akıllı ve kişiselleştirilmiş fuar asistanı
- Modern, mobil uyumlu ve kullanıcı dostu web sitesi
- Kolay kurulum ve özelleştirme
- Geliştirilebilir altyapı (yeni dokümanlar, yeni diller, ek modüller)

---


## EN - English
<div id="en---english"></div>

# Global Mobility Expo 2024 - Smart Fair Assistant Project

## 🚗 About the Project

This project consists of a RAG-based AI assistant and a modern website developed for the **Global Mobility Expo 2024** automobile fair. Visitors can get information about the fair, review participants and the program, buy tickets, and interact with the smart chatbot to instantly get answers to all their questions about the fair.

---

## 🧠 Smart Chatbot (AI Agent)

- **Technology:** n8n + OpenAI (GPT-4o-mini) + Pinecone (Vector database)
- **Capabilities:**
  - Provides information about the fair (date, location, program, participants, tickets, etc.)
  - Personalized suggestions (e.g., stand recommendations based on interests)
  - Fast and accurate answers to frequently asked questions
  - Polite, clear, and user-friendly communication
- **RAG (Retrieval Augmented Generation):**
  - Information from PDFs and documents about the fair is stored in a vector database.
  - User questions are enriched and answered with relevant information from these documents.
- **n8n Workflow Structure:**
  - Message intake via webhook
  - Natural language processing with AI Agent node
  - Information retrieval with Pinecone
  - Response generation with OpenAI
  - Memory management (short-term chat history)

---

## 🌐 Website

- **Technologies:** HTML, CSS (Bootstrap + custom styles), JavaScript
- **Sections:**
  - **Home:** Highlights and quick access
  - **About:** Purpose, vision, and general introduction of the fair
  - **Participants:** List of brands and companies
  - **Program:** Event schedule, panels, and speakers
  - **Tickets:** Ticket types and prices
  - **Registration:** Online registration form
  - **Contact:** Contact form and information
- **Chatbot Integration:**
  - Smart assistant in the bottom right corner, instantly answering visitor questions
  - Chat history and multi-language support (TR/EN infrastructure ready)
  - Modern and user-friendly interface

---

## 📁 Project File Structure

```
AIAgent-main/
│
├── N8N/
│   ├── Chatbot (1).json         # n8n workflow file (AI agent)
│   ├── Global Mobilite Expo - Fuar Bilgi Dosyası.pdf  # Knowledge base PDF
│   ├── Global Mobilite Expo Chatbot Soru-Cevap Örnekleri.pdf # FAQ examples
│   └── Reading_File.json        # Extra data/settings file
│
└── WebSite/
    ├── index.html               # Home page
    ├── hakkimizda.html          # About
    ├── katilimcilar.html        # Participants
    ├── program.html             # Program
    ├── biletler.html            # Tickets
    ├── kayit.html               # Registration form
    ├── iletisim.html            # Contact
    ├── script.js                # All JS functions and chatbot integration
    ├── style.css                # All custom styles
    └── ... (images and other files)
```

---

## 🚀 Installation and Usage

1. **n8n Setup:**
   - Run n8n on your own server or in the cloud.
   - Import the `N8N/Chatbot (1).json` file.
   - Enter your OpenAI and Pinecone API keys.
   - Upload the knowledge base (PDF) to the vector database.

2. **Website:**
   - Upload the `WebSite/` folder to a web server.
   - Update the webhook URL for chatbot integration (if necessary).
   - Access the site and test the chatbot.

---

## 💡 Features

- Real-time, smart, and personalized fair assistant
- Modern, mobile-friendly, and user-friendly website
- Easy setup and customization
- Extensible infrastructure (new documents, new languages, additional modules)


