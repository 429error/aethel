## 🌀 Aethel: A Chronological Odyssey of the Web
**Aethel** is a high-fidelity, immersive digital museum built with Next.js 14 and GSAP. It reimagines the "scroll" not as a vertical movement but as a Z-axis ascension through the history of internet design. Users don't just browse content; they travel through the design DNA of the 90s, the Y2K era, and the Modern age.

## The Experience
Unlike traditional websites, Aethel utilizes a "Temporal Anchor" logic. As the user scrolls, the application interceptors the input to drive a 3D camera zoom.Z-Axis Immersion: Elements scale and fade from the distance ($z: -5000$) to the foreground ($z: 2000$), creating a "tunnel" effect.Fluid Morphing: Design tokens (border-radius, blur, shadows) are not static. They tween in real-time as you transition between eras.Era-Accurate Physics: From the rigid, tactile "clicked" buttons of 1995 to the frictionless, glowing glass of 2024.

## Technical Stack
**Framework**: Next.js 14 (App Router)
**Animation Engine**: GSAP (ScrollTrigger & Timeline)**
**UI Components**: Framer Motion (Internal element transitions)
**Styling**: Tailwind CSS (Custom "Era" design tokens)
**State Management**: Global CSS Variable Injection via ThemeEngine.tsx

[aethel_demo.webm](https://github.com/user-attachments/assets/d95a0a35-fcfc-4b1c-a316-b4b7a25214f4)

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
