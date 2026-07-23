import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-udrl-border mt-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        {/* UCSB logo */}
        <a href="https://www.ucsb.edu/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/UCSB_wordmark.svg"
            alt="UC Santa Barbara"
            width={220}
            height={69}
          />
        </a>

        {/* Address */}
        <address className="not-italic text-base text-udrl-gray leading-relaxed text-right">
          Urban Data Research Lab<br />
          Department of Geography<br />
          UC Santa Barbara<br />
          Ellison Hall 4818<br />
          Santa Barbara, CA 93106
        </address>
      </div>
    </footer>
  );
}
