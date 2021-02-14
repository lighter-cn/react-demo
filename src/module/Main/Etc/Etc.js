import React from "react";

const Etc = props => {
  return (
    <section className="etc">
      <h2 className="etc__title">ETC</h2>
      <p className="etc_txt">コンタクトフォームなど</p>
      <form className="contact">
        <div className="contact__title">
          <label>title:
            <input type="text" name="title" className="contact__title-form"></input>
          </label>
        </div>
        <div className="contact__text">
          <label for="text">text:
            <textarea name="text" className="contact__text-form"></textarea>
          </label>
        </div>
      </form>
    </section>
  );
}

export default Etc;