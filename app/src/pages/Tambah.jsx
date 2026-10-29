import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Portofolio', teknologi: 'HTML', tahun: '', tautan: '' }
export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tugas</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Produktivitas</option>
        <option>Kuliner</option>
        <option>Keuangan</option>
        <option>E-Commerce</option>
        <option>Layanan</option>
        <option>Utilitas</option>
        <option>Pendidikan</option>
        <option>Portofolio</option>
      </select>

      <label htmlFor="tahun">Tahun</label>
      <input id="tahun" name="tahun" type="number" value={form.tahun} onChange={ubah} />

      <label htmlFor="tautan">Tautan</label>
      <input id="tautan" name="tautan" value={form.tautan} onChange={ubah} />

      <label htmlFor="teknologi">Teknologi</label>
      <select id="teknologi" name="teknologi" value={form.teknologi} onChange={ubah}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="GSAP">GSAP</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}