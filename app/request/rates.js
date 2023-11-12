async function getRates() {
  try {
    const data = await fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_YCepbefovGTIli3bwHjxNWmafnxKqfTobWfysBqk"
    );

    return data.json();
  } catch (err) {
    console.warn(err);
    alert("Ups, can't get currencies. Try agan later.");
    return err;
  }
}

export { getRates };
