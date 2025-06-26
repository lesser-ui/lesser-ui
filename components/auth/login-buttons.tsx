"use client";

import { createClient } from "@/lib/supabase/client";
import capitalizeFirstLetter from "@/lib/utils/capitalize-first-letter";
import Image from "next/image";

type Provider = "github" | "google";

const socialLoginProviderList: Provider[] = ["github", "google"];

export default function SocialLoginButtons() {
  /** supabase oauth login function */
  const handleLogin = async (provider: Provider) => {
    const supabase = createClient();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL!;

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: appUrl + "/auth/callback", // redirect url
      },
    });

    if (error) console.error("로그인 에러:", error.message);
  };

  return (
    <div className="flex flex-col justify-center gap-5">
      {socialLoginProviderList.map((provider) => (
        <button
          key={provider}
          onClick={() => handleLogin(provider)}
          className="px-3 py-2 bg-neutral-200 text-neutral-900 font-semibold text-sm
          rounded cursor-pointer flex justify-center items-center gap-2"
        >
          <Image
            src={`/${provider}.svg`}
            alt={provider}
            width={25}
            height={25}
          />
          Continue With {capitalizeFirstLetter(provider)}
        </button>
      ))}
    </div>
  );
}
