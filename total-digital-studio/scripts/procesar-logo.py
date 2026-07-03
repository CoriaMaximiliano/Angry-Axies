"""Copia y optimiza el logo sin fondo para la web."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "imagenes utiles" / "logo sin fondo.png"
OUT = ROOT / "assets"


def export_logo(src: Path, dest: Path, max_size: int) -> None:
    img = Image.open(src).convert("RGBA")
    bbox = img.getbbox()
    if not bbox:
        raise SystemExit("El logo no tiene contenido visible.")
    img = img.crop(bbox)
    img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
    img.save(dest, optimize=True)
    print(f"OK: {dest} ({img.size})")


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"No se encontró: {SRC}")
    OUT.mkdir(parents=True, exist_ok=True)
    export_logo(SRC, OUT / "logo.png", 96)
    export_logo(SRC, OUT / "logo-icono.png", 64)
    export_logo(SRC, ROOT / "logo.png", 96)


if __name__ == "__main__":
    main()
