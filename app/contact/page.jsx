"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const formRef = useRef();
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailjs.init("AfjNJbvpclsfFJDiK");
  }, []);

  const handlePhoneInput = (e) => {
    const input = e.target;
    let value = input.value.replace(/[^\d]/g, ""); // sadece sayılar
    if (!value.startsWith("7")) {
      value = "7" + value.replace(/^8/, "");
    }

    let formatted = "+7 ";
    if (value.length > 1) formatted += value.substring(1, 4);
    if (value.length > 4) formatted += " " + value.substring(4, 7);
    if (value.length > 7) formatted += " " + value.substring(7, 9);
    if (value.length > 9) formatted += " " + value.substring(9, 11);

    input.value = formatted;
  };

  const validate = (name, email, phone) => {
    const newErrors = {};
    if (!/^[А-Яа-яЁёA-Za-z\s'-]{2,}$/.test(name)) {
      newErrors.name =
        "Пожалуйста, введите корректное имя (только буквы и пробелы).";
    }
    if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email =
        "Пожалуйста, введите корректный адрес электронной почты.";
    }
    if (!/^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/.test(phone)) {
      newErrors.phone =
        "Введите корректный номер в формате +7 XXX XXX XX XX.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    const validationErrors = validate(name, email, phone);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setResponseMessage("❗ Пожалуйста, проверьте правильность заполнения полей.");
      return;
    }

    setErrors({});
    setResponseMessage("⏳ Отправка формы... Пожалуйста, подождите.");

    try {
      await emailjs.send("service_b123ul8", "template_8bekk3p", {
        name,
        email,
        phone,
        message,
      });
      setResponseMessage("✅ Ваша запись успешно создана. Мы скоро свяжемся с вами.");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setResponseMessage("❌ Произошла ошибка при отправке. Пожалуйста, попробуйте позже.");
    }
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-60 py-10">
      <h1 className="text-3xl font-bold text-center text-sky-600 pt-5 pb-10">
        Свяжитесь с нами
      </h1>

      <section className="w-full flex flex-col lg:flex-row gap-10 justify-between items-start bg-gray-100 p-5 rounded-lg">
        {/* MAP */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d376.3412762727412!2d28.89898311978924!3d41.009277887105284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdr%20mehmet%20ilteber%20bahad%C4%B1r!5e0!3m2!1str!2str!4v1741003329924!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* FORM */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-center text-sky-600 mb-6">
            Оставить заявку на приём
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                className="w-full border p-2 rounded"
                required
              />
              {errors.name && (
                <small className="text-red-500">{errors.name}</small>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Ваш Email"
                className="w-full border p-2 rounded"
                required
              />
              {errors.email && (
                <small className="text-red-500">{errors.email}</small>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="+7 XXX XXX XX XX"
                maxLength="18"
                onInput={handlePhoneInput}
                className="w-full border p-2 rounded"
                required
              />
              {errors.phone && (
                <small className="text-red-500">{errors.phone}</small>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Ваше сообщение"
                className="w-full border p-2 rounded h-[200px] sm:h-[250px] lg:h-[290px]"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-2">
              Отправить заявку
            </button>
            {responseMessage && (
              <div className="mt-2 font-semibold text-center">
                {responseMessage}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Contact Cards */}
      <div className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <a
          href="mailto:randevu@drmehmetilteberbahadir.net"
          className="block border p-6 rounded-xl shadow hover:shadow-lg transition hover:bg-sky-50 text-inherit"
        >
          <FaEnvelope className="mx-auto text-sky-500 text-3xl mb-3" />
          <h4 className="font-bold mb-1">Электронная почта</h4>
          <p className="text-sm text-gray-600">
            randevu@drmehmetilteberbahadir.net
          </p>
        </a>

        <a
          href="tel:+905527533464"
          className="block border p-6 rounded-xl shadow hover:shadow-lg transition hover:bg-sky-50 text-inherit"
        >
          <FaPhoneAlt className="mx-auto text-sky-500 text-3xl mb-3" />
          <h4 className="font-bold mb-1">Телефон</h4>
          <p className="text-sm text-gray-600">+90 (552) 753 34 64</p>
        </a>

        <a
          href="https://wa.me/905527533464"
          target="_blank"
          rel="noopener noreferrer"
          className="block border p-6 rounded-xl shadow hover:shadow-lg transition hover:bg-sky-50 text-inherit"
        >
          <FaWhatsapp className="mx-auto text-sky-500 text-3xl mb-3" />
          <h4 className="font-bold mb-1">WhatsApp</h4>
          <p className="text-sm text-gray-600">+90 (552) 753 34 64</p>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
