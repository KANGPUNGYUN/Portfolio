import { motion } from "framer-motion";

import {
  harudiary,
  mstayhotel,
  pungnyeonmarket,
  github,
} from "../../../public/projects";

import { Tilt } from "react-tilt";

import linkedIn from "../../../public/linkedIn.png";
import profile from "../../../public/profile.jpg";
import Image from "next/image";
import TypingAnimation from "./TypingAnimation";
import { useState, useEffect } from "react";
import dateView from "../utils/date";
import Pagination from "./Pagination";

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
        성장 포인트를 찾고, 효율적인 업무 방식을
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
      name: "하루쓰기",
      image: harudiary.src,
      contribute: "개인",
      url: "https://www.harudiary.site/",
      github: "https://github.com/KANGPUNGYUN/harudiary",
      desc: "하루쓰기는 일기 웹 서비스입니다. 회원가입 및 SNS 계정 로그인, 일기 쓰기/수정/삭제/조회 및 좋아요와 신고하기 등 모든 기능을 구현했습니다.",
      skills: [
        {
          name: "Next.js",
        },
        {
          name: "React",
        },
        {
          name: "Vercel",
        },
      ],
    },
    {
      name: "풍년마켓",
      image: pungnyeonmarket.src,
      contribute: "팀",
      url: "https://pungnyeon.netlify.app/",
      github: "https://github.com/One-Hundred-Trials/Good-Harvest-Market",
      desc: "풍년마켓은 농산물 직거래 플랫폼입니다. 회원가입과 회원정보수정, 팔로잉/팔로우 기능을 담당했습니다.",
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
    },
    {
      name: "M Stay Hotel",
      image: mstayhotel.src,
      contribute: "외주",
      url: "http://www.mstayhotelclark.com/",
      desc: "M Stay Hotel은 숙박예약서비스입니다. 웹 화면 구현과 구글 맵스 API, FullCalendar 오픈소스를 활용한 숙박예약서비스 기능을 구현했습니다.",
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

  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold">Projects</h2>
        <div className="flex mt-10 overflow-x-hidden w-[90vw]">
          <div className="flex w-full overflow-scroll [&>div]:flex-shrink-0">
            {projects.map((project) => (
              <Tilt
                option={{
                  max: 45,
                  scale: 1,
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
                      className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-600"
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
                  <p className="mt-2 text-[14px] text-gray-400">
                    {project.desc}
                  </p>
                </div>

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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://portfolio-phi-pied-52.vercel.app/api"
        );
        const responseData = await response.text();
        let xmlDocs = new DOMParser().parseFromString(responseData, "text/xml");
        let items = xmlDocs.getElementsByTagName("item");
        const postsData = [];
        for (let item of items) {
          let post = {
            title: item.querySelector("title").textContent,
            url: item.querySelector("link").textContent,
            createdAt: item.querySelector("pubDate").textContent,
          };
          postsData.push(post);
        }
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching external data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const totalPageGroups = Math.ceil(posts.length / (postsPerPage * 5)); // 5개씩 페이지 그룹 생성
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
        {currentPosts.map((post, index) => (
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
          >
            <div className="flex flex-col gap-3">
              <div
                className="sm:text-3xl text-[18px] lg:w-[610px] truncate hover:text-emerald-400"
                onClick={() => window.open(post.url, "_blank")}
              >
                {post.title}
              </div>
              <div className="text-emerald-400">{dateView(post.createdAt)}</div>
            </div>
            <div
              className="flex gap-1 text-l cursor-pointer hover:text-emerald-400"
              onClick={() => window.open(post.url, "_blank")}
            >
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
  ];
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact</h2>
      <div className="overflow-x-hidden flex w-[90vw]">
        <div className="flex gap-[30px] flex-initial overflow-x-scroll w-full">
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
              className="bg-white/40 p-5 rounded-2xl w-[350px] h-[490px] flex flex-col items-center border-white border-2 justify-center"
            >
              <div className="bg-gray-800 w-[200px] h-[200px] rounded-full flex justify-center items-center">
                <div className="relative w-[200px] h-[200px]">
                  <Image
                    src={profile.src}
                    alt="프로필_사진"
                    className="w-full h-full object-cover rounded-full"
                    fill
                  />
                </div>
              </div>
              <div className="text-3xl mt-4">Kang Pung-Yun</div>
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
            className="mt-16 p-8 rounded-2xl bg-white/80 w-[800px] h-[490px] text-black whitespace-nowrap"
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
            <h3 className="text-3xl font-bold mb-6">History</h3>
            {history.map((history) => (
              <div key={history.title} className="mt-4 ml-3">
                <div className="flex">
                  <h3 className="text-2xl font-bold">{history.title}</h3>
                  <h4 className="text-xl ml-3 text-gray-600">
                    {history.titleEn}
                  </h4>
                </div>
                <div className="flex">
                  <p className="text-xl text-gray-500">{history.desc}</p>
                  <span className="text-xl ml-3 text-gray-400">
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
export default Interface;
