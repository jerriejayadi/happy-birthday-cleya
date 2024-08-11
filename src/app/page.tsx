"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  return (
    <main className={`p-10`}>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: -100 }}
          transition={{ ease: "linear", duration: 2 }}
        >
          <p className={`font-bold text-3xl text-[#D7B89C]`}>Hello Cleya!</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ delay: 3, duration: 2 }}
        >
          <p className={`text-center text-3xl font-bold`}>Happy Birthday!!!</p>
          <Image
            className={`flex shrink-0  duration-1000`}
            alt={``}
            src={`/Cinnamoroll.svg`}
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.button
          className={`w-full border-2 border-[#D7B89C] shadow-sm shadow-[#D7B89C] flex items-center justify-center bg-[#D4F6FD]  text-[#D7B89C] font-extrabold px-4 py-2 rounded-lg `}
          onClick={() => {
            setShow(true);
            router.push(`#wishes`);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ delay: 5, duration: 2 }}
        >
          Scroll Bawah yok{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </motion.button>
      </div>
      {show && (
        <div
          className={`flex min-h-screen flex-col items-center justify-start pt-20 pb-96`}
          id={"wishes"}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ delay: 1, duration: 2 }}
            className={`text-3xl font-extrabold`}
          >
            Semogaaa...
          </motion.div>
          <div className={`relative font-extrabold`}>
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ delay: 3, duration: 2 }}
              className={`w-60 absolute border-2 border-[#D7B89C] shadow-md shadow-[#D7B89C] top-48 -left-24 bg-[#D4F6FD] rounded-lg text-[#D7B89C] p-4 z-50`}
            >
              Semoga cc cepet gede, sekolahnya pinter, isa belajar
              <br />- Dom
            </motion.div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ delay: 2, duration: 2 }}
              className={`w-60 absolute top-12 -right-28 border-2 border-[#D7B89C] shadow-md shadow-[#D7B89C] bg-[#D4F6FD] rounded-lg text-[#D7B89C] p-4`}
            >
              Semoga tambah cantik, tambah pinter, deket sama Tuhan, sayang
              keluarga
              <br />- Kuk Fela
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 100, x: 0 }}
              transition={{ delay: 4, duration: 2 }}
              className={`w-60 absolute top-[310px] -right-28 border-2 border-[#D7B89C] shadow-md shadow-[#D7B89C] bg-[#D4F6FD] rounded-lg text-[#D7B89C] p-4 z-50`}
            >
              Makin pinter, makin cinta Tuhan, dijagoin dancenya biar bisa masuk
              JKT48
              <br />- Ko Jerrie
            </motion.div>
            <motion.div
              initial={{ opacity: 0, }}
              animate={{ opacity: 100 }}
              transition={{ delay: 5, duration: 2 }}
              className={`w-60 absolute top-[500px] -right-32 border-2 border-[#D7B89C] shadow-md shadow-[#D7B89C] bg-[#D4F6FD] rounded-lg text-[#D7B89C] p-4 z-50`}
            >
              <Image alt={``} src={`/cleya.jpg`} width={300} height={300}/>
              <p className={`text-center mt-4`}>Happy Happiest 9th Birthday, Cleya!</p>
            </motion.div>
          </div>
          <div className={`mt-96`}/>
        </div>
      )}
    </main>
  );
}
