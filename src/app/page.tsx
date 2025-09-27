import Image from "next/image";
import Link from "next/link";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-gray-200 mb-2">{children}</h2>;
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#434343] rounded-2xl p-4">{children}</div>;
}

function LinkText({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="underline text-blue-300 break-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="flex justify-center bg-black min-h-dvh text-gray-100">
      <div className="w-full max-w-5xl px-5 py-8">
        {/* Header */}
        <header className="flex items-center gap-6 mb-6">
          <Image
            src="/profile.png"
            alt="Profile photo"
            width={120}
            height={120}
            className="rounded-2xl bg-[#111827] object-cover"
            priority
          />
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold">Jacky Hertanto</h1>
          </div>
        </header>

        {/* Two columns */}
        <div className="gap-6 flex">
          {/* Left column */}
          <div className="md:col-span-1 space-y-6 w-1/2">
            {/* Contact */}
            <Card>
              <SectionTitle>Contact</SectionTitle>

              <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                <span className="text-gray-300">Phone:</span>
                <span className="text-gray-200">+62 82268679839</span>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                <span className="text-gray-300">Email:</span>
                <span className="text-gray-200">hertantojacky2@gmail.com</span>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                <span className="text-gray-300">Address:</span>
                <span className="text-gray-200">
                  Paddington Heights, Jl. Lingkar Barat, Alam Sutera
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-gray-300">LinkedIn:</span>
                <LinkText
                  href="https://www.linkedin.com/in/jacky-hertanto"
                  label="linkedin.com/in/jacky-hertanto"
                />
              </div>
            </Card>

            {/* Education */}
            <Card>
              <SectionTitle>Education</SectionTitle>
              <div className="mb-3">
                <div className="font-semibold text-gray-100">
                  SMA Kristen Calvin, Jakarta
                </div>
                <div className="text-gray-300">2020 – 2023</div>
              </div>
              <div>
                <div className="font-semibold text-gray-100">
                  Bina Nusantara University, Tangerang
                </div>
                <div className="text-gray-300">
                  2023 – 2027 · B.Sc. in Computer Science (Software Engineering)
                </div>
              </div>
            </Card>
          </div>

          {/* Right column */}
          <div className="  space-y-6 w-1/2">
            {/* Projects */}
            <Card>
              <SectionTitle>Projects</SectionTitle>

              <div className="mb-4">
                <div className="font-semibold text-gray-100">PlanIt</div>
                <p className="text-gray-300">Task planning web app.</p>
                <LinkText
                  href="https://github.com/JCKYHRTNT/PlanIt"
                  label="github.com/JCKYHRTNT/PlanIt"
                />
              </div>

              <div className="mb-4">
                <div className="font-semibold text-gray-100">Email Spam Detector</div>
                <p className="text-gray-300">
                  Machine learning project for spam classification.
                </p>
                <LinkText
                  href="https://github.com/JCKYHRTNT/EmailSpamDetector"
                  label="github.com/JCKYHRTNT/EmailSpamDetector"
                />
              </div>

              <div className="mb-4">
                <div className="font-semibold text-gray-100">Code Refactor</div>
                <p className="text-gray-300">
                  Refactored legacy codebase for readability & efficiency.
                </p>
                <LinkText
                  href="https://github.com/JCKYHRTNT/Code_Refactor_9"
                  label="github.com/JCKYHRTNT/Code_Refactor_9"
                />
              </div>

              <div>
                <div className="font-semibold text-gray-100">gInk</div>
                <p className="text-gray-300">
                  Forked open-source annotation tool, ongoing project.
                </p>
                <LinkText
                  href="https://github.com/JCKYHRTNT/gInk"
                  label="github.com/JCKYHRTNT/gInk"
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-7 text-sm text-gray-400">
          © {new Date().getFullYear()} Jacky Hertanto
        </footer>
      </div>
    </main>
  );
}
