module.exports = {
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
  },
  token: {
    invalid: "Sizin bu əməliyyata imkanınız yoxdur."
  },
  review: {
    textRequired: "Rəy mətni əlavə edilməyib.",
    userRequired: "Rəy sahibi əlavə edilməyib."
  },
  facility: {
    nameRequired: "Ad qeyd olunmayıb",
    iconRequired: "İkon qeyd olunmayıb"
  }
};
