import Logo from "@/app/component/common/Logo";
import FooterLink from "@/app/component/common/footer/FooterLink";

export default function Footer() {
  return (
    <footer className="bg-black p-5 z-50 shadow-md mt-50">
      <div className="lg:w-3/5 m-auto px-10 py-6">
        <div className="flex justify-between">
          <div>
            <Logo />
          </div>
          <select
            name="related_site"
            id="related_site"
            className="custom-related-site-select w-100 bg-black bg-opacity-50 border border-gray-400 rounded-lg px-6 py-4 text-lg text-white appearance-none focus:outline-none cursor-pointer"
            onChange={(e) => {
              if (e.target.value !== "") {
                window.open(e.target.value, "_blank");
              }
            }}
          >
            <option value="">관련 사이트</option>
            <option value="https://joobok.or.kr">주복교회</option>
          </select>
          {/* 화살표 아이콘용 */}
          <style jsx>{`
            #related_site {
              background-image: url('data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
              background-repeat: no-repeat;
              background-position: right 1.5rem center;
              background-size: 2rem;
            }
          `}</style>
        </div>
        <div className="mt-5 border-t border-b border-gray-400 py-5 flex items-center">
          <FooterLink text="수도원소개" link="/user/introduce" />
          <FooterLink text="수도원안내" link="/user/guide/meditation" />
          <FooterLink text="수도원예약" link="/user/apply" />
          <FooterLink text="커뮤니티" link="/user/community" />
          <FooterLink text="주복교회" link="/user/joobok" />
        </div>
        <div className="mt-5">
          <p className="text-white text-sm">
            충남 천안시 동남구 목천읍 유왕골1길 316-38 (덕전리 11-4)
          </p>
          <p className="text-white text-sm">
            TEL. 041-555-0142 | HP. 010.2580.6536
          </p>
          <p className="text-white text-sm mt-5">
            Copyright {new Date().getFullYear()} 케노시스 수도원. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
