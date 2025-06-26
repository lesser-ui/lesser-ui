import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description:
    "Lesser UI는 이용자의 개인정보를 안전하게 보호하며, 관련 법령을 준수합니다.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-sm leading-6 text-neutral-300">
      <h1 className="text-2xl font-bold text-white mb-6">개인정보 보호정책</h1>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        1. 수집하는 개인정보
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>이름</li>
        <li>이메일 주소</li>
        <li>GitHub/Google 계정의 고유 ID 및 공개 프로필</li>
        <li>사용자 활동 정보 (UI 업로드, 좋아요 등)</li>
      </ul>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        2. 수집 목적
      </h2>
      <p className="mb-4">
        사용자 인증, 콘텐츠 연결, 서비스 운영 및 개선을 위함입니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        3. 보관 및 삭제
      </h2>
      <p className="mb-4">
        탈퇴 요청 시 개인정보는 완전히 삭제되며, 일부 로그는 보안 목적상 일정
        기간 보관될 수 있습니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        4. 외부 위탁 및 제3자 제공
      </h2>
      <p className="mb-4">
        Supabase를 통한 인증 및 데이터 저장 외에는 외부에 정보를 제공하지
        않습니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        5. 쿠키 사용
      </h2>
      <p className="mb-4">
        로그인 상태 유지를 위해 암호화된 세션 쿠키를 사용합니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        6. 보호 조치
      </h2>
      <p className="mb-4">
        HTTPS 통신과 Supabase 기반 보안 인증 절차를 따릅니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        7. 이용자의 권리
      </h2>
      <p className="mb-4">
        언제든지 개인정보 열람, 수정, 삭제 요청이 가능합니다. 관련 문의는
        gdongu093@gmail.com 으로 연락해주세요.
      </p>
    </div>
  );
}
