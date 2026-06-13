# Drop your media here

Add the files below to this `/assets` folder. The site references these exact names —
match them and everything "just works." (JPG/PNG/WebP all fine; keep names lowercase.)

| Filename            | Used for                          | Recommended size                |
|---------------------|-----------------------------------|---------------------------------|
| `hero.jpg`          | Full-screen hero background       | 2400 × 1600 px, landscape       |
| `og-image.jpg`      | Social / AI link preview image    | **1200 × 630 px** (exact)       |
| `drone-tour.mp4`    | Aerial/walkthrough video          | 1080p H.264 MP4, < ~50 MB ideal |
| `video-poster.jpg`  | Still shown before video plays    | 1920 × 1080 px                  |
| `photo-01.jpg`      | Gallery — wide (front exterior)   | 1600 × 1200 px                  |
| `photo-02.jpg`      | Gallery — living room             | 1600 × 1200 px                  |
| `photo-03.jpg`      | Gallery — kitchen                 | 1600 × 1200 px                  |
| `photo-04.jpg`      | Gallery — primary suite           | 1600 × 1200 px                  |
| `photo-05.jpg`      | Gallery — bathroom                | 1600 × 1200 px                  |
| `photo-06.jpg`      | Gallery — wide (backyard)         | 1600 × 1200 px                  |

## Tips
- **`og-image.jpg` matters a lot** — it's the picture that shows in text messages, social
  shares, and some AI previews. Use your best, brightest exterior or twilight shot.
- Compress images before uploading (https://squoosh.app) so the page loads fast — fast
  pages rank better in both Google and AI search.
- Want more than 6 gallery photos? Copy a `<figure class="gallery__item">…</figure>` block
  in `index.html` and add `photo-07.jpg`, etc.
- For the drone video, self-hosting the MP4 here is simplest. If the file is large, host it
  on YouTube/Vimeo instead and switch to the embed (see the commented block in `index.html`).
