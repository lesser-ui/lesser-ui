import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "Lesser UI는 이용자의 개인정보를 안전하게 보호하며, 관련 법령을 준수합니다.",
};

export default function TermPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-sm leading-6 text-neutral-300">
      <h1 className="text-2xl font-bold text-white mb-6">이용약관</h1>
      <p className="mb-4">
        본 약관은 Lesser UI(이하 &quot;서비스&quot;)의 이용과 관련된 기본적인
        조건을 규정합니다. 이용자는 본 약관에 동의함으로써 서비스 이용에 필요한
        권리와 의무를 갖습니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        1. 서비스 개요
      </h2>
      <p className="mb-4">
        Lesser UI는 개발자 및 디자이너가 UI 컴포넌트를 열람, 공유, 저장할 수
        있도록 설계된 오픈소스 기반 플랫폼입니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        2. 계정 및 인증
      </h2>
      <p className="mb-4">
        본 서비스는 GitHub 또는 Google 계정을 통한 소셜 로그인을 지원하며,
        Supabase Auth를 기반으로 사용자 인증이 이루어집니다. 이용자는 본인의
        계정 정보에 대한 관리 책임이 있습니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        3. 콘텐츠 업로드 및 라이선스
      </h2>
      <p className="mb-4">
        사용자가 업로드한 UI 컴포넌트는 자동으로 MIT 라이선스를 적용받으며,
        누구나 자유롭게 복제, 수정, 배포가 가능합니다. 이용자는 본인이 업로드한
        콘텐츠에 대한 권리를 보유해야 하며, 저작권 침해 시 모든 책임은
        사용자에게 있습니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        4. 이용 제한 및 금지 행위
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>타인의 지식재산권 또는 개인정보를 침해하는 행위</li>
        <li>불법적이거나 악의적인 콘텐츠 업로드</li>
        <li>스팸, 자동화된 접근, 서비스 장애를 유발하는 행위</li>
        <li>서비스의 정상적인 운영을 방해하는 모든 행위</li>
      </ul>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        5. 커뮤니티 및 사용자 활동
      </h2>
      <p className="mb-4">
        좋아요, 북마크 등 사용자 활동은 계정 기준으로 저장됩니다. 비정상적이거나
        반복적인 행위가 감지될 경우, 서비스 이용이 제한될 수 있습니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        6. 책임과 면책
      </h2>
      <p className="mb-4">
        서비스는 사용자 콘텐츠에 대해 사전 검열하지 않으며, 해당 콘텐츠로 인해
        발생한 문제나 법적 책임은 전적으로 작성자에게 있습니다. 단, 신고 및 내부
        판단에 따라 부적절한 콘텐츠는 사전 통보 없이 삭제될 수 있습니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">
        7. 약관 변경
      </h2>
      <p className="mb-4">
        본 약관은 사전 공지 없이 변경될 수 있으며, 변경 시 서비스 내 공지사항을
        통해 안내합니다. 변경된 약관은 게시 즉시 효력이 발생합니다.
      </p>

      <h2 className="text-lg font-semibold text-white mt-8 mb-2">8. 기타</h2>
      <p className="mb-8">
        본 약관에 명시되지 않은 사항은 관계 법령 및 일반적인 인터넷 서비스
        관행에 따릅니다.
      </p>
    </div>
  );
}
