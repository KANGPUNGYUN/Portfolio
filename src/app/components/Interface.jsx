import { motion } from "framer-motion";

import {
  harudiary,
  mstayhotel,
  pungnyeonmarket,
  github,
  hopescience,
  portfolio,
} from "../../../public/projects";

import { Tilt } from "react-tilt";

import linkedIn from "../../../public/linkedIn.png";
import profile from "../../../public/usericon.png"; //profile.jpg
import Image from "next/image";
import TypingAnimation from "./TypingAnimation";
import { useState, useEffect, useRef } from "react";
import dateView from "../utils/date";
import Pagination from "./Pagination";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Section(props) {
  const { children } = props;
  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      }}
    >
      {children}
    </motion.section>
  );
}

function Interface(props) {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen text-white">
      <AboutSection setSection={setSection} />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

function AboutSection(props) {
  const { setSection } = props;

  return (
    <Section>
      <h1 className="text-5xl font-bold">
        <TypingAnimation text="안녕하세요" delay={0} />
        <TypingAnimation text="개발자 강풍윤입니다." delay={0.5} />
      </h1>
      <motion.p
        className="text-lg text-gray-400 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <br />
        다른 사람에게 더 좋은 경험을 선사할 수 있는지
        <br />늘 고민하는 개발자입니다.
      </motion.p>
      <br />
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <p>
          <span className="text-sky-400">const</span>
          <span className="text-sky-200"> interest</span>
          <span> =</span>
          <span className="text-sky-600"> true</span>
          <span>;</span>
        </p>
        <p>
          <span className="text-purple-400">if </span>
          <span>&#40;</span>
          <span className="text-sky-200"> interest</span>
          <span> &#41;</span>
          <span> &#123;</span>
        </p>

        <button
          className="bg-sky-500 text-white py-4 px-8 rounded-lg font-bold text-lg m-4 hover:bg-sky-600"
          onClick={() => {
            setSection(4);
          }}
        >
          Contact me
        </button>

        <p>&#125;</p>
      </motion.div>
    </Section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      name: "희망과학심리상담센터",
      image: hopescience.src,
      contribute: "외주",
      url: "https://www.xn--vb0b67vepvv2b.com/",
      github: "https://github.com/KANGPUNGYUN/hopescience",
      desc: "양형을 위한 영상 교육사이트입니다. 관리자 페이지에서 드래그 앤 드롭을 활용한 서비스 생성, 수료증 PDF 출력 기능 등 모든 프론트엔드 구현을 담당했습니다.",
      md: `
### 1) 복잡한 데이터 생성 및 수정

![](/projects/hope_image_02.webp)

하나의 서비스를 구현하기 위해 일반정보, 썸네일정보, 가격정보, 강의목록 정보가 필요했습니다. 강의목록은 서비스-세션-강의 계층 구조로 구성되며, 각 컴포넌트 사이에서 주고받는 데이터가 많아 \`\`\`zustand\`\`\`를 사용해 \`\`\`props drilling\`\`\` 문제를 예방했습니다.

클라이언트가 작성해야 할 부분이 많아 \`\`\`Accodion 컴포넌트\`\`\` 형태로 접고 펼칠 수 있도록 표현했습니다. 또한 입력값 유효성 검증을 위해 \`\`\`react-hook-form\`\`\`과 \`\`\`yup\`\`\`을 활용해 데이터 양식과 최소 조건을 만족하는 서비스를 생성할 수 있도록 구조화했습니다.

그리고 한 세션에 강의가 많아질 경우 드래그 앤 드롭으로 강의 순서를 변경할 수 있도록 구성해 복잡한 데이터를 생성하고 수정할 수 있게 했습니다.

### 2) 수료증 PDF 출력

![](/projects/hope_image_03.webp)

수료증을 PDF 파일로 출력할 수 있는 기능은 핵심 기능 중 하나였습니다. 수료증 출력 기능에 대해 어떻게 하면 구현할 수 있을지 조사해본 결과, jspdf와 html2canvas라는 오픈소스를 알게 되었습니다. \`\`\`jspdf\`\`\`는 자바스크립트 환경에서 pdf파일을 생성해주는 오픈소스이며, \`\`\`html2canvas\`\`\`는 \`\`\`html\`\`\`로 그린 화면을 이미지로 변환해주는 오픈소스입니다. \`\`\`html2canvas\`\`\`를 통해 일반적인 웹페이지를 스타일링 하듯이 구현한 뒤 이미지로 변환하고, 변환된 이미지를 \`\`\`jspdf\`\`\`를 통해 pdf 파일로 저장할 수 있습니다.

### 3) 진도율 체크 알고리즘

![](/projects/hope_image_04.webp)

진도율 체크 알고리즘을 구현하기 위해 참고할 수 있는 공유된 경험이 많지는 않았습니다. 따라서 진도율을 체크하는 알고리즘을 AI에게 물어보았고, 영상 재생 시간을 추적하는 방식에 대해서 다양한 방법을 참고할 수 있었습니다.

![](/projects/hope_image_05.webp)

저는 실시간 추적 방식과 중복된 구간을 방지한 혼합된 방식(Real-Time Tracking with Duplication Prevention Algorithm)을 이용하여 다음의 알고리즘을 구현하였고, 영상을 시청하다가 이전 위치에 되돌아가거나, 앞부분의 위치로 변경되었다면 그만큼 생략되어 중복을 방지한 추적 방식으로 구현했습니다. 즉, 최종 시청시간이 영상길이와 동일하도록 구현했습니다. 영상길이의 90% 이상을 시청했다면 해당 강의를 수강한 것으로 API를 수정하도록 구현한 방식입니다. 그리고 하나의 서비스 안에 들어있는 모든 강의를 시청해야지만 위의 수료증을 발급할 수 있도록 구현했습니다. 해당 과정을 다음 포스트에 더 자세히 설명하겠습니다.

### 4) 토스페이먼츠 API

![](/projects/hope_image_06.webp)

이번 프로젝트를 진행하면서 결제 시스템을 처음 도입해보았습니다. 결제 시스템을 토스 페이먼츠 API를 이용하여 구현하게 되었습니다. 결제 방식은 먼저 새로운 결제를 생성하고, 결제가 모두 정상적으로 이뤄지면, 그 뒤에 결제가 확인된 것을 API로 요청하도록 로직이 짜여져 있었습니다. 하지만 결제가 정상적으로 생성되기 이전에, 팝업 차단과 결제서비스 이용약관, 개인정보 처리 동의가 이뤄지지 않는 등의 에러가 발생하는 경우에는 결제 생성이 실패하게 됩니다. 여러 번 결제 시스템을 테스트해보면서 팝업 차단을 해제하기위해 결제 생성 이전에 팝업을 띄우고 팝업 차단 여부를 확인해 팝업 허용이 될 수 있도록 안내 모달을 띄우거나, 이용약관 동의에 대한 설명을 보여주는 모달을 보여줌으로써 다음 단계가 모두 잘 진행되도록 개선했습니다.

또한 결제 중 발생할 수 있는 오류 메시지를 모두 가져와서 결제 에러 시 에러 메시지를 전달할 수 있도록 구현했습니다. 그리고 결제가 모두 잘 이뤄지거나 실패했을 경우의 콜백페이지도 구현하여 사용자가 이용하기에 불편함을 최소화시켰습니다.

`,
      skills: [
        {
          name: "React",
        },
        {
          name: "Zustand",
        },
        {
          name: "react-hook-form",
        },
      ],
    },
    {
      name: "강풍윤 포트폴리오",
      image: portfolio.src,
      contribute: "개인",
      url: "portfolio-phi-pied-52.vercel.app",
      github: "https://github.com/KANGPUNGYUN/Portfolio",
      desc: "저의 포트폴리오를 명확하게 전달하는 웹사이트입니다. 저의 간단한 자기소개 및 프로젝트, 블로그, 활동내역 위주로 정리했습니다.",
      skills: [
        { name: "Three.js" },
        {
          name: "drei",
        },
        {
          name: "tailwind CSS",
        },
      ],
    },
    {
      name: "하루쓰기",
      image: harudiary.src,
      contribute: "개인",
      url: "https://www.harudiary.asia/",
      github: "https://github.com/KANGPUNGYUN/harudiary",
      desc: "하루쓰기는 일기 웹 서비스입니다. 회원가입 및 SNS 계정 로그인, 일기 쓰기/수정/삭제/조회 및 좋아요와 신고하기 등 모든 작업을 직접 구현했습니다.",
      skills: [
        {
          name: "Next.js",
        },
        {
          name: "React",
        },
        {
          name: "TypeScript",
        },
      ],
      md: `
## 1. 구글의 Lighthouse 측정으로 리팩토링하기

![하루쓰기 리펙토링](/projects/lighthouse.webp)

아래 블로그 포스트에서 하루쓰기 리팩토링 단계에서 웹 성능 23점, 접근성 27점 개선한 경험을 자세하게 작성했습니다.

[> 해당 블로그 포스트로 이동하기](https://velog.io/@kangpungyun/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81-Lighthouse%EB%A1%9C-Next.js-%EC%9B%B9-%EC%84%B1%EB%8A%A5-23%EC%A0%90-%EC%A0%91%EA%B7%BC%EC%84%B1-27%EC%A0%90-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0)

`,
    },
    {
      name: "풍년마켓",
      image: pungnyeonmarket.src,
      contribute: "팀",
      url: "https://pungnyeon.netlify.app/",
      github: "https://github.com/One-Hundred-Trials/Good-Harvest-Market",
      desc: "풍년마켓은 농산물 직거래 플랫폼입니다. 팀 내에서 회원가입과 회원정보수정, 팔로잉/팔로우 기능을 담당했습니다.",
      skills: [
        {
          name: "React",
        },
        {
          name: "Git",
        },
        {
          name: "Styled Components",
        },
      ],
      md: `
## 1. 스토리보드를 활용한 개발 방식

![스토리보드](/projects/userstory.webp)

위의 이미지처럼 모든 페이지에 대한 정보를 스토리보드에 정리하는 방식으로 개발을 진행했습니다.
웹과 관련하여 모두 정리되어 있기 때문에 어떤 개발을 해야할지 서로 명확하게 이해하고 변경에 대한 내용은 함께 참여하여
팀원 모두가 같은 개발을 목표로 진행할 수 있었습니다.
`,
    },
    {
      name: "M Stay Hotel",
      image: mstayhotel.src,
      contribute: "외주",
      url: "http://www.mstayhotelclark.com/",
      desc: "M Stay Hotel은 숙박예약서비스입니다. 전체 웹 화면 구현과 구글 맵스 API, FullCalendar 오픈소스를 활용한 숙박예약서비스 기능을 구현했습니다.",
      skills: [
        {
          name: "PHP",
        },
        {
          name: "Vue",
        },
        {
          name: "MySQL",
        },
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll-fast
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold">Projects</h2>
        <div className="flex mt-10 overflow-x-hidden w-[99vw]">
          <div
            className="flex w-full overflow-x-scroll [&>div]:flex-shrink-0"
            ref={scrollContainerRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
          >
            {projects.map((project) => (
              <Tilt
                option={{
                  max: 45,
                  scale: 0.7,
                  speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl w-[350px]"
                key={project.name}
              >
                <div className="relative w-full h-[230px]">
                  <div className="relative h-[230px]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end m-3 card-img_hover gap-1 flex-col">
                    <div
                      onClick={() => window.open(project.url, "_blank")}
                      className="bg-violet-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-violet-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-2/3 h-2/3 object-contain"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </div>
                    {project.github ? (
                      <div
                        onClick={() => window.open(project.github, "_blank")}
                        className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-600"
                      >
                        <div className="relative w-10 h-10">
                          <Image src={github.src} alt={project.name} fill />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="mt-5 text-wrap">
                  <div className="flex gap-2 items-center">
                    <h3 className="font-bold text-[24px]">{project.name}</h3>
                    <div
                      className={`pl-2 pr-2 rounded-full text-sm ${
                        project.contribute === "개인"
                          ? "bg-sky-600"
                          : project.contribute === "팀"
                          ? "bg-violet-600"
                          : "bg-pink-600"
                      }`}
                    >
                      {project.contribute}
                    </div>
                  </div>
                  <p className="mt-2 text-[14px] text-gray-400 break-keep">
                    &nbsp;&nbsp;{project.desc}
                  </p>
                </div>
                <button
                  onClick={() => openModal(project)}
                  className="mt-2 text-blue-500 hover:underline"
                >
                  자세히 보기
                </button>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <p key={skill.name} className="text-[14px]">
                      #{skill.name}
                    </p>
                  ))}
                </div>
              </Tilt>
            ))}
          </div>
        </div>
        {selectedProject && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            project={selectedProject}
          />
        )}
      </div>
    </Section>
  );
}

function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [pageGroups, setPageGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(1);

  // MOCK 데이터
  useEffect(() => {
    setPosts([
      {
        createdAt: "Thu, 22 Jul 2024 00:20:34 GMT",
        title: "외주 프로젝트를 마치면서",
        url: "https://velog.io/@kangpungyun/%EC%99%B8%EC%A3%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EB%A7%88%EC%B9%98%EB%A9%B4%EC%84%9C",
      },
      {
        createdAt: "Mon, 3 Jun 2024 19:49:11 GMT",
        title: "[프로그래머스] 베스트앨범 JS 풀이",
        url: "https://velog.io/@kangpungyun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%95%A8%EB%B2%94-JS-%ED%92%80%EC%9D%B4",
      },
      {
        createdAt: "Tue, 28 May 2024 19:49:11 GMT",
        title: "[프로그래머스] 정수삼각형 JS 풀이",
        url: "https://velog.io/@kangpungyun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%95%EC%88%98%EC%82%BC%EA%B0%81%ED%98%95-JS-%ED%92%80%EC%9D%B4",
      },
      {
        createdAt: "Wed, 22 May 2024 22:32:21 GMT",
        title: "[프로그래머스] 전력망을 둘로 나누기 JS 풀이",
        url: "https://velog.io/@kangpungyun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%84%EB%A0%A5%EB%A7%9D%EC%9D%84-%EB%91%98%EB%A1%9C-%EB%82%98%EB%88%84%EA%B8%B0-JS-%ED%92%80%EC%9D%B4",
      },
      {
        createdAt: "Sat, 18 May 2024 23:01:53 GMT",
        title: "[개발초기] 디자인 시스템 + AI 프롬프팅",
        url: "https://velog.io/@kangpungyun/%EA%B0%9C%EB%B0%9C%EC%B4%88%EA%B8%B0-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-AI-%ED%94%84%EB%A1%AC%ED%94%84%ED%8C%85",
      },
      {
        createdAt: "Tue, 07 May 2024 14:06:03 GMT",
        title: "[알고리즘] 완전 이진 트리 순회 알고리즘",
        url: "https://velog.io/@kangpungyun/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%99%84%EC%A0%84-%EC%9D%B4%EC%A7%84-%ED%8A%B8%EB%A6%AC-%EC%88%9C%ED%9A%8C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98",
      },
      {
        createdAt: "Mon, 08 Apr 2024 14:06:03 GMT",
        title: "[프로그래머스] 타겟넘버 JS 풀이",
        url: "https://velog.io/@kangpungyun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%83%80%EA%B2%9F%EB%84%98%EB%B2%84-JS-%ED%92%80%EC%9D%B4",
      },
      {
        createdAt: "Tue, 02 Apr 2024 05:40:21 GMT",
        title: "[프로그래머스] 기능개발 JS 풀이",
        url: "https://velog.io/@kangpungyun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B8%B0%EB%8A%A5%EA%B0%9C%EB%B0%9C-JS-%ED%92%80%EC%9D%B4",
      },
      {
        createdAt: "Mon, 01 Apr 2024 02:32:56 GMT",
        title: "[프로그래머스] 완주하지 못한 선수 JS 풀이",
        url: "https://velog.io/@kangpungyun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%9C-%EC%84%A0%EC%88%98-JS-%ED%92%80%EC%9D%B4",
      },
      {
        createdAt: "Sun, 31 Mar 2024 06:52:24 GMT",
        title: "[프로그래머스] 체육복 JS 풀이",
        url: "https://velog.io/@kangpungyun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B2%B4%EC%9C%A1%EB%B3%B5-JS-%ED%92%80%EC%9D%B4",
      },
      {
        createdAt: "Sun, 31 Mar 2024 04:23:05 GMT",
        title: "[프로그래머스] 최소직사각형 JS 풀이",
        url: "https://velog.io/@kangpungyun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B5%9C%EC%86%8C%EC%A7%81%EC%82%AC%EA%B0%81%ED%98%95-JS-%ED%92%80%EC%9D%B4",
      },
      {
        createdAt: "Sat, 30 Mar 2024 11:19:21 GMT",
        title: "[프로그래머스] 더 맵게 JS 풀이",
        url: "https://velog.io/@kangpungyun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%8D%94-%EB%A7%B5%EA%B2%8C-JS-%ED%92%80%EC%9D%B4",
      },
      {
        createdAt: "Sat, 30 Mar 2024 02:26:16 GMT",
        title: "[프로그래머스] K번째수 JS 풀이",
        url: "https://velog.io/@kangpungyun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-K%EB%B2%88%EC%A7%B8%EC%88%98-JS-%ED%92%80%EC%9D%B4",
      },
      {
        createdAt: "Fri, 15 Dec 2023 13:45:49 GMT",
        title: "[리팩토링] SOLID한 컴포넌트 만들기",
        url: "https://velog.io/@kangpungyun/SOLID%ED%95%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0",
      },
      {
        createdAt: "Sun, 12 Nov 2023 14:34:32 GMT",
        title:
          "[리팩토링] Next.js 13로 Lighthouse 웹 성능 23점, 접근성 27점 개선하기",
        url: "https://velog.io/@kangpungyun/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81-Lighthouse%EB%A1%9C-Next.js-%EC%9B%B9-%EC%84%B1%EB%8A%A5-23%EC%A0%90-%EC%A0%91%EA%B7%BC%EC%84%B1-27%EC%A0%90-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0",
      },
      {
        createdAt: "Tue, 07 Nov 2023 11:27:34 GMT",
        title: "[리팩토링] Lighthouse로 Next 웹 성능과 접근성 개선하기",
        url: "https://velog.io/@kangpungyun/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0%EC%9D%84-%EC%9C%84%ED%95%9C-Lighthouse-%EC%A7%80%ED%91%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0",
      },
      {
        createdAt: "Tue, 27 Jun 2023 09:44:44 GMT",
        title: "[Algorithm] 이진 탐색 js",
        url: "https://velog.io/@kangpungyun/Algorithm-%EC%9D%B4%EC%A7%84-%ED%83%90%EC%83%89-js",
      },
      {
        createdAt: "Sun, 23 Oct 2022 16:49:09 GMT",
        title: "FullCalendar 달력 내부 이벤트 직접 정의하기",
        url: "https://velog.io/@kangpungyun/FullCalendar-%EB%8B%AC%EB%A0%A5-%EB%82%B4%EB%B6%80-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A7%81%EC%A0%91-%EC%A0%95%EC%9D%98%ED%95%98%EA%B8%B0",
      },
      {
        createdAt: "Thu, 27 Apr 2023 13:00:31 GMT",
        title: "[JS] 프로토타입",
        url: "https://velog.io/@kangpungyun/JS-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85",
      },
      {
        createdAt: "Fri, 31 Mar 2023 20:24:53 GMT",
        title: "[JS] ES6 문법",
        url: "https://velog.io/@kangpungyun/JS-ES6-%EB%AC%B8%EB%B2%95",
      },
      {
        createdAt: "Fri, 31 Mar 2023 17:28:03 GMT",
        title: "[JS] 클래스",
        url: "https://velog.io/@kangpungyun/JS-%ED%81%B4%EB%9E%98%EC%8A%A4",
      },
      {
        createdAt: "Thu, 30 Mar 2023 15:58:12 GMT",
        title: "[JS] 클로저",
        url: "https://velog.io/@kangpungyun/JS-%ED%81%B4%EB%A1%9C%EC%A0%80",
      },
      {
        createdAt: "Sat, 11 Mar 2023 19:19:20 GMT",
        title: "[JS] 호이스팅",
        url: "https://velog.io/@kangpungyun/JS-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85",
      },
      {
        createdAt: "Tue, 25 Oct 2022 08:31:10 GMT",
        title: "[JS] This란?",
        url: "https://velog.io/@kangpungyun/JS-%EA%B0%9C%EB%85%90-This-%EC%A0%95%EB%A6%AC",
      },
      {
        createdAt: "Sun, 23 Oct 2022 18:07:03 GMT",
        title: "FullCalendar 시작하기",
        url: "https://velog.io/@kangpungyun/FullCalendar-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0",
      },
      {
        createdAt: "Sun, 23 Oct 2022 14:51:50 GMT",
        title: "Drag&Drop 달력 구현하기",
        url: "https://velog.io/@kangpungyun/DragDrop-%EB%8B%AC%EB%A0%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0",
      },
    ]);
  }, []);

  useEffect(() => {
    const totalPageGroups = Math.ceil(posts.length / (postsPerPage * 5));
    const groups = Array.from(
      { length: totalPageGroups },
      (_, index) => index + 1
    );
    setPageGroups(groups);
  }, [posts.length, postsPerPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevGroup = () =>
    setCurrentGroup((prevGroup) => (prevGroup > 1 ? prevGroup - 1 : prevGroup));
  const goToNextGroup = () =>
    setCurrentGroup((prevGroup) =>
      prevGroup < pageGroups.length ? prevGroup + 1 : prevGroup
    );

  const getStartPage = () => (currentGroup - 1) * 5 + 1;
  const getEndPage = () =>
    Math.min(currentGroup * 5, Math.ceil(posts.length / postsPerPage));

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold mb-12">Blog</h2>
        {currentPosts?.map((post, index) => (
          <motion.div
            key={index}
            className="pt-10 pb-10 border-t-4 flex items-center justify-between gap-[20px] w-[90vw] lg:w-[900px] lg:gap-40"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            onClick={() => window.open(post.url, "_blank")}
          >
            <div className="flex flex-col gap-3">
              <div className="sm:text-3xl text-[18px] w-[75vw] lg:w-[620px] truncate hover:text-emerald-400 cursor-pointer">
                {post.title}
              </div>
              <div className="text-emerald-400">{dateView(post.createdAt)}</div>
            </div>
            <div className="flex gap-1 text-l cursor-pointer hover:text-emerald-400">
              <div className="hidden lg:block">Read More</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[20px] h-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </motion.div>
        ))}
        <Pagination
          currentPage={currentPage}
          totalPosts={posts.length}
          pageGroups={pageGroups}
          currentGroup={currentGroup}
          paginate={paginate}
          goToPrevGroup={goToPrevGroup}
          goToNextGroup={goToNextGroup}
          getStartPage={getStartPage}
          getEndPage={getEndPage}
        />
      </div>
    </Section>
  );
}

function ContactSection() {
  const history = [
    {
      title: "경희대학교 졸업",
      titleEn: "Kyung Hee University",
      desc: "지리학 학사",
      descEn: "B.S. Geography",
    },
    {
      title: "멋쟁이사자처럼",
      titleEn: "LIKELION",
      desc: "프론트엔드 스쿨 3기 수료",
      descEn: "Certificated front-end education program",
    },
    {
      title: "정보처리기사 자격증 취득",
      titleEn: "Certificated Engineer Information Processing",
      desc: "한국산업인력공단",
      descEn: "From Human Resources Development Service of Korea",
    },
    {
      title: "`React, Hook 들어오네!?` 책 출판",
      titleEn: "E-Book co-writer",
      desc: "ISBN-9791188786664",
      descEn: "introduce React Hook",
    },
    {
      title: "네이버 부스트캠프",
      titleEn: "NAVER BOOSTCAMP",
      desc: "9기 베이직 수료",
      descEn: "Certificated NAVER BOOSTCAMP 9th Basic",
    },
  ];

  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll-fast
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact</h2>
      <div className="overflow-x-hidden flex w-[90vw]">
        <div
          className="flex gap-[30px] flex-initial overflow-x-scroll w-full "
          ref={scrollContainerRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
        >
          <motion.div
            className="mt-8 p-8 rounded-md w-96 max-w-full"
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="20px"
              className="bg-white/40 p-5 rounded-2xl w-[50vw] h-[70vw] max-w-[350px] max-h-[490px] flex flex-col items-center border-white border-2 justify-center"
            >
              <div className="bg-gray-800 w-[30vw] h-[30vw] max-w-[200px] max-h-[200px] rounded-full flex justify-center items-center">
                <div className="relative w-[30vw] h-[30vw] max-w-[200px] max-h-[200px]">
                  <Image
                    src={profile.src}
                    alt="프로필_사진"
                    className="w-full h-full object-cover rounded-full"
                    fill
                  />
                </div>
              </div>
              <div className="text-2xl mt-4">Kang Pung-Yun</div>
              <div className="text-xl text-gray-300">Web Developer</div>
              <div
                className="text-l text-gray-100 mt-2 hover:text-emerald-400 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("zkdvnd@naver.com");
                  alert("이메일 주소가 복사되었습니다(Email address copied)");
                }}
              >
                zkdvnd@naver.com
              </div>
              <div className="mt-3 flex gap-2">
                <div
                  className="w-12 h-12 bg-gray-600 rounded-full hover:bg-black cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/KANGPUNGYUN", "_blank")
                  }
                >
                  <div className="relative w-12 h-12 p-1">
                    <Image
                      src={github.src}
                      alt="github url"
                      fill
                      sizes="500px"
                    />
                  </div>
                </div>
                <div
                  className="w-12 h-12 bg-gray-600 rounded-full hover:bg-blue-600 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/pung-yun-kang-b2677a212/",
                      "_blank"
                    )
                  }
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={linkedIn.src}
                      alt="linkedIn url"
                      fill
                      sizes="500px"
                    />
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
          <motion.div
            className="mt-16 p-8 rounded-2xl bg-white/80 w-[800px] h-[70vw] max-h-[490px] text-black whitespace-nowrap"
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <h3 className="text-2xl font-bold mb-5">History</h3>
            {history.map((history) => (
              <div key={history.title} className="mt-3 ml-2">
                <div className="flex">
                  <h3 className="text-xl font-bold">{history.title}</h3>
                  <h4 className="text-lg ml-3 text-gray-600">
                    {history.titleEn}
                  </h4>
                </div>
                <div className="flex">
                  <p className="text-lg text-gray-500">{history.desc}</p>
                  <span className="text-lg ml-3 text-gray-400">
                    {history.descEn}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  const customStyle = {
    ...materialDark,
    'pre[class*="language-"]': {
      ...materialDark['pre[class*="language-"]'],
      overflowX: "auto", // 가로 스크롤
      borderRadius: "8px", // border-radius 추가
      padding: "1em",
    },
  };

  return (
    <div
      id="modal-background"
      className="z-30 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-[-100vh]"
      onClick={handleClickOutside}
    >
      <div className="z-40 bg-white p-[35px] rounded-lg w-[90vw] max-w-[1000px] text-stone-950 relative max-h-[74vh] overflow-y-scroll">
        <button
          className="absolute top-[25px] right-[25px] text-xl font-bold hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
        <p className="mb-4">{project.desc}</p>
        {project.md ? (
          <ReactMarkdown
            className="prose"
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-3xl font-bold my-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl font-bold my-4" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-bold my-4" {...props} />
              ),
              a: ({ node, ...props }) => (
                <p
                  className="my-2 text-sky-600 hover:underline cursor-pointer"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => <p className="my-2" {...props} />,
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside my-2" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside my-2" {...props} />
              ),
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={customStyle}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              img({ node, ...props }) {
                return (
                  <div className="my-4">
                    <Image
                      src={props.src}
                      alt={props.alt}
                      width={800}
                      height={600}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                );
              },
            }}
          >
            {project.md}
          </ReactMarkdown>
        ) : (
          <>
            <h3 className="text-xl font-semibold">주요 기술 스택:</h3>
            <ul className="list-disc list-inside mb-4">
              {project.skills.map((skill) => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
            {project.github && (
              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  GitHub Repository
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Interface;
