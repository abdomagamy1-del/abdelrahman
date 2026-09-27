const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
}

export default function Page() {
  const configParams = new URLSearchParams(firebaseConfig).toString()

  return (
    <main className="min-h-screen bg-[#09060F]">
      <iframe
        title="معرض أعمال وميض"
        src={`/index.html?${configParams}`}
        className="h-screen w-full border-0"
      />
    </main>
  )
}
