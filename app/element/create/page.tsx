// component
import ElementWorkspace from "@/components/element-workspace/element-workspace";
import { createElementAction } from "./actions";
import type { Metadata } from "next";
import { checkUserLogin } from "@/lib/supabase/actions/users";
import { unauthorized } from "next/navigation";

export const metadata: Metadata = {
  title: "UI 블록 제작",
  description: "Lesser UI에 새로운 UI 컴포넌트를 제작해보세요.",
};

export default async function CreateElement() {
  const userId = await checkUserLogin();

  if (!userId) return unauthorized();

  return <ElementWorkspace type="create" action={createElementAction} />;
}
