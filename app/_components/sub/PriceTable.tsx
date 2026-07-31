"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

interface FeeItem {
  name: string;
  price: string;
  note?: string;
}

interface FeeGroup {
  category: string;
  items: FeeItem[];
}

interface PriceTableProps {
  title: string;
  subtitle: string;
  groups: FeeGroup[];
  footnote?: string;
}

export default function PriceTable({
  title,
  subtitle,
  groups,
  footnote,
}: PriceTableProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-canvas">
      <div className="max-w-4xl mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        <div className="mt-14 flex flex-col gap-12">
          {groups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: gi * 0.08 }}
            >
              <h3 className="font-serif-ko text-ink text-lg font-light mb-4 pb-3 border-b border-ink/20">
                {group.category}
              </h3>
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.name} className="border-b border-rule last:border-0">
                      <td className="py-3.5 pr-4 font-sans-ko text-ink">
                        {item.name}
                        {item.note && (
                          <span className="block text-xs text-dim mt-0.5">
                            {item.note}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 text-right font-serif text-gold tracking-wide whitespace-nowrap">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          ))}
        </div>

        {footnote && (
          <p className="mt-12 font-sans-ko text-dim text-xs leading-relaxed text-center whitespace-pre-line">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
