"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminSayfasi() {
  const router = useRouter();
  const [girisYapildi, setGirisYapildi] = useState(false);
  const [yazilar, setYazilar] = useState([]);
  const [duzenlenenSlug, setDuzenlenenSlug] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [arama, setArama] = useState("");
  const dropRef = useRef();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    summary: "",
    date: "",
    image: "",
    content: "",
    category: "",
    published: false,
  });

  const kategoriler = [
    "Cilt Hastalıkları",
    "Bağışıklık",
    "Genel Sağlık",
    "Çocuk Hastalıkları",
    "Psikoloji",
  ];

  useEffect(() => {
    const auth = localStorage.getItem("admin-giris");
    if (auth === "true") setGirisYapildi(true);
  }, []);

  const girisYap = () => {
    const sifre = prompt("Yönetici şifresini girin:");
    const dogruSifre = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    if (sifre === dogruSifre) {
      localStorage.setItem("admin-giris", "true");
      setGirisYapildi(true);
    } else {
      alert("Hatalı şifre!");
    }
  };

  const cikisYap = () => {
    localStorage.removeItem("admin-giris");
    setGirisYapildi(false);
    router.refresh();
  };

  useEffect(() => {
    if (!girisYapildi) return;
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setYazilar(data));
  }, [girisYapildi]);

  const formDegistir = (e) => {
    const { name, type, checked, value } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setImageUploading(true);
    const file = e.dataTransfer.files[0];
    if (!file) return alert("Dosya alınamadı.");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (res.ok) {
      setForm((prev) => ({ ...prev, image: result.url }));
    } else {
      alert("Yükleme hatası: " + result.error);
    }

    setImageUploading(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const yaziEkle = async () => {
    if (!form.title || !form.slug) return alert("Başlık ve slug zorunludur.");

    const yeniYazi = { ...form, published: true };

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(yeniYazi),
    });

    if (res.ok) {
      setYazilar([...yazilar, yeniYazi]);
      setForm({
        title: "",
        slug: "",
        summary: "",
        date: "",
        image: "",
        content: "",
        category: "",
        published: false,
      });
    }
  };

  const yaziGuncelle = async () => {
    await fetch("/api/blogs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: duzenlenenSlug }),
    });

    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setYazilar(
      yazilar.map((yazi) => (yazi.slug === duzenlenenSlug ? form : yazi))
    );
    setForm({
      title: "",
      slug: "",
      summary: "",
      date: "",
      image: "",
      content: "",
      category: "",
      published: false,
    });
    setDuzenlenenSlug(null);
  };

  const yaziSil = async (slug) => {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;

    const res = await fetch("/api/blogs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });

    if (res.ok) {
      setYazilar(yazilar.filter((yazi) => yazi.slug !== slug));
    }
  };

  const filtrelenmisYazilar = yazilar.filter((yazi) =>
    yazi.title.toLowerCase().includes(arama.toLowerCase())
  );

  if (!girisYapildi) {
    return (
      <div className="max-w-md mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold mb-4 text-sky-700">
          🔒 Yönetici Girişi
        </h1>
        <button
          onClick={girisYap}
          className="bg-sky-600 text-white px-5 py-2 rounded hover:bg-sky-700 transition"
        >
          Giriş Yap
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="flex justify-between items-center mb-8 w-full">
        <h1 className="text-3xl font-bold text-sky-700">⚙️ Blog Yönetimi</h1>
        <button onClick={cikisYap} className="text-sm underline text-red-600">
          Çıkış Yap
        </button>
      </div>

      <input
        type="text"
        placeholder="Başlığa göre ara..."
        value={arama}
        onChange={(e) => setArama(e.target.value)}
        className="w-full border p-2 rounded mb-6"
      />

      <div className="space-y-3 mb-10 border p-4 rounded bg-gray-50 w-full">
        <h2 className="text-xl font-semibold">
          {duzenlenenSlug ? "Yazıyı Düzenle" : "Yeni Blog Yazısı Ekle"}
        </h2>
        <input
          type="text"
          name="title"
          placeholder="Başlık"
          value={form.title}
          onChange={formDegistir}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug (örnek: psoriasis)"
          value={form.slug}
          onChange={formDegistir}
          className="w-full p-2 border rounded"
          disabled={duzenlenenSlug !== null}
        />
        <input
          type="text"
          name="summary"
          placeholder="Kısa açıklama"
          value={form.summary}
          onChange={formDegistir}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="date"
          placeholder="Tarih (10 Mayıs 2025)"
          value={form.date}
          onChange={formDegistir}
          className="w-full p-2 border rounded"
        />

        <select
          name="category"
          value={form.category}
          onChange={formDegistir}
          className="w-full p-2 border rounded"
        >
          <option value="">Kategori Seçin</option>
          {kategoriler.map((kategori) => (
            <option key={kategori} value={kategori}>
              {kategori}
            </option>
          ))}
        </select>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="published"
            checked={form.published}
            onChange={formDegistir}
          />
          Yayınla
        </label>

        <div
          ref={dropRef}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="w-full border-2 border-dashed border-sky-300 rounded p-6 text-center text-sm text-gray-600 bg-white"
        >
          {imageUploading ? (
            <p>Yükleniyor...</p>
          ) : form.image ? (
            <img
              src={form.image}
              alt="Yüklenen"
              className="w-full h-48 object-contain mx-auto mb-2"
            />
          ) : (
            <p>Görseli buraya sürükle veya yüklemek için bırak</p>
          )}
        </div>

        <textarea
          name="content"
          placeholder="Yazı içeriği"
          value={form.content}
          onChange={formDegistir}
          className="w-full border p-2 rounded h-40"
        />

        {duzenlenenSlug ? (
          <>
            <button
              onClick={yaziGuncelle}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Kaydet
            </button>
            <button
              onClick={() => {
                setDuzenlenenSlug(null);
                setForm({
                  title: "",
                  slug: "",
                  summary: "",
                  date: "",
                  image: "",
                  content: "",
                  category: "",
                  published: false,
                });
              }}
              className="text-sm mt-2 text-red-500 underline"
            >
              İptal Et
            </button>
          </>
        ) : (
          <button
            onClick={yaziEkle}
            className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
          >
            Ekle
          </button>
        )}
      </div>

      <div className="space-y-4 w-full">
        <h2 className="text-xl font-semibold mb-4">Yayınlanan Yazılar</h2>
        {filtrelenmisYazilar.length === 0 ? (
          <p className="text-sm">Hiç eşleşen yazı bulunamadı.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtrelenmisYazilar.map((yazi) => (
              <div
                key={yazi.slug}
                className="border p-4 rounded bg-white shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-sky-700">{yazi.title}</h3>
                  <p className="text-sm text-gray-600">{yazi.summary}</p>
                  <p className="text-xs mt-2">
                    <strong>Kategori:</strong> {yazi.category || "-"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {yazi.published ? "🟢 Yayında" : "🟡 Taslak"}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4 gap-3 text-xs">
                  <Link
                    href={`/blogs/${yazi.slug}`}
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    Önizle
                  </Link>
                  <button
                    onClick={() => {
                      setDuzenlenenSlug(yazi.slug);
                      setForm(yazi);
                    }}
                    className="text-yellow-600 hover:underline"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => yaziSil(yazi.slug)}
                    className="text-red-600 hover:underline"
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
