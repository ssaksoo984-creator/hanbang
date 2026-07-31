"use client";

import { motion } from "framer-motion";
import SafeImage from "../ui/SafeImage";

const quote = `몸이 아프면 마음도 함께 시들기 마련입니다.

저는 진료실에서 병을 보기 전에 사람을 먼저 봅니다. 어떤 하루를 보내오셨는지, 어디가 가장 힘드신지 천천히 여쭙는 이유입니다. 급하게 지나치지 않고, 당신의 체질과 삶의 리듬을 헤아려 가장 잘 맞는 길을 찾아드리고 싶습니다.

가족을 대하는 마음으로, 오늘도 진심을 담아 진료하겠습니다.`;

export default function DoctorIntro() {
  return (
    <section className="bg-night px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        {/* 왼쪽 타이틀 */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="font-serif text-sand text-xs tracking-[0.3em] mb-5">OUR PROMISE</p>
          <h2 className="font-serif-ko text-canvas text-3xl md:text-4xl font-light leading-snug">
            환자를 최우선시 생각합니다.
          </h2>
          <h2 className="mt-2 font-serif-ko text-dim text-2xl md:text-3xl font-light leading-snug">
            그리고 그들의 체질에 맞는 진단을 합니다.
          </h2>
          <div className="mt-8 h-px w-10 bg-sand" />
        </div>

        {/* 오른쪽 — 스크롤 시 등장하는 원장 사진 & 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-8"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-canvas/10">
            <SafeImage
              src="/images/doctors/doctor-01.jpg"
              alt="김도현 대표원장"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-serif text-gold text-5xl leading-none">&ldquo;</p>
            <p className="mt-2 font-sans-ko text-canvas/85 text-base md:text-lg leading-loose whitespace-pre-line">
              {quote}
            </p>
            <p className="mt-6 font-serif-ko font-light text-canvas text-sm tracking-widest">
              김도현 대표원장
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
