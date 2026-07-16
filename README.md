# BLUEGAME TEST MOBILE

Minimal one-screen Expo / React Native app for quick testing.

## Run

```bash
nvm use 20
npm install
npm start
```

Then open it in the iOS simulator, Android emulator, or Expo Go.

For web:

```bash
npm run web
```

If the QR code does not open correctly from your phone camera, use Expo Go's built-in scanner.

For devices that are not connecting over local Wi-Fi, try:

```bash
npm run tunnel
```

If Expo tunnel crashes with a port error while using Node 24, switch to Node 20 first:

```bash
nvm use 20
```
