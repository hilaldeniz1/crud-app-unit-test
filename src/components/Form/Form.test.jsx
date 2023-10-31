import { render, screen } from "@testing-library/react";
import Form from "./Form";
import user from "@testing-library/user-event";
import { expect } from "vitest";

// Form bileşeninine diğer bileşenlerden farklı bir test yapacagız
// form gönderilince tabloya eklenme kontrolü yapamayız
// ! form bileşeni görevini doğru şekilde yerine getiriyor mu?
// bütün inputlar doldurulduktan sonra
// formu gönderince "addUser" fonksiynu çalışıyor mu?
// "addUser" fonksiyonuna doğru parametreler gönderiliyor mu?

const testUser = {
  name: "bilal",
  email: "bilal@gmail.com",
  age: "20",
};

it('form gönderilince "addUser" doğru parmatreleri alarak çalışıyor mu?', async () => {
  // mock > fonksiyonları taklit etme
  // ne zaman çağrıldı | hangi parametrelerle çağrıldı
  // tarzında testleri yapmamızı sağlayan orj. fonk simüle den yapı.
  const mock = vi.fn();
  user.setup();

  render(<Form addUser={mock} />);

  // gerekli elemanları çağırma
  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Yaş");
  const submitBtn = screen.getByRole("button");

  // name inputunu doldur - yol 1
  await user.click(nameInp);
  await user.keyboard(testUser.name);

  // email inputunu doldur - yol 2
  await user.type(mailInp, testUser.email);

  // yaş inputunu oldur
  await user.type(ageInp, testUser.age);

  // formu gönder
  await user.click(submitBtn);

  // form gönderilince addUser fonksiyonu çağrılır
  expect(mock).toBeCalled();

  // fonk. çağrılırken doğru argümanlar gönderiliyor mu?
  expect(mock).toBeCalledWith(testUser);
});
