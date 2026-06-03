import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import uetLogo from "@/assets/uet-logo.webp";
import avatar from "@/assets/avatar.jpg";
import bai1s1 from "@/assets/bai1/s1.png";
import bai1s2 from "@/assets/bai1/s2.png";
import bai1s3 from "@/assets/bai1/s3.png";
import bai1s4 from "@/assets/bai1/s4.png";
import bai1s5 from "@/assets/bai1/s5.png";
import bai1s6a from "@/assets/bai1/s6a.png";
import bai1s6b from "@/assets/bai1/s6b.png";
import bai1s7 from "@/assets/bai1/s7.png";
import bai1s8a from "@/assets/bai1/s8a.png";
import bai1s8b from "@/assets/bai1/s8b.png";
import bai1s8c from "@/assets/bai1/s8c.png";
import bai1s9a from "@/assets/bai1/s9a.png";
import bai1s9b from "@/assets/bai1/s9b.png";
import bai1s9c from "@/assets/bai1/s9c.png";
import bai1s10 from "@/assets/bai1/s10.png";
import bai1s11a from "@/assets/bai1/s11a.png";
import bai1s11b from "@/assets/bai1/s11b.png";
import bai1s11c from "@/assets/bai1/s11c.png";
import bai1s12 from "@/assets/bai1/s12.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio Kỹ thuật số — Sinh viên UET" },
      {
        name: "description",
        content:
          "Portfolio kỹ thuật số môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo — Đại học Công nghệ, ĐHQGHN.",
      },
    ],
  }),
  component: Portfolio,
});

type ExerciseContent = {
  id: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  objective: string;
  process: { heading: string; body: string }[];
  outcome: string;
  reflection: string;
};

const exercises: ExerciseContent[] = [
  {
    id: "bai1",
    shortLabel: "Bài 1",
    title: "Bài 1 — Thao tác cơ bản với tệp tin và thư mục",
    subtitle: "Mục 1.4 · Quản lý tệp và thư mục",
    objective:
      "Thiết kế một cấu trúc thư mục cá nhân tối ưu phục vụ học tập tại UET, áp dụng quy tắc đặt tên tệp nhất quán, có hệ thống sao lưu và đồng bộ trên nhiều thiết bị.",
    process: [
      {
        heading: "1. Phân tích nhu cầu",
        body: "Xác định các nhóm dữ liệu chính: tài liệu môn học, bài tập cá nhân, dự án nhóm, tài nguyên tham khảo và file cá nhân. Mỗi nhóm có vòng đời và tần suất truy cập khác nhau nên cần tách bạch rõ ràng.",
      },
      {
        heading: "2. Thiết kế cấu trúc thư mục",
        body: "Cấp 1 chia theo học kỳ (HK1-2024, HK2-2024…), cấp 2 chia theo mã môn (INT2208, INT2215…), cấp 3 chia theo dạng tài nguyên (slide, baitap, dukien, tham-khao). Mỗi thư mục đều có file README.md mô tả ngắn nội dung.",
      },
      {
        heading: "3. Quy tắc đặt tên",
        body: "Tệp được đặt theo cú pháp [MãMôn]_[Loại]_[Mô-tả]_[YYYYMMDD]_v[phiên-bản].ext. Ví dụ INT2208_BaiTap_QuanLyTep_20250318_v2.docx. Không dùng dấu tiếng Việt, không dùng khoảng trắng, ưu tiên kebab-case hoặc snake_case.",
      },
      {
        heading: "4. Sao lưu và đồng bộ",
        body: "Áp dụng quy tắc 3-2-1: 3 bản sao, 2 phương tiện khác nhau, 1 bản ngoài máy. Triển khai bằng OneDrive (đồng bộ chính), ổ cứng ngoài (sao lưu hàng tuần) và Google Drive (bản dự phòng nén theo tháng).",
      },
    ],
    outcome:
      "Một cây thư mục rõ ràng, có thể tìm kiếm bằng từ khóa trong vòng vài giây, kèm ảnh chụp minh họa cấu trúc và bảng quy tắc đặt tên ở định dạng PDF.",
    reflection:
      "Việc đặt tên tệp nhất quán tiết kiệm rất nhiều thời gian khi quay lại tìm tài liệu cũ. Ngoài ra, README ngắn ở mỗi thư mục giúp 'phiên bản tương lai' của mình hiểu ngay ngữ cảnh.",
  },
  {
    id: "bai2",
    shortLabel: "Bài 2",
    title: "Bài 2 — Tìm kiếm và đánh giá thông tin học thuật",
    subtitle: "Mục 2.4 · Khai thác dữ liệu và thông tin",
    objective:
      "Thực hành tìm kiếm học thuật nâng cao với các toán tử của Google Search, Google Scholar và đánh giá độ tin cậy của nguồn tin theo bộ tiêu chí CRAAP.",
    process: [
      {
        heading: "1. Câu hỏi nghiên cứu",
        body: "Chủ đề: 'Ứng dụng học sâu trong nhận dạng ngôn ngữ ký hiệu tiếng Việt'. Xác định từ khóa lõi tiếng Anh và tiếng Việt, đồng nghĩa và biến thể.",
      },
      {
        heading: "2. Toán tử tìm kiếm",
        body: "Áp dụng các toán tử nâng cao: site:arxiv.org, filetype:pdf, intitle:\"sign language\", \"Vietnamese sign\" -baseline, intext:CNN AROUND(3) transformer, daterange 2020..2025. Ghi lại 6 truy vấn khác nhau và số kết quả thu được.",
      },
      {
        heading: "3. Đánh giá nguồn theo CRAAP",
        body: "Mỗi nguồn được chấm điểm 5 tiêu chí: Currency (cập nhật), Relevance (liên quan), Authority (uy tín tác giả/tạp chí), Accuracy (có trích dẫn, dữ liệu), Purpose (mục đích trung lập hay quảng cáo).",
      },
      {
        heading: "4. Tổng hợp kết quả",
        body: "Chọn ra 10 nguồn tốt nhất, lập bảng so sánh trong Notion, đính kèm DOI và link Zotero. Loại bỏ các blog không có tác giả rõ ràng và các bài báo dưới 5 trích dẫn quá 3 năm.",
      },
    ],
    outcome:
      "Bảng đánh giá 10 nguồn dạng spreadsheet, ảnh chụp kết quả tìm kiếm cho từng toán tử và file BibTeX để tái sử dụng trong các báo cáo sau.",
    reflection:
      "Toán tử AROUND() và site: giúp lọc nhiễu hiệu quả hơn nhiều so với gõ từ khóa thường. Tiêu chí CRAAP buộc mình phải kiểm tra cả uy tín tác giả chứ không chỉ tiêu đề bài báo.",
  },
  {
    id: "bai3",
    shortLabel: "Bài 3",
    title: "Bài 3 — Viết Prompt hiệu quả cho các tác vụ học tập",
    subtitle: "Mục 3.4 · Tổng quan về trí tuệ nhân tạo",
    objective:
      "So sánh kết quả đầu ra giữa prompt ban đầu và prompt cải tiến áp dụng các nguyên tắc Role · Context · Task · Format · Constraint, từ đó rút ra quy trình viết prompt cho học tập.",
    process: [
      {
        heading: "1. Bài toán",
        body: "Yêu cầu AI tóm tắt chương 'Mạng nơ-ron tích chập' từ giáo trình tiếng Anh thành ghi chú ôn thi tiếng Việt cho sinh viên Kỹ thuật máy tính.",
      },
      {
        heading: "2. Prompt v1 (ban đầu)",
        body: "\"Tóm tắt chương CNN giúp tôi\". Kết quả: chung chung, không có ví dụ, độ dài không kiểm soát, thuật ngữ dịch chưa nhất quán.",
      },
      {
        heading: "3. Prompt v2 (cải tiến)",
        body: "Bổ sung vai trò ('Bạn là trợ giảng môn Thị giác máy tính'), bối cảnh (sinh viên năm 3 UET đã học Đại số tuyến tính), nhiệm vụ (tóm tắt 800 từ + 5 câu hỏi ôn tập), định dạng (Markdown có heading), ràng buộc (giữ nguyên thuật ngữ tiếng Anh trong ngoặc).",
      },
      {
        heading: "4. So sánh & phân tích",
        body: "Lập bảng đối chiếu hai phiên bản theo 4 tiêu chí: độ chính xác kỹ thuật, mức độ phù hợp người học, tính cấu trúc và khả năng tái sử dụng. Prompt v2 vượt trội ở cả 4 mục.",
      },
    ],
    outcome:
      "Tài liệu so sánh hai phiên bản prompt, ảnh chụp output của AI và bộ template prompt cá nhân cho 5 tác vụ học tập thường gặp.",
    reflection:
      "Viết prompt tốt giống như viết đề bài rõ ràng — càng cụ thể vai trò, đối tượng và định dạng đầu ra thì AI càng ít 'sáng tác' và bám sát mục tiêu học tập.",
  },
  {
    id: "bai4",
    shortLabel: "Bài 4",
    title: "Bài 4 — Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    subtitle: "Mục 4.4 · Giao tiếp và hợp tác trong môi trường số",
    objective:
      "Triển khai quy trình quản lý dự án nhóm 5 người trên Trello và Discord cho bài tập lớn môn Lập trình hướng đối tượng, đảm bảo phân công minh bạch và theo dõi tiến độ theo tuần.",
    process: [
      {
        heading: "1. Thiết lập không gian làm việc",
        body: "Tạo Trello board theo mô hình Kanban: Backlog → To do → In progress → Review → Done. Mỗi thẻ gắn nhãn theo module (UI, Backend, Database, Testing) và gán thành viên phụ trách.",
      },
      {
        heading: "2. Quy tắc giao tiếp",
        body: "Discord chia 4 kênh: #thông-báo, #thảo-luận-kỹ-thuật, #review-code, #ngoài-lề. Quy ước trả lời tin nhắn trong 12 giờ, họp video 30 phút mỗi tối thứ 4.",
      },
      {
        heading: "3. Theo dõi tiến độ",
        body: "Mỗi sprint kéo dài 1 tuần, kết thúc bằng demo nhỏ. Sử dụng Trello Power-Up 'Burndown' để vẽ biểu đồ và phát hiện thẻ tồn đọng. Mọi commit được liên kết với mã thẻ trong tin nhắn commit.",
      },
      {
        heading: "4. Tối ưu quy trình",
        body: "Sau sprint 2, nhóm bổ sung 'Definition of Done' để giảm thẻ phải mở lại, đồng thời dùng GitHub Projects đồng bộ với Trello qua Zapier nhằm tránh trùng lặp công việc.",
      },
    ],
    outcome:
      "Ảnh chụp Trello board từng tuần, biểu đồ burndown, biên bản họp và link repo GitHub có commit liên kết thẻ.",
    reflection:
      "Công cụ chỉ phát huy hiệu quả khi nhóm thống nhất nguyên tắc sử dụng. Việc viết 'Definition of Done' tưởng nhỏ nhưng giảm rõ rệt tranh cãi khi review.",
  },
  {
    id: "bai5",
    shortLabel: "Bài 5",
    title: "Bài 5 — Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    subtitle: "Mục 5.4 · Sáng tạo nội dung số",
    objective:
      "Sản xuất một video ngắn 60 giây giới thiệu ngành Kỹ thuật máy tính UET với sự hỗ trợ của các công cụ AI tạo sinh (ChatGPT, Midjourney, ElevenLabs, CapCut AI).",
    process: [
      {
        heading: "1. Lên ý tưởng và kịch bản",
        body: "Dùng ChatGPT brainstorm 5 hướng tiếp cận, chọn hướng 'một ngày của sinh viên KTMT'. Cải tiến kịch bản qua 3 vòng, mỗi vòng bổ sung mô tả khung hình, lời thoại và nhịp chuyển cảnh.",
      },
      {
        heading: "2. Tạo hình ảnh & b-roll",
        body: "Midjourney v6 sinh 12 ảnh minh họa các khung 'phòng lab', 'giảng đường', 'mạch điện tử', 'code editor'. Chọn 6 ảnh phù hợp, dùng upscale và biến thể để giữ phong cách đồng nhất.",
      },
      {
        heading: "3. Lồng tiếng & nhạc nền",
        body: "ElevenLabs sinh giọng đọc tiếng Việt nam, tốc độ vừa, ngữ điệu thân thiện. Nhạc nền chọn từ thư viện miễn phí YouTube Audio Library, mix âm lượng -18 LUFS.",
      },
      {
        heading: "4. Dựng phim",
        body: "CapCut AI tự động cắt theo nhịp giọng đọc, thêm phụ đề tiếng Việt và hiệu ứng chuyển cảnh nhẹ. Xuất bản video 1080p, kèm thumbnail thiết kế trên Canva.",
      },
    ],
    outcome:
      "Video MP4 60 giây, kịch bản chi tiết, bộ ảnh nguồn, file dự án CapCut và một bài blog ngắn mô tả quy trình.",
    reflection:
      "AI rất mạnh ở khâu nháp nhanh và mở rộng ý tưởng, nhưng quyết định cuối cùng về phong cách, đạo đức và độ chính xác vẫn thuộc về con người.",
  },
  {
    id: "bai6",
    shortLabel: "Bài 6",
    title: "Bài 6 — Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    subtitle: "Mục 6.4 · An toàn và liêm chính học thuật",
    objective:
      "Xây dựng bộ nguyên tắc cá nhân gồm 7 điều về sử dụng AI có trách nhiệm, dựa trên các nghiên cứu về đạo đức AI và quy định liêm chính học thuật của ĐHQGHN.",
    process: [
      {
        heading: "1. Khảo sát tài liệu",
        body: "Đọc 8 nguồn: hướng dẫn của UNESCO về AI trong giáo dục, chính sách của ĐHQGHN, bài báo về 'AI hallucination', báo cáo của Stanford HAI và 2 case study sinh viên bị kỷ luật vì lạm dụng AI.",
      },
      {
        heading: "2. Xác định rủi ro",
        body: "Phân loại rủi ro theo 4 nhóm: chính xác (sai sự thật), liêm chính (đạo văn AI), riêng tư (lộ dữ liệu nhạy cảm), phụ thuộc (mất kỹ năng tư duy độc lập).",
      },
      {
        heading: "3. Soạn 7 nguyên tắc cá nhân",
        body: "(1) Luôn ghi rõ vai trò AI khi nộp bài. (2) Không dán dữ liệu cá nhân hoặc bí mật vào prompt. (3) Kiểm chứng mọi sự kiện AI đưa ra. (4) Tự viết bản nháp đầu, AI chỉ đóng vai trò biên tập. (5) Tôn trọng bản quyền dữ liệu huấn luyện. (6) Không dùng AI làm bài thi cá nhân. (7) Chia sẻ prompt và rủi ro với bạn học.",
      },
      {
        heading: "4. Đề xuất giải pháp đạo đức",
        body: "Đề xuất với lớp: lập 'AI usage log' đính kèm mỗi báo cáo nhóm để minh bạch hóa mức độ hỗ trợ; tổ chức seminar nhỏ chia sẻ kinh nghiệm sử dụng AI an toàn.",
      },
    ],
    outcome:
      "Tài liệu PDF 'Bộ nguyên tắc AI có trách nhiệm của tôi', bảng phân tích rủi ro và mẫu AI usage log dùng cho dự án nhóm.",
    reflection:
      "Sử dụng AI có trách nhiệm không phải là dùng ít, mà là dùng có suy nghĩ. Khi minh bạch hóa cách dùng, mình vừa bảo vệ bản thân vừa góp phần xây dựng văn hóa học thuật lành mạnh.",
  },
];

const allTabs = [
  { id: "gioi-thieu", label: "Giới thiệu" },
  ...exercises.map((e) => ({ id: e.id, label: e.shortLabel })),
  { id: "tong-ket", label: "Tổng kết" },
];

function Portfolio() {
  const [tab, setTab] = useState("gioi-thieu");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
          <img
            src={uetLogo}
            alt="Logo Đại học Công nghệ - ĐHQGHN"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-[var(--brand)]/20"
          />
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              VNU · University of Engineering and Technology
            </p>
            <h1 className="text-lg font-semibold text-[var(--brand-deep)]">
              Portfolio Kỹ thuật số
            </h1>
          </div>
        </div>
      </header>

      <section
        className="border-b border-border"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-10 text-primary-foreground">
          <p className="text-sm uppercase tracking-[0.2em] opacity-80">
            Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Hành trình học tập số của sinh viên UET
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base opacity-90">
            {"\n"}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="h-auto w-max min-w-full justify-start gap-1 bg-[var(--brand-soft)] p-1">
              {allTabs.map((t) => (
                <TabsTrigger
                  key={t.id}
                  value={t.id}
                  className="data-[state=active]:bg-[var(--brand)] data-[state=active]:text-primary-foreground px-4 py-2 text-sm"
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="gioi-thieu" className="mt-8">
            <IntroPage />
          </TabsContent>

          {exercises.map((ex) => (
            <TabsContent key={ex.id} value={ex.id} className="mt-8">
              {ex.id === "bai1" ? <Bai1Page /> : <ExercisePage data={ex} />}
            </TabsContent>
          ))}

          <TabsContent value="tong-ket" className="mt-8">
            <SummaryPage />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border bg-card mt-16">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Portfolio cá nhân — Đại học Công nghệ, ĐHQGHN.
        </div>
      </footer>
    </div>
  );
}

function IntroPage() {
  return (
    <article className="grid gap-10 lg:grid-cols-[320px_1fr]">
      <div className="space-y-4">
        <div className="aspect-square overflow-hidden rounded-2xl border border-border shadow-sm">
          <img
            src={avatar}
            alt="Ảnh chân dung sinh viên"
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-deep)]">
            Thông tin sinh viên
          </h3>
          <dl className="mt-3 space-y-2 text-sm">
            <Row k="Họ và tên" v="Nguyễn Hoàng Anh" />
            <Row k="Mã sinh viên" v="25020459" />
            <Row k="Trường" v="ĐH Công nghệ — ĐHQGHN" />
            <Row k="Khóa" v="QH-2025 (K70)" />
            <Row k="Ngành" v="Kỹ thuật máy tính" />
            <Row k="Email" v="25020459@vnu.edu.vn" />
          </dl>
        </div>
      </div>

      <div className="space-y-6">
        <header>
          <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
            Trang Giới thiệu
          </p>
          <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
            Xin chào, mình là Nguyễn Hoàng Anh
          </h2>
        </header>

        <section className="prose-section">
          <h3>Đôi nét về bản thân</h3>
          <p>
            Mình là sinh viên năm nhất ngành Kỹ thuật máy tính tại Trường Đại học Công nghệ, ĐHQGHN.{" "}
          </p>
          <p>
            Mình yêu thích phần cứng nhúng, hệ thống nhân tạo và đặc biệt hứng thú với cách phần mềm tương tác với phần cứng để tạo ra những thiết bị thông minh phục vụ đời sống.
          </p>
        </section>

        <section className="prose-section">
          <h3>Kỹ năng cá nhân</h3>
          <ul>
            <li>Vững nền tảng Toán và Lập trình trong năm nhất.</li>
            <li>Thành thạo ngôn ngữ C và Python. </li>
            <li>Có khả năng sử dụng tiếng Anh trong cả cuộc sống và trong chuyên ngành.</li>
            <li>Kinh nghiệm sử dụng các công cụ và làm việc trên môi trường số</li>
          </ul>
        </section>

        <section className="prose-section">
          <h3>Mục tiêu của Portfolio này</h3>
          <ul>
            <li>Thể hiện một cách có hệ thống các kỹ năng số đã học trong môn học.</li>
            <li>Lưu trữ sản phẩm cá nhân ở một nơi duy nhất, dễ truy cập và chia sẻ.</li>
            <li>Là tài liệu tham chiếu khi xin học bổng, thực tập và việc làm trong tương lai.</li>
            <li>Phản chiếu quá trình trưởng thành của bản thân qua từng bài tập thành phần.</li>
          </ul>
        </section>
      </div>
    </article>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border/60 pb-1 last:border-none">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right font-medium text-foreground">{v}</dd>
    </div>
  );
}

function ExercisePage({ data }: { data: ExerciseContent }) {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="border-l-4 border-[var(--brand)] pl-4">
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          {data.subtitle}
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          {data.title}
        </h2>
      </header>

      <section className="prose-section">
        <h3>1. Mục tiêu bài tập</h3>
        <p>{data.objective}</p>
      </section>

      <section className="prose-section">
        <h3>2. Quá trình thực hiện</h3>
        {data.process.map((p) => (
          <div key={p.heading} className="mt-4">
            <h4>{p.heading}</h4>
            <p>{p.body}</p>
          </div>
        ))}
      </section>

      <section className="prose-section">
        <h3>3. Sản phẩm cuối cùng</h3>
        <p>{data.outcome}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {["PDF báo cáo", "Ảnh chụp minh họa", "Liên kết tài nguyên"].map((t) => (
            <div
              key={t}
              className="rounded-lg border border-dashed border-border bg-[var(--brand-soft)]/40 p-4 text-center text-sm text-muted-foreground"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="prose-section">
        <h3>4. Suy ngẫm cá nhân</h3>
        <p>{data.reflection}</p>
      </section>
    </article>
  );
}

function SummaryPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header>
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          Trang Tổng kết
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          Nhìn lại hành trình xây dựng Portfolio
        </h2>
      </header>

      <section className="prose-section">
        <h3>Trải nghiệm cá nhân</h3>
        <p>
          Khi mới nhận đề bài, mình hình dung Portfolio chỉ là việc gom các bài tập
          lại. Càng làm mình càng nhận ra đây là một bài tập về <em>tư duy hệ
          thống</em>: từ cách đặt tên tệp, lưu trữ bằng chứng, đến cách kể lại câu
          chuyện học tập sao cho người đọc — và cả mình của vài năm sau — đều hiểu
          được. Quá trình ấy buộc mình phải sống chậm lại với từng kỹ năng đã học.
        </p>
      </section>

      <section className="prose-section">
        <h3>Những kiến thức và kỹ năng quan trọng nhất</h3>
        <ul>
          <li>
            <strong>Quản lý dữ liệu cá nhân:</strong> đặt tên, phân loại và sao lưu
            theo quy tắc 3-2-1 đã trở thành thói quen hàng ngày.
          </li>
          <li>
            <strong>Tìm kiếm và đánh giá thông tin:</strong> các toán tử nâng cao và
            bộ tiêu chí CRAAP giúp mình lọc nguồn nhanh và đáng tin hơn.
          </li>
          <li>
            <strong>Làm việc với AI:</strong> viết prompt theo cấu trúc Role-Context-
            Task-Format-Constraint và luôn kiểm chứng đầu ra.
          </li>
          <li>
            <strong>Hợp tác trực tuyến:</strong> dùng Trello, Discord, GitHub
            Projects một cách có nguyên tắc để nhóm chạy mượt.
          </li>
          <li>
            <strong>Đạo đức số:</strong> minh bạch hóa mức độ sử dụng AI và bảo vệ
            dữ liệu cá nhân là phần không tách rời của năng lực số.
          </li>
        </ul>
      </section>

      <section className="prose-section">
        <h3>Điều tâm đắc và thách thức</h3>
        <p>
          Phần mình tâm đắc nhất là Bài 6 — bộ nguyên tắc cá nhân về sử dụng AI có
          trách nhiệm. Việc tự viết ra 7 điều cam kết khiến mình ý thức rõ hơn về
          ranh giới giữa hỗ trợ và phụ thuộc.
        </p>
        <p>
          Thách thức lớn nhất là duy trì sự nhất quán xuyên suốt 6 bài tập: cùng một
          cấu trúc trình bày, cùng một phong cách hình ảnh, cùng một mức độ chi
          tiết. Mình giải quyết bằng cách lập một template Markdown chung và đặt
          deadline phụ cho mỗi bài.
        </p>
      </section>

      <section className="prose-section">
        <h3>Định hướng tiếp theo</h3>
        <p>
          Mình sẽ tiếp tục cập nhật Portfolio này sau mỗi học kỳ, bổ sung các dự án
          phần cứng nhúng và AI ứng dụng. Mục tiêu cuối năm 2 là biến trang này
          thành một website cá nhân hoàn chỉnh có CV, blog kỹ thuật và demo dự án.
        </p>
      </section>
    </article>
  );
}

function Figure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-4">
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <img src={src} alt={alt} className="w-full h-auto object-contain" loading="lazy" />
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground italic text-center">{alt}</figcaption>
    </figure>
  );
}

function Bai1Page() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="border-l-4 border-[var(--brand)] pl-4">
        <p className="text-sm uppercase tracking-widest text-[var(--brand)]">
          Mục 1.4 · Quản lý tệp và thư mục
        </p>
        <h2 className="mt-1 text-3xl font-bold text-[var(--brand-deep)]">
          Bài 1 — Thao tác cơ bản với tệp tin và thư mục
        </h2>
      </header>

      <section className="prose-section">
        <h3>Thực hiện</h3>

        <h4>1. Mở File Explorer</h4>
        <p>Nhấn tổ hợp phím <strong>Windows + E</strong> hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.</p>
        <Figure src={bai1s1} alt="Thanh tìm kiếm với biểu tượng thư mục File Explorer" />

        <h4>2. Truy cập ổ đĩa / thư mục</h4>
        <p>Ở cột bên trái, nhấp vào <strong>This PC</strong>, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ ổ D: hoặc E:). Nếu máy chỉ có ổ C:, hãy vào thư mục <strong>Documents</strong>.</p>
        <Figure src={bai1s2} alt="Khung điều hướng File Explorer hiển thị các ổ đĩa" />

        <h4>3. Tạo thư mục mới</h4>
        <p>Nhấp chuột phải vào khoảng trống → chọn <strong>New → Folder</strong>. Đặt tên thư mục là <code>ThucHanh_hotensinhvien</code> (ví dụ <code>ThucHanh_NguyenHoangAnh</code>). Nhấn <strong>Enter</strong>.</p>
        <Figure src={bai1s3} alt="Menu ngữ cảnh và danh sách tệp khi tạo thư mục mới" />

        <h4>4. Vào thư mục vừa tạo</h4>
        <p>Nhấp đúp vào thư mục <code>ThucHanh_NguyenHoangAnh</code>.</p>
        <Figure src={bai1s4} alt="Cửa sổ File Explorer hiển thị thư mục trống ThucHanh_NguyenHoangAnh" />

        <h4>5. Tạo tệp tin văn bản</h4>
        <p>Nhấp chuột phải vào khoảng trống → <strong>New → Text Document</strong>. Đặt tên là <code>GhiChu.txt</code>. Nhấn <strong>Enter</strong>.</p>
        <Figure src={bai1s5} alt="Menu ngữ cảnh hiển thị tùy chọn tạo Text Document" />
        <div className="my-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-[var(--brand-soft)]">
              <tr><th className="px-3 py-2 text-left">Name</th><th className="px-3 py-2 text-left">Date modified</th><th className="px-3 py-2 text-left">Type</th><th className="px-3 py-2 text-left">Size</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-border"><td className="px-3 py-2">GhiChu</td><td className="px-3 py-2">3/8/2026 4:13 PM</td><td className="px-3 py-2">Text Document</td><td className="px-3 py-2">0 KB</td></tr>
            </tbody>
          </table>
        </div>

        <h4>6. Đổi tên tệp tin</h4>
        <p>Nhấp chuột phải vào tệp <code>GhiChu.txt</code> → chọn <strong>Rename</strong>. Đổi tên thành <code>GhiChuQuanTrong.txt</code>. Nhấn <strong>Enter</strong>.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Figure src={bai1s6a} alt="Menu Rename trong File Explorer" />
          <Figure src={bai1s6b} alt="Tệp sau khi đổi tên thành GhiChuQuanTrong" />
        </div>

        <h4>7. Tạo thư mục con</h4>
        <p>Trong thư mục <code>ThucHanh_NguyenHoangAnh</code>, nhấp chuột phải → <strong>New → Folder</strong>. Đặt tên là <code>TaiLieu</code>.</p>
        <Figure src={bai1s7} alt="Tạo thư mục con TaiLieu" />

        <h4>8. Sao chép tệp tin (Copy &amp; Paste)</h4>
        <ul>
          <li>Nhấp chuột phải vào tệp <code>GhiChuQuanTrong.txt</code> → chọn <strong>Copy</strong> (hoặc <strong>Ctrl + C</strong>).</li>
          <li>Nhấp đúp vào thư mục <code>TaiLieu</code>, nhấp chuột phải vào khoảng trống bên trong → chọn <strong>Paste</strong> (hoặc <strong>Ctrl + V</strong>). Bây giờ bạn có một bản sao của tệp trong thư mục <code>TaiLieu</code>.</li>
        </ul>
        <Figure src={bai1s8a} alt="Menu ngữ cảnh với các tùy chọn Cut, Copy, Rename, Share, Delete" />
        <Figure src={bai1s8b} alt="Thư mục TaiLieu bên trong ThucHanh_NguyenHoangAnh" />
        <Figure src={bai1s8c} alt="Menu Paste và tệp GhiChuQuanTrong xuất hiện trong TaiLieu" />

        <h4>9. Di chuyển tệp tin (Cut &amp; Paste)</h4>
        <ul>
          <li>Quay lại thư mục <code>ThucHanh_NguyenHoangAnh</code>. Tạo một tệp mới tên là <code>DiChuyen.txt</code>.</li>
          <li>Nhấp chuột phải vào tệp <code>DiChuyen.txt</code> → chọn <strong>Cut</strong> (hoặc <strong>Ctrl + X</strong>).</li>
          <li>Nhấp đúp vào thư mục <code>TaiLieu</code>, nhấp chuột phải vào khoảng trống → chọn <strong>Paste</strong> (hoặc <strong>Ctrl + V</strong>). Tệp gốc đã biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới.</li>
        </ul>
        <Figure src={bai1s9a} alt="File Explorer hiển thị TaiLieu, GhiChuQuanTrong và DiChuyen" />
        <Figure src={bai1s9b} alt="Menu Cut cho tệp DiChuyen" />
        <Figure src={bai1s9c} alt="Kết quả sau khi Paste DiChuyen vào TaiLieu" />

        <h4>10. Xóa tệp tin</h4>
        <p>Trong thư mục <code>TaiLieu</code>, nhấp chuột phải vào tệp <code>GhiChuQuanTrong.txt</code> → chọn <strong>Delete</strong>. Tệp sẽ được chuyển vào <strong>Thùng rác (Recycle Bin)</strong>.</p>
        <Figure src={bai1s10} alt="Xóa tệp GhiChuQuanTrong vào Thùng rác" />

        <h4>11. Xóa vĩnh viễn</h4>
        <p>Chọn tệp <code>DiChuyen.txt</code>, nhấn giữ phím <strong>Shift</strong> và nhấn phím <strong>Delete</strong>. Một cảnh báo sẽ hiện ra. Nếu đồng ý, tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.</p>
        <p className="text-sm text-muted-foreground">Đường dẫn: <code>This PC &gt; New Volume (D:) &gt; New folder &gt; ThucHanh_NguyenHoangAnh</code></p>
        <div className="my-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-[var(--brand-soft)]">
              <tr><th className="px-3 py-2 text-left">Name</th><th className="px-3 py-2 text-left">Date modified</th><th className="px-3 py-2 text-left">Type</th><th className="px-3 py-2 text-left">Size</th></tr>
            </thead>
            <tbody>
              <tr className="border-t border-border"><td className="px-3 py-2">TaiLieu</td><td className="px-3 py-2">3/8/2026 4:23 PM</td><td className="px-3 py-2">File folder</td><td className="px-3 py-2"></td></tr>
              <tr className="border-t border-border"><td className="px-3 py-2">GhiChuQuanTrong</td><td className="px-3 py-2">3/8/2026 4:13 PM</td><td className="px-3 py-2">Text Document</td><td className="px-3 py-2">0 KB</td></tr>
            </tbody>
          </table>
        </div>
        <Figure src={bai1s11a} alt="Danh sách tệp trong thư mục ThucHanh_NguyenHoangAnh" />
        <Figure src={bai1s11b} alt="Thùng rác (Recycle Bin) hiển thị GhiChuQuanTrong đã xóa" />
        <Figure src={bai1s11c} alt="Hộp thoại Delete File xác nhận xóa tệp DiChuyen" />

        <h4>12. Khôi phục từ Thùng rác (tùy chọn)</h4>
        <p>Tìm biểu tượng <strong>Recycle Bin</strong> trên màn hình nền, nhấp đúp để mở. Tìm tệp <code>GhiChuQuanTrong.txt</code> đã xóa, nhấp chuột phải vào nó và chọn <strong>Restore</strong>. Tệp sẽ quay trở lại vị trí ban đầu.</p>
        <Figure src={bai1s12} alt="Menu ngữ cảnh và cửa sổ File Explorer khi khôi phục tệp từ Recycle Bin" />
      </section>
    </article>
  );
}
