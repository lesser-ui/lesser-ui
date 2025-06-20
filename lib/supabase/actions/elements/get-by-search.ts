"use server";

import { Element } from "@/types/core";
import { createElementQuery } from "./builder";
import { cookies } from "next/headers";
import { unstable_cache } from "next/cache";

interface GetElementsBySearchTagProps {
  search: string | null;
  tag: string | null;
  page: number;
}

export async function _getBySearch({
  search,
  tag,
  page,
  cookieStore,
}: GetElementsBySearchTagProps & {
  cookieStore: ReturnType<typeof cookies>;
}) {
  console.log("🔥 element hit! : ", search, tag, page, " ", new Date());

  const elementQuery = await createElementQuery(cookieStore);
  const {
    data: elements,
    count,
    error,
  } = await elementQuery
    .byTag(tag)
    .byName(search)
    .range({ page })
    .order({ field: "created_at", ascending: false })
    .fetch();

  if (error) {
    console.error("Fetch error:", error);
    return {
      data: [] as Element[],
      count: 0,
      error,
    };
  }

  return {
    data: elements as Element[],
    count: count ?? 0,
    error: null,
  };
}

// 캐싱된 함수
export async function getBySearch({
  search,
  tag,
  page,
}: GetElementsBySearchTagProps): ReturnType<typeof _getBySearch> {
  const cookieStore = cookies();

  return unstable_cache(
    () =>
      _getBySearch({
        search,
        tag,
        page,
        cookieStore,
      }),
    // 키는 가능한 한 유일하게
    [`search-elements-${search ?? ""}-${tag ?? ""}-${page}`],
    {
      tags: ["elements"],
    }
  )();
}
