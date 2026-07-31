"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import {
  quizQuestions,
  quizResults,
  RESULT_PRIORITY,
  QUIZ_DISCLAIMER,
  type ConstitutionType,
} from "../../_data/constitutionQuiz";

type Stage = "intro" | "quiz" | "loading" | "result";

function calcResult(answers: ConstitutionType[]): ConstitutionType {
  const tally: Record<ConstitutionType, number> = {
    taeyang: 0,
    taeeum: 0,
    soyang: 0,
    soeum: 0,
  };
  answers.forEach((type) => {
    tally[type] += 1;
  });
  const maxScore = Math.max(...Object.values(tally));
  const winner = RESULT_PRIORITY.find((type) => tally[type] === maxScore);
  return winner ?? "taeeum";
}

const fadeVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export default function ConstitutionQuiz() {
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ConstitutionType[]>([]);
  const [copied, setCopied] = useState(false);

  const total = quizQuestions.length;
  const question = quizQuestions[step];

  const resultType = useMemo(
    () => (answers.length === total ? calcResult(answers) : null),
    [answers, total]
  );
  const result = resultType ? quizResults[resultType] : null;

  const handleStart = () => {
    setStep(0);
    setAnswers([]);
    setStage("quiz");
  };

  const handleSelect = (type: ConstitutionType) => {
    const next = [...answers.slice(0, step), type];
    setAnswers(next);

    if (step + 1 < total) {
      setStep(step + 1);
      return;
    }
    setStage("loading");
    window.setTimeout(() => setStage("result"), 1400);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleRestart = () => {
    setStage("intro");
    setStep(0);
    setAnswers([]);
    setCopied(false);
  };

  const handleShare = async () => {
    if (!result) return;
    const shareText = `[리브한의원 1분 체질 자가진단] 나는 ${result.title} — ${result.tagline}`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: "체질 자가진단 결과", text: shareText, url: shareUrl });
      } catch {
        // 사용자가 공유를 취소한 경우 무시
      }
      return;
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="bg-canvas py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionTitle en="CONSTITUTION CHECK" ko="1분 체질 자가진단" center enColor="text-night" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-14 rounded-3xl border border-rule bg-canvas p-8 shadow-[0_4px_40px_rgba(47,40,32,0.06)] sm:p-12"
        >
          <AnimatePresence mode="wait">
            {stage === "intro" && (
              <motion.div
                key="intro"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-center"
              >
                <p className="font-serif-ko text-ink text-xl font-light sm:text-2xl">
                  내 몸에 맞는 체질 찾기
                </p>
                <p className="mt-4 font-sans-ko text-dim text-sm leading-relaxed">
                  나에게 가까운 답을 고르면, 사상체질 중 어떤 유형에 가까운지와
                  <br className="hidden sm:block" />
                  어울리는 관리 방향을 알려드려요. 문항 10개, 1분이면 충분합니다.
                </p>
                <p className="mx-auto mt-6 max-w-md font-sans-ko text-ink/45 text-[11px] leading-relaxed">
                  {QUIZ_DISCLAIMER}
                </p>
                <motion.button
                  onClick={handleStart}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-10 py-4 font-sans-ko text-canvas text-sm tracking-widest transition-colors duration-300 hover:bg-night"
                >
                  시작하기
                </motion.button>
              </motion.div>
            )}

            {stage === "quiz" && (
              <motion.div
                key={`q-${step}`}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="mb-2 flex items-center justify-between font-serif text-dim text-xs tracking-[0.2em]">
                  <span>Q{step + 1}</span>
                  <span>
                    {step + 1} / {total}
                  </span>
                </div>
                <div className="mb-9 h-1 w-full overflow-hidden rounded-full bg-rule">
                  <motion.div
                    className="h-full bg-gold"
                    animate={{ width: `${((step + 1) / total) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>

                <h3 className="mb-8 font-serif-ko text-ink text-xl font-light leading-snug sm:text-2xl">
                  {question.text}
                </h3>

                <div className="flex flex-col gap-3">
                  {question.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleSelect(opt.type)}
                      className="rounded-xl border border-rule px-5 py-4 text-left font-sans-ko text-ink text-sm transition-colors duration-200 hover:border-gold hover:bg-sand/30"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6 h-4">
                  {step > 0 && (
                    <button
                      onClick={handlePrev}
                      className="font-sans-ko text-dim text-xs tracking-widest transition-colors hover:text-ink"
                    >
                      ← 이전 문항
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {stage === "loading" && (
              <motion.div
                key="loading"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="py-16 text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                  className="mx-auto mb-6 h-10 w-10 rounded-full border-2 border-rule border-t-gold"
                />
                <p className="font-serif-ko font-light text-ink text-sm tracking-widest">
                  체질을 분석하고 있어요…
                </p>
              </motion.div>
            )}

            {stage === "result" && result && (
              <motion.div
                key="result"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                <p className="font-serif text-night text-xs tracking-[0.3em] mb-3">RESULT</p>
                <h3 className="mb-3 font-serif-ko text-ink text-3xl font-light sm:text-4xl">
                  당신은 <span className="text-gold">{result.title}</span>입니다
                </h3>
                <p className="mb-8 font-sans-ko text-dim text-sm">{result.summary}</p>

                <div className="mb-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
                  {result.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-xl border border-rule bg-sand/20 px-4 py-4"
                    >
                      <p className="font-sans-ko text-ink text-xs leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={result.clinic.href}
                  className="group inline-flex items-center gap-1.5 font-sans-ko text-ink text-xs tracking-widest transition-colors hover:text-gold"
                >
                  추천 관리: {result.clinic.label} 자세히 보기
                  <svg
                    width="12"
                    height="9"
                    viewBox="0 0 14 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <line x1="0" y1="5" x2="12" y2="5" />
                    <polyline points="8,1 12,5 8,9" />
                  </svg>
                </Link>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href={`/contact?utm_source=constitution_quiz&utm_content=${result.type}`}
                    className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 font-sans-ko text-canvas text-xs tracking-widest transition-colors duration-300 hover:bg-night"
                  >
                    내 체질에 맞는 상담 신청하기
                  </Link>
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center justify-center rounded-full border border-ink px-8 py-3.5 font-sans-ko text-ink text-xs tracking-widest transition-colors duration-300 hover:border-gold hover:text-gold"
                  >
                    결과 공유하기
                  </button>
                </div>
                <p className="mt-3 h-4 font-sans-ko text-gold text-[11px]">
                  {copied ? "결과 링크를 복사했어요" : ""}
                </p>

                <button
                  onClick={handleRestart}
                  className="mt-4 font-sans-ko text-dim text-xs tracking-widest transition-colors hover:text-ink"
                >
                  다시 진단하기
                </button>

                <p className="mx-auto mt-8 max-w-md font-sans-ko text-ink/40 text-[11px] leading-relaxed">
                  {QUIZ_DISCLAIMER}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
