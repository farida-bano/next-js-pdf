import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4"> "Discover the Power of Next.js!" 🌟</h1>
      
      <p className="mb-4 text-lg">

      
Next.js is a popular React framework that helps you create fast, scalable, and SEO-friendly web applications. 🌐 It supports server-side rendering (SSR) and static site generation (SSG), which make web pages load faster and more efficiently. ⚡ In Next.js, routing is automatic; each page is a separate file located in the pages directory. 📂 It also features hot reloading, which reflects changes instantly during development without refreshing the page. 🔄 For easy deployment, Next.js can be seamlessly integrated with Vercel. 🚀Next.js is a popular React framework that helps you create fast, scalable, and SEO-friendly web applications. 🌐 It supports server-side rendering (SSR) and static site generation (SSG), which make web pages load faster and more efficiently. ⚡ In Next.js, routing is automatic; each page is a separate file located in the pages directory. 📂 It also features hot reloading, which reflects changes instantly during development without refreshing the page. 🔄 For easy deployment, Next.js can be seamlessly integrated with Vercel. 🚀</p>
      
      {/* Image Section */}
      <div className="mb-4">
        <Image
          src="/next.jpg"  // apni image ka path yahaan dein
          alt="Example Image"
          width={200}
          height={200}
          className="rounded"
        />
      </div>
      
      {/* PDF Link */}
      <Link href="/next.js 14.pdf" target="_blank" className="text-pink-400 hover:text-pink-800 underline">
        Open PDF Document
      </Link>
      <Link href="next.js 15.pdf" legacyBehavior>
      <a target="_blank" className="text-pink-400 hover:text-pink-800 underline">Open PDF Document</a>
      </Link>

    </div>
  );
}
