// Contact form delivery via Web3Forms (https://web3forms.com, free tier).
// The access key is designed to be public (it only lets people send *to* you),
// but it lives in an env var so it can be rotated without a code change.
// Set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel → Project → Settings → Environment Variables.
const ENDPOINT = "https://api.web3forms.com/submit";

const mail = async ({ name, email, message }) => {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    throw new Error("NEXT_PUBLIC_WEB3FORMS_KEY is not set");
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Portfolio: new message from ${name}`,
      from_name: "Portfolio contact form",
      name,
      email,
      message,
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) {
    throw new Error(data.message || `Web3Forms responded with ${res.status}`);
  }

  return data;
};

export default mail;
