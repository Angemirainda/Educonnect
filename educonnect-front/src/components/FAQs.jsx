'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Définir directement les données FAQ ici
const faqList = [
  {
    question: "Comment trouver un répétiteur sur Educonnect ?",
    answer: "Utilisez notre moteur de recherche pour filtrer les répétiteurs selon la matière, le niveau scolaire et la disponibilité."
  },
  {
    question: "Comment devenir répétiteur sur Educonnect ?",
    answer: "Remplissez le formulaire de recrutement, passez notre processus de validation et commencez à enseigner après approbation."
  },
  {
    question: "Comment payer un répétiteur via la plateforme ?",
    answer: "Vous pouvez payer directement via notre plateforme en utilisant une carte bancaire, un portefeuille mobile ou d’autres moyens sécurisés."
  },
  {
    question: "Que faire si je ne suis pas satisfait du répétiteur ?",
    answer: "Contactez notre service client : nous pouvons proposer un changement de répétiteur ou un remboursement partiel selon la situation."
  },
  {
    question: "Les paiements sont-ils sécurisés ?",
    answer: "Oui, tous les paiements passent par une passerelle certifiée SSL garantissant la protection de vos informations bancaires."
  },
  {
    question: "Puis-je réserver plusieurs séances à l'avance ?",
    answer: "Oui, vous pouvez planifier plusieurs séances avec votre répétiteur selon vos disponibilités et ses créneaux."
  }
];

export default function FAQs({ faqs = faqList }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-2xl font-semibold py-4 focus:outline-none"
            >
              {faq.question}
              <motion.span
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden text-gray-600 text-lg"
                >
                  <div className="py-3">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
