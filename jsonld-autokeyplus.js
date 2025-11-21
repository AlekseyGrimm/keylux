(function() {

  // =====================================================================================
  // 1. Основной JSON-LD (LocalBusiness / Locksmith)
  // =====================================================================================

  const mainJsonLd = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": "AutoKeyPlus",
    "image": "https://cdn-icons-png.flaticon.com/512/4428/4428886.png",
    "@id": "https://autokeyplus.by",
    "url": "https://autokeyplus.by",
    "telephone": "+375339177747",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. А.Невского, 76",
      "addressLocality": "Лида",
      "addressRegion": "Гродненская область",
      "postalCode": "231300",
      "addressCountry": "BY"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.891667",
      "longitude": "25.302254"
    },

    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],

    "priceRange": "$$",

    "description": "Изготовление и ремонт ключей в Лиде. Автоключи, чип-ключи, ремонт замков, аварийное вскрытие дверей и автомобилей. AutoKeyPlus — мастерская ключей по адресу Лида, ул. А.Невского, 76.",

    "areaServed": "Лида и ближайшие районы",

    "serviceType": [
      "Изготовление ключей",
      "Изготовление автоключей",
      "Чип-ключи",
      "Ремонт автомобильных ключей",
      "Ремонт замков",
      "Перекодировка замков",
      "Аварийное вскрытие автомобилей",
      "Вскрытие дверей",
      "Замена батареек в брелоках"
    ]
  }


  // =====================================================================================
  // 2. Отзывы — AggregateRating + Review
  // =====================================================================================

  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AutoKeyPlus",
    "url": "https://autokeyplus.by",

    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "37"
    },

    "review": [
      {
        "@type": "Review",
        "author": "Дмитрий",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Быстро изготовили ключ для автомобиля. Отличный сервис!"
      },
      {
        "@type": "Review",
        "author": "Алексей",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Починили мой автоключ за 20 минут. Рекомендую!"
      },
      {
        "@type": "Review",
        "author": "Ирина",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Срочно нужно было открыть квартиру — мастер приехал быстро. Спасибо!"
      }
    ]
  }


  // =====================================================================================
  // 3. FAQ — мощный SEO-буст
  // =====================================================================================

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько стоит изготовление автомобильного ключа в Лиде?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Цена зависит от вида ключа и марки авто. Простые ключи от 20 руб., чип-ключи — от 90 руб."
        }
      },
      {
        "@type": "Question",
        "name": "Вы выезжаете для аварийного вскрытия?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы выезжаем по Лиде и району. Работаем ежедневно с 09:00 до 20:00."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли восстановить ключ, если он полностью потерян?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы можем изготовить новый ключ по замку или по блоку иммобилайзера."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько времени занимает изготовление ключей?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Простые ключи —  до 3 минут, автомобильные ключи — от 10 минут."
        }
      }
    ]
  }


  // =====================================================================================
  // 4. Services — отдельные услуги как странички в поиске
  // =====================================================================================

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Услуги AutoKeyPlus",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Изготовление автомобильных ключей",
        "description": "Изготовление чип-ключей и дубликатов для всех марок авто.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "AutoKeyPlus"
        }
      },
      {
        "@type": "Service",
        "name": "Ремонт автомобильных ключей",
        "description": "Замена корпусов, кнопок, перепайка плат, восстановление брелоков."
      },
      {
        "@type": "Service",
        "name": "Аварийное вскрытие автомобилей",
        "description": "Без повреждений открываем заблокированные автомобили."
      },
      {
        "@type": "Service",
        "name": "Вскрытие дверей",
        "description": "Открываем квартиры, офисы и автомобили быстро и аккуратно."
      },
      {
        "@type": "Service",
        "name": "Ремонт и перекодировка замков",
        "description": "Ремонт сердцевин, цилиндров, замков зажигания."
      }
    ]
  }


  function appendJsonLd(data) {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(data)
    document.head.appendChild(script)
  }

  appendJsonLd(mainJsonLd)
  appendJsonLd(reviewsJsonLd)
  appendJsonLd(faqJsonLd)
  appendJsonLd(servicesJsonLd)

})()
