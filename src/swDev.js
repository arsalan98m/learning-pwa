export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(swUrl)
      .then((res) => {
        console.log("Service worker has been registered", res);
      })
      .catch((error) => {
        console.log("Error on registering service worker", error);
      });
  }
}
