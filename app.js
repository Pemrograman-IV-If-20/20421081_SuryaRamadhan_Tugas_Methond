const express = require('express')
const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.get('/', function(req, res) {
    res.send('Selamat datang di API')
})

// app.get('/data-mahasiswa/:npm/:nama', function(req, res) {
//     res.json({
//         npm: req.params.npm,
//         nama: req.params.nama,
//         alamat: req.params.alamat
//     })
// })

// app.get('/data-mahasiswa-query', function(req, res) {
//     res.json({
//         npm: req.query.npm,
//         nama: req.query.nama,
//         alamat: req.query.alamat
//     })
// })

app.post('/test/:npm/:umur', function(req, res) {
    res.json({
        npm: req.params.npm,
        umur: req.params.umur,
        nama: req.query.nama,
        instansi: req.query.instansi,
        fakultas: req.body.fakultas,
        goldar: req.body.goldar,
        agama: req.body.agama,
        warganegara: req.body.warganegara,
        alamat: req.body.alamat,
        jeniskulit: req.body.jeniskulit
    })
})

app.listen(3000)