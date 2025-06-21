module.exports = {
  user: {
    username: {
      required: "İstifadəçi adı daxil edilməmişdir.",
      unique: "İstifadəçi bu ad ilə artıq mövcuddur."
    },
    password: {
      required: "Şifrə daxil edilməmişdir."
    },
    email: {
      required: "Elektron ünvan daxil edilməmişdir.",
      unique: "İstifadəçi bu elektron ünvan ilə artıq mövcuddur."
    },
    fullName: {
      required: "Ad və soyad daxil edilməmişdir."
    },
    phoneNumber: {
      required: "Telefon nömrəsi daxil edilməmişdir.",
      unique: "İstifadəçi bu nömrə ilə artıq mövcuddur."
    },
    country: {
      required: "Ölkə seçilməmişdir."
    },
    type: {
      required: "İstfadəçi növü təyin edilməmişdir."
    }
  },
  token: {
    invalid: "Sizin bu əməliyyata imkanınız yoxdur."
  },
  review: {
    text: {
      required: "Rəy mətni qeyd edilməyib."
    },
    user: {
      required: "Rəy sahibi qeyd edilməyib."
    }
  },
  facility: {
    nameRequired: "Ad qeyd olunmayıb.",
    iconRequired: "İkon qeyd olunmayıb."
  },
  property: {
    titleRequired: "Ad qeyd edilməyib.",
    priceRequired: "Qiymət qeyd edilməyib.",
    imageUrlRequired: "Şəkil qeyd edilməyib.",
    categoryRequired: "Kateqoriya qeyd edilməyib.",
    areaRequired: "Sahə qeyd edilməyib.",
    bedroomsRequired: "Yataq otağlarının sayı qeyd edilməyib.",
    bathroomsRequired: "Hamam otağlarının sayı qeyd edilməyib.",
    safetyRankRequired: "Təhlükəsizlik ortalaması qeyd edilməyib.",
    location: {
      required: "Ünvan qeyd edilməyib.",
      latitude: "Latitude qeyd edilməyib.",
      longitude: "Longitude qeyd edilməyib.",
      address: "Ünvan qeyd edilməyib.",
      city: "Şəhər qeyd edilməyib.",
      country: "Ölkə qeyd edilməyib."
    },
    agent: "Satıcı qeyd edilməyib."
  }
};
