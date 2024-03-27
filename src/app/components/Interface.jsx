import { motion } from "framer-motion";

import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  next,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
} from "../../../public/skills";

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
          duration: 1,
          delay: 0.6,
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
      <SkillsSection />
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
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I&#39;m
        <br />
        <span>Kang Pung yun</span>
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
          duration: 1,
          delay: 1.5,
        }}
      >
        I&#39;m Web Developer.
        <br />
        I&#39;m interested in 3D Modeling, GIS and AI tools.
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
          duration: 1,
          delay: 2,
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

function SkillsSection() {
  const skills = [
    {
      name: "HTML 5",
      icon: html.src,
    },
    {
      name: "CSS 3",
      icon: css.src,
    },
    {
      name: "JavaScript",
      icon: javascript.src,
    },
    {
      name: "TypeScript",
      icon: typescript.src,
    },
    {
      name: "React JS",
      icon: reactjs.src,
    },
    {
      name: "Next JS",
      icon: next.src,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind.src,
    },
    {
      name: "Node JS",
      icon: nodejs.src,
    },
    {
      name: "Three JS",
      icon: threejs.src,
    },
    {
      name: "git",
      icon: git.src,
    },
    {
      name: "figma",
      icon: figma.src,
    },
  ];

  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold">Skills</h2>
        <motion.div
          className="mt-8 p-8 rounded-2xl bg-white/80 w-96 max-h-lvh flex flex-wrap justify-center"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          {skills.map((skill) => (
            <div
              className="w-1/3 h-1/3 min-w-16 min-h-16 p-4 flex flex-col justify-center items-center"
              key={skill.name}
            >
              <div className="relative w-1/3 h-1/3 min-w-16 min-h-16">
                <Image src={skill.icon} alt={skill.name} fill />
              </div>
              <p className="text-black text-center">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
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
                      className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
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
                        className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
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
  const posts = [
    {
      title: "[리팩토링] SOLID한 컴포넌트 만들기",
      url: "https://velog.io/@kangpungyun/SOLID%ED%95%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0",
      tags: [{ name: "SOLID" }, { name: "Refactoring" }],
    },
    {
      title:
        "[리팩토링] Next.js 13로 Lighthouse 웹 성능 23점, 접근성 27점 개선하기",
      url: "https://velog.io/@kangpungyun/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81-Lighthouse%EB%A1%9C-Next.js-%EC%9B%B9-%EC%84%B1%EB%8A%A5-23%EC%A0%90-%EC%A0%91%EA%B7%BC%EC%84%B1-27%EC%A0%90-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0",
      tags: [{ name: "Next.js" }, { name: "Refactoring" }],
    },
  ];
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-bold mb-12">Blog</h2>
        {posts.map((post) => (
          <motion.div
            key={post.title}
            className="pt-10 pb-10 border-t-4 w-full flex items-center justify-between gap-40"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
          >
            <div className="flex flex-col gap-3">
              <div className="text-3xl">{post.title}</div>
              <div className="flex gap-5">
                {post.tags.map((tag) => (
                  <div className="text-emerald-400" key={tag.name}>
                    {tag.name}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex gap-1 text-l cursor-pointer hover:text-emerald-400"
              onClick={() => window.open(post.url, "_blank")}
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
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
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact</h2>
      <motion.div
        className="mt-8 p-8 rounded-md w-96 max-w-full"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="bottom"
          glareBorderRadius="20px"
          className="bg-white/40 p-5 rounded-2xl sm:w-[350px] sm:h-[490px] w-[40vw] h-[56vw] flex flex-col items-center border-white border-2 justify-center"
        >
          <div className="bg-gray-800 w-[24vw] h-[24vw] sm:w-[200px] sm:h-[200px] rounded-full flex justify-center items-center">
            <div className="relative w-[24vw] h-[24vw] sm:w-[200px] sm:h-[200px]">
              <Image
                src={profile.src}
                alt="프로필_사진"
                className="w-full h-full object-cover rounded-full"
                fill
              />
            </div>
          </div>
          <div className="sm:text-3xl text-[22px] mt-4">Kang Pung_yun</div>
          <div className="sm:text-xl text-[16px] text-gray-300">
            Web Developer
          </div>
          <div
            className="sm:text-l text-[12px] text-gray-100 mt-2 hover:text-emerald-400 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("zkdvnd@naver.com");
              alert("이메일 주소가 복사되었습니다(Email address copied)");
            }}
          >
            zkdvnd@naver.com
          </div>
          <div className="sm:mt-6 mt-3 flex gap-2">
            <div
              className="sm:w-12 sm:h-12 w-[5vh] h-[5vh] bg-gray-600 rounded-full hover:bg-black cursor-pointer"
              onClick={() =>
                window.open("https://github.com/KANGPUNGYUN", "_blank")
              }
            >
              <div className="relative sm:w-12 sm:h-12 w-[5vh] h-[5vh] p-1">
                <Image src={github.src} alt="github url" fill sizes="500px" />
              </div>
            </div>
            <div
              className="sm:w-12 sm:h-12 w-[5vh] h-[5vh] bg-gray-600 rounded-full hover:bg-blue-600 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/pung-yun-kang-b2677a212/",
                  "_blank"
                )
              }
            >
              <div className="relative sm:w-12 sm:h-12 w-[5vh] h-[5vh]">
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
    </Section>
  );
}
export default Interface;
