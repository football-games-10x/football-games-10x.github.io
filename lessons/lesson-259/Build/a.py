import gzip

# Dosya yolları
input_file = "game.data.unityweb"
output_file = "game.data"

# Sıkıştırmayı kaldır
with gzip.open(input_file, "rb") as compressed_file:
    decompressed_data = compressed_file.read()

# Çıktıyı kaydet
with open(output_file, "wb") as decompressed_file:
    decompressed_file.write(decompressed_data)

print("Sıkıştırma kaldırıldı:", output_file)
