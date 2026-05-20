const GCHAT_WEBHOOK =
  "https://chat.googleapis.com/v1/spaces/AAQAbhW1pqY/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=2knOgd_RZ7qR0JSRgL5DLSQCLFKTd7t4lyPM88pDLrE";

export async function notifyLead(fields: Record<string, string>) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `*${k}:* ${v}`);

  const text = `🔔 *New Lead — tecaudex.pk*\n${lines.join("\n")}`;

  try {
    await fetch(GCHAT_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
  } catch {
    // non-blocking — don't affect form UX if notification fails
  }
}
