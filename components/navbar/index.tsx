// lib
import { createClient } from "@/lib/supabase/server";
import { findUserById } from "@/lib/supabase/actions/users";
// components
import NavbarDropDown from "./dropdown";
import LinkLogo from "../link-logo";
// etc
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClover, faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <nav
      id="header"
      className="bg-neutral-900/80 backdrop-blur w-full h-16 sticky top-0 left-0
      flex justify-between items-center p-3 z-9999"
    >
      <section className="flex gap-5 items-center">
        <LinkLogo />
        <NavbarDropDown />
      </section>
      <section className="flex gap-3 items-center">
        <Suspense fallback={null}>
          <LinkButton />
        </Suspense>
      </section>
    </nav>
  );
}

export async function LinkButton() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return renderLink("/login", "로그인");
  }

  const { data: dbUser } = await findUserById({ userId: user.id });

  const href = dbUser?.id ? `/user/${user.id}` : "/login";
  const label = dbUser?.id ? "대시보드" : "로그인";

  return (
    <>
      {dbUser?.id && (
        <Link href="/element/create" className="fancy-fill-btn px-3 text-sm">
          <FontAwesomeIcon icon={faPlus} />
          <span>UI 제작</span>
        </Link>
      )}
      {renderLink(href, label)}
    </>
  );
}

function renderLink(href: string, label: string) {
  return (
    <Link href={href} scroll={false} className="fancy-fill-btn px-3 text-sm">
      <FontAwesomeIcon icon={faClover} />
      <span>{label}</span>
    </Link>
  );
}
