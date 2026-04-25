import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

function InfoRow({ label, value, href, icon: Icon }) {
  return (
    <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
      <div className="mb-1 text-sm text-gray-600">{label}</div>
      <div className="inline-flex items-center gap-2 text-base text-gray-700">
        {Icon ? <Icon className="h-4 w-4 text-gray-600" /> : null}
        {href ? (
          <a href={href} className="hover:text-blue-700">
            {value}
          </a>
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  );
}

function SocialIcon(label) {
  const key = label.toLowerCase();
  if (key.includes("github")) return Github;
  if (key.includes("twitter")) return Twitter;
  if (key.includes("linkedin")) return Linkedin;
  return Mail;
}

export default function Contact() {
  const { t } = useLanguage();
  const data = t.contact;

  return (
    <section id="contact" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title={data.title} subtitle={data.subtitle} />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="p-7 border border-gray-200 bg-white lg:col-span-2">
            <div className="mb-4 heading text-lg font-semibold text-gray-900">
              {data.title}
            </div>
            <div className="space-y-5">
              {data.info.map((item) => (
                <InfoRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                  icon={item.label.includes("箱") || item.label.includes("Email") ? Mail : null}
                />
              ))}
            </div>
          </div>

          <div className="p-7 border border-gray-200 bg-white">
            <div className="mb-4 heading text-lg font-semibold text-gray-900">
              {data.social.title}
            </div>
            <div className="space-y-3">
              {data.social.links.map((link) => {
                const Icon = SocialIcon(link.label);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-base text-gray-600 hover:text-blue-700"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

