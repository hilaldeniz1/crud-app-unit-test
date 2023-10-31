const Form = ({ addUser }) => {
  // formun gönderilmesinde çalışır
  const handleSubmit = (e) => {
    e.preventDefault();

    // formdaki inputlara girilen değerlerden bir obje oluşturma
    const form = new FormData(e.target);
    const user = Object.fromEntries(form.entries());

    // kullanıyı listeye ekleme
    addUser(user);
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <div>
        <label htmlFor="name">İsim</label>
        <input
          name="name"
          className="form-control"
          placeholder="ör:Mustafa"
          id="name"
          type="text"
        />
      </div>
      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="form-control"
          placeholder="mustafa@gmail.com"
          id="email"
          type="text"
        />
      </div>
      <div className="my-4">
        <label htmlFor="age">Yaş</label>
        <input
          name="age"
          className="form-control"
          placeholder="42"
          id="age"
          type="number"
        />
      </div>
      <button className="btn btn-primary">Kullanıcı Ekle</button>
    </form>
  );
};

export default Form;
