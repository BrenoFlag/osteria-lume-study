"""Builds the two study pages from ONE template so they can only differ in
where the reviews section sits (and the hidden group label).

Run from the repo root:  python3 tools/build.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
template = (ROOT / "tools" / "template.html").read_text(encoding="utf-8")
reviews = (ROOT / "tools" / "reviews.html").read_text(encoding="utf-8")

VERSIONS = {
    # group: (output file, reviews near top?, )
    "A": ("p/7f3a.html", True),   # reviews right under the hero
    "B": ("p/c91e.html", False),  # reviews lower down, right above the reservation section
}

for group, (out, top) in VERSIONS.items():
    html = (template
            .replace("{{GROUP}}", group)
            .replace("{{REVIEWS_TOP}}", reviews if top else "")
            .replace("{{REVIEWS_BOTTOM}}", "" if top else reviews))
    assert "{{" not in html, "unfilled placeholder"
    path = ROOT / out
    path.parent.mkdir(exist_ok=True)
    path.write_text(html, encoding="utf-8")
    print(f"Version {group} -> {out}")
