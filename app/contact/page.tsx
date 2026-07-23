import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-xs font-bold tracking-widest uppercase text-udrl-dark mb-10">CONTACT</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Address */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-udrl-gray mb-4">
            Location
          </h2>
          <address className="not-italic text-udrl-dark leading-relaxed">
            <p className="font-medium">Urban Data Research Lab</p>
            <p className="text-udrl-gray mt-2">Department of Geography</p>
            <p className="text-udrl-gray">UC Santa Barbara</p>
            <p className="text-udrl-gray">Ellison Hall 4818</p>
            <p className="text-udrl-gray">Santa Barbara, CA 93106</p>
          </address>
        </div>

        {/* Email */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-udrl-gray mb-4">
            Email
          </h2>
          <a
            href="mailto:wenfeixu@ucsb.edu"
            className="text-udrl-dark font-medium hover:underline underline-offset-4"
          >
            wenfeixu@ucsb.edu
          </a>

          <div className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-udrl-gray mb-4">
              Affiliated With
            </h2>
            <ul className="space-y-2 text-udrl-gray text-sm">
              <li>
                <a
                  href="https://www.geog.ucsb.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 text-udrl-blue"
                >
                  Department of Geography, UC Santa Barbara
                </a>
              </li>
              <li>
                <a
                  href="https://www.ucsb.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 text-udrl-blue"
                >
                  University of California, Santa Barbara
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
