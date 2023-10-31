import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "./App";
import user from "@testing-library/user-event";

it("Uygulama doğru şekilde çalışıyor mu?", async () => {
  render(<App />);
  user.setup();

  // gerekli bileşenler
  const nameInp = screen.getByPlaceholderText("ör:Mustafa");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Yaş");
  const button = screen.getByRole("button", {
    name: /kullanıcı ekle/i,
  });

  //formu doldur
  await user.type(nameInp, "Veli");
  await user.type(mailInp, "velire@gmail.com");
  await user.type(ageInp, "23");

  // formu gönder
  await user.click(button);

  // isim yaş ve mail değerlerine karşılık gelen hücreler ekrana basıldı mı?
  screen.getByRole("cell", { name: "Veli" });
  screen.getByRole("cell", { name: "velire@gmail.com" });
  screen.getByRole("cell", { name: "23" });
});

// bir şey return eden fonksiyonu kontrol etme
const multiple = (a, b, c) => {
  return a * b * c;
};

// describe >  bir testin farklı durumlarını veya
// bir bileşenin farklı özelliklerini bir arada toplamak için
// kullanılır.
describe("Fonksiyon farklı durumlarda doğru çalışır", () => {
  it("pozitif sayı gönderildiğinde", () => {
    expect(multiple(10, 2, 3)).toBe(60);
  });

  it("negatif sayı gönderildiğinde", () => {
    expect(multiple(10, -2, 3)).toBe(-60);
  });

  it("0  gönderildiğinde", () => {
    expect(multiple(10, 2, 0)).toBe(0);
  });
});
