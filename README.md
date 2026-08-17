# demos

Website demo previews for Eye in the Sky Solutions.

## Structure

One folder per prospect, named with the same slug used in the project folder on disk.

```
demos/
├── index.html            plain landing page so the bare URL is not a 404
├── README.md
└── <slug>/index.html     one self contained demo per prospect
```

Live at `https://jsteffan7.github.io/demos/<slug>/`

## Adding a demo

1. Go to `https://github.com/Jsteffan7/demos/upload/main/<slug>`
2. Drag `index.html` in
3. Commit to main. Live in about a minute.

## Rules

- Each demo is ONE self contained `index.html`. Images are embedded as base64 so the file works offline and nothing can 404.
- Every demo must include `<meta name="robots" content="noindex, nofollow">`. Never let Google index a mock version of a real business.
- Every demo carries a banner at the top saying it is a demo, and a footer saying who built it, with contact details.
- Do not list prospects on the landing page. A client following their own link should never see who else is being pitched.

## Current demos

- `osteens/` Osteen's Meat Service, Clermont FL
