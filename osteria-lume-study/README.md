# Osteria Lume: CS 4712 social proof placement study

Two versions of a landing page for a fictional Italian restaurant, Osteria Lume. They are identical except for where the **Guest reviews** section sits.

| Version | File | Reviews position |
|---|---|---|
| A | `p/7f3a.html` | Right under the hero, near the top of the page |
| B | `p/c91e.html` | Lower on the page, directly above the Visit / Reserve a table section |

The file names are neutral so participants can't guess their condition from the URL.

## How participants move through it
1. You share **one link**: the site root (`https://your-site.netlify.app/`).
2. `index.html` randomly sends each visitor to A or B (50/50). That browser always gets the same version afterwards.
3. After 20 seconds, a bar slides up: "Continue to survey". It's identical on both versions.
4. The survey link adds `A` or `B` to a hidden field in your Google Form, so every response is tagged with its version.

To check a specific version yourself, use `/?v=A` or `/?v=B`. Those links aren't remembered.

## Things to do
- **Survey link:** after building the Google Form, paste its pre-filled link into `assets/config.js` (instructions are in that file).
- **Photos:** generate six photos using the prompts in `IMAGE_PROMPTS.md`, and save them in `img/` as `hero.jpg`, `story.jpg`, `room.jpg`, `dish1.jpg`, `dish2.jpg` and `dish3.jpg`. Until you do, warm placeholder graphics show instead.
- **Editing content:** edit `tools/template.html` (the page) or `tools/reviews.html` (the reviews section), then run `python3 tools/build.py` to regenerate both versions. Don't edit the files in `p/` by hand, or the two versions could drift apart.

## Deploy (GitHub to Netlify)
1. Create a new GitHub repo, for example `osteria-lume-study`. Go to **Add file → Upload files** and drag in everything in this folder (keep the folders). Commit.
2. In Netlify, go to **Add new site → Import an existing project → GitHub** and pick the repo. Leave the build command empty and set the publish directory to `/`. Deploy.
3. Optional: under **Site settings → Change site name**, pick a name like `osteria-lume`.

## Design notes for the Method section
- The only manipulated variable is the position of the reviews section. The review text, the 4.8 rating and the 312-review count are identical in both versions.
- No other social proof appears anywhere on either page: no ratings in the hero, no "as seen in", and no Reviews link in the navigation.
- The 20-second delay is the same for both groups.
- A footer note and the reservation form both state that the restaurant is fictional and created for a KSU study.
