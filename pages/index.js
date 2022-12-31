import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>masyuyu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center min-h-screen px-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl sm:text-4xl font-black">
            hi 👋 ...
            <br />
            I’m Yuhanas Yulianto
            <br />
            Web Developer Based in Indonesia
          </h1>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="max-w-sm py-2 pl-6 pr-4 border border-zinc-800 rounded-full flex items-center gap-4">
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
                let&apos;s connect
              </h2>
              <CaretCircleDoubleRightIcon size={28} />
            </div>

            <div className="flex text-slate-50 justify-center gap-4">
              <Link href="https://twitter.com/yuhanasyu" className="bg-zinc-900 border-t border-zinc-800 rounded-lg p-2">
                <TwitterIcon size={28} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yuhanas-yulianto-28474612a"
                className="bg-zinc-900 border-t border-zinc-800 rounded-lg p-2"
              >
                <LinkedinIcon size={28} />
              </Link>
              <Link href="https://github.com/yuhanasy" className="bg-zinc-900 border-t border-zinc-800 rounded-lg p-2">
                <GithubIcon size={28} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const CaretCircleDoubleRightIcon = ({ size = 24, width, height, color = "currentColor" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ?? size} height={height ?? size} fill={color} viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none"></rect>
      <path d="M201.5,54.5a104,104,0,1,0,0,147A103.9,103.9,0,0,0,201.5,54.5Zm-75.8,79.2-32,32a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L108.7,128,82.3,101.7A8.1,8.1,0,0,1,93.7,90.3l32,32A8.1,8.1,0,0,1,125.7,133.7Zm56,0-32,32a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L164.7,128l-26.4-26.3a8.1,8.1,0,0,1,11.4-11.4l32,32A8.1,8.1,0,0,1,181.7,133.7Z"></path>
    </svg>
  );
};

const TwitterIcon = ({ size = 24, width, height, color = "currentColor" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ?? size} height={height ?? size} fill={color} viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none"></rect>
      <path
        d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></path>
    </svg>
  );
};

const LinkedinIcon = ({ size = 24, width, height, color = "currentColor" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ?? size} height={height ?? size} fill={color} viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none"></rect>
      <rect
        x="36"
        y="36"
        width="184"
        height="184"
        rx="8"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></rect>
      <line
        x1="124"
        y1="120"
        x2="124"
        y2="176"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <line
        x1="84"
        y1="120"
        x2="84"
        y2="176"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <path
        d="M124,148a28,28,0,0,1,56,0v28"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></path>
      <circle cx="84" cy="80" r="16"></circle>
    </svg>
  );
};

const GithubIcon = ({ size = 24, width, height, color = "currentColor" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ?? size} height={height ?? size} fill={color} viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none"></rect>
      <path d="M224,224a8,8,0,0,1-8,8,32.1,32.1,0,0,1-32-32v-8a16,16,0,0,0-16-16H156v40a16,16,0,0,0,16,16,8,8,0,0,1,0,16,32.1,32.1,0,0,1-32-32V176H116v40a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16V176H88a16,16,0,0,0-16,16v8a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16v-8a32.1,32.1,0,0,1,14.8-27A55.8,55.8,0,0,1,48,120v-8a58,58,0,0,1,7.7-28.3A59.9,59.9,0,0,1,61.1,36,7.8,7.8,0,0,1,68,32a59.7,59.7,0,0,1,48,24h24a59.7,59.7,0,0,1,48-24,7.8,7.8,0,0,1,6.9,4,59.9,59.9,0,0,1,5.4,47.7A58,58,0,0,1,208,112v8a55.8,55.8,0,0,1-22.8,45A32.1,32.1,0,0,1,200,192v8a16,16,0,0,0,16,16A8,8,0,0,1,224,224Z"></path>
    </svg>
  );
};
