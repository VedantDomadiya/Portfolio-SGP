
👨‍🎓 An eye-catching developer Portfolio, Built on NextJS, GSAP, Tailwind and React 

### ✨ [Live Demo](https://vedantdomadiya.vercel.app/)

## Getting Started 

In the project directory, you can run:

#### `yarn install`
#### `yarn dev`

Runs the app in the development mode.\
Open [`http://localhost:3000`](http://localhost:3000) to view it in the browser.



## Environment variables

Copy `.env.example` to `.env.local` for local development, and set the same keys in
Vercel → Project → Settings → Environment Variables (then redeploy, because `NEXT_PUBLIC_*` values are baked in at build time).

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Contact form delivery ([web3forms.com](https://web3forms.com), free: 250 messages/month). Without it the form shows an "email me directly" message instead of sending. Web3Forms only accepts browser requests on the free plan, so the form can't be tested with `curl`. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-…`). Leave empty to disable analytics. |

## Credits

Based on [devfolio](https://github.com/shubh73/devfolio) by Shubh Porwal (MIT).

## Animations and music

- Lottie animations in `public/lottie/` (rendered by `components/LottiePlayer`): `lottie.json` came with the
  devfolio template; the rest are free LottieFiles animations under the Lottie Simple License:
  [rocket launch](https://lottiefiles.com/free-animation/startup-business-rocket-launch-animation-for-website-24g7jyKA0H),
  [PC to cloud server](https://lottiefiles.com/free-animation/pc-to-cloud-server-o3qAJebwu3),
  [letter to paper plane](https://lottiefiles.com/free-animation/letter-turns-into-paper-plane-and-flies-away-NmNBTibGSk),
  [cup of coffee](https://lottiefiles.com/free-animation/cup-of-coffee-cnMpFnUDxV),
  [mouse scroll](https://lottiefiles.com/free-animation/mouse-scroll-C4qcXXec3s).
- Music button (`PLAYLIST` in `constants.js`): random track per press, `clip` tracks fade out after N seconds and
  roll into the next one, others play in full. Only commit audio licensed for public web streaming: this repo is
  public, so any file here is downloadable by anyone.
